var express = require('express');
var multer = require("multer");
var router = express.Router();
const ErrorResponse = require('../utils/errorResponse');
const nodemailer = require("nodemailer");


const Livreur = require('../models/livreur');
const cors =require('cors');
router.use(cors({
    origin: '*'
}));
router.get('/list',async(req,res)=>{
  

  try{
      const livreurs = await Livreur.find()
      res.json(livreurs)

  }catch(err){
      res.send('Error' + err)
  }
})

router.get('/:id',async(req,res)=>{
  try{
      const livreurs = await Livreur.findById(req.params.id)
      res.json(livreurs)

  }catch(err){
      res.send('Error' + err)
  }
})

router.delete('/supprimer/:id',async(req,res)=>{
    Livreur.findByIdAndRemove(req.params.id,function(err,docs){
      if(err)
      console.log(err);
      
      return res.status(200).json({
        success:true,
    })
  
    })
});

router.get('/listt',async(req,res,next)=>{
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Livreur.find().estimatedDocumentCount();


  try {
    const livreurs = await Livreur.find().sort({createdAt: -1}).populate()
    .skip(pageSize * (page-1))
    .limit(pageSize)

    res.status(200).json({
        success: true,
        livreurs,
        page,
        pages: Math.ceil(count / pageSize),
        count
    })
    next();
} catch (error) {
    return next(new ErrorResponse('Server error', 500));
}
})

router.get('/:id',async(req,res)=>{
  try{
      const livreurs = await Livreur.findById(req.params.id)
      res.json(livreurs)

  }catch(err){
      res.send('Error' + err)
  }
})


  
router.post('/add',async(req,res,next)=> {
    const{
             
    nom , prenom , picture, email ,num , addr,region,modele,type,
    age, disponibilite,
    password }=req.body;

   const livreurExists = await Livreur.findOne({ email });

 
  if (livreurExists){
    res.status(422).json("exist");
  }
  try{
  const livreur = await Livreur.create(req.body);
  res.status(201).json({
    success: true,
    livreur
});
  }
  catch (err) {
    next(err);
  }
})
        
            router.patch("/updatelivreur/:id", async(req, res) => {
              try {
                  const { id } = req.params;
          
                  const updatelivreur = await Livreur.findByIdAndUpdate(id, req.body, {
                      new: true
                  });
          
                  console.log(updatelivreur);
                  res.status(201).json(updatelivreur);
          
              } catch (error) {
                  res.status(422).json(error);
              }
          })
          
router.post('/mail',async(req,res,next)=> {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const{ email,region }=req.body;
    var maillist = [ await Livreur.find({ email })  ];
    var livreurRegion = [ await Livreur.find({ region })  ];
    //var userRegion= [ await User.findOne({ region })  ];
    
    var msg = {
        from: "nsporify@gmail.com", //sender address
        subject: "Demande livreur", //Subject line
        text: "soltani ala 21136025  demande livreur", //plaintext body
          
        // html: "<b>Hello world ✔</b>" //html body
    }
    
    
    maillist.forEach(function (to, i , array) {
      msg.to = to;
    
      transporter.sendMail(msg, function (err) {
        if (err) { 
          res.status(422).json("err");
          return;
        } else { 
          res.status(201).json({
            success: true,
           
        });
        }
    
        if (i === maillist.length - 1) { msg.transport.close(); }
      });
    });
  })
      


module.exports = router;
