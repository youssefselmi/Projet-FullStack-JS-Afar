var express = require('express');
var multer = require("multer");
var router = express.Router();


const Livreur = require('../models/livreur');
const cors =require('cors');
router.use(cors({
    origin: '*'
}));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${+new Date()}.jpg`);
  }
});
const upload = multer({
  storage
});

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


router.get('/:id', function(req, res, next) {
  Livreur.findById( req.params.id,(err, livreurs) => {
    res.render(
        'form.twig',
             { title2 :
    "Recherche par id ", livreurById :
    livreurs
             }
           );
        }
        );
    })

router.get('/delete/:id', function(req, res, next) {
  Livreur.findByIdAndRemove(req.params.id,function(err,docs){
    if(err)
    console.log(err);
    
    return res.status(200).json({
      success:true,
  })

  }) });
  router.post('/delete3/:id', function(req,res,next){
    Livreur.findByIdAndRemove(req.params.id, 
        function (err, docs) {
          if (err)
              console.log(err);
          res.send("Livreur deleted");
      })
  });

  router.delete('/supprimer/:id',async(req,res)=>{
    Livreur.findByIdAndRemove(req.params.id,function(err,docs){
      if(err)
      console.log(err);
      
      return res.status(200).json({
        success:true,
    })
  
    })
});
  router.get('/delete2/:id', function(req, res, next) {
    Livreur.findById({_id:req.params.id},function(err,docs){
      if(err)
      console.log(err);
      doc.remove(function(err,Livreur){
        res.redirect('/Livreur');
      
    }) }) });
  
router.post('/add', upload.single("photo"),function(req, res, next) {
    new Livreur({
             
    nom : req.body.nom,
    prenom : req.body.prenom,
    picture: req.body.picture,
    email : req.body.email,
    num : req.body.num,
    addr:req.body.addr,
    region: req.body.region,    
    modele: req.body.modele,
    type: req.body.type,
    password:req.body.password,


             })
             .save(
               (err, newlivreur)=>{
    if (err) return res.json({succes:false,err});
                     console.log("error message :" +err);
                     return res.status(200).json({
                         success:true,
                     })
     
               }
             );
            })
            router.delete('/deletef/:id', function(req, res, next) {
              Service.findByIdAndRemove(req.params.id,function(err,docs){
                if(err)
                console.log(err);
                
                return res.status(200).json({
                  success:true,
              })
            
              }) });
            
             //edit
            router.post('/edit/:id', function (req, res, next) {
                console.log("edit");
                console.log(req.body);
                console.log("######");
              
                Offer.exists({ _id: req.params.id },
                  (err, result) => { /*  */
                    console.log("result " + result); /* res.json(livreurs)  */
                    console.log(result);
              
                    if (result) {
                      console.log("true");
                      Offer.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
                        console.log(data);
                        // res.redirect('/livreur');
                        res.json(" : Livreur :" + Offer._id + " updated"); 
            
                      });
                      // res.json(result)
                    } else {
                      console.log("false");
                      res.json(result)
              
                    }
              
                  }
                );
              
              });
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

module.exports = router;
