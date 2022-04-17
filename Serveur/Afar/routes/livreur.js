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

router.delete('/supprimer/:id',async(req,res)=>{
    Livreur.findByIdAndRemove(req.params.id,function(err,docs){
      if(err)
      console.log(err);
      
      return res.status(200).json({
        success:true,
    })
  
    })
});

  
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
    age: req.body.age,
    disponibilite: req.body.disponibilite,
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
            

module.exports = router;
