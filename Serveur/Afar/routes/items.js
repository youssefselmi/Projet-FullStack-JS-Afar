var express = require('express');
var multer = require("multer");
const app =express();
var router = express.Router();
const Item = require('../models/item');
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

/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });*/
  router.get('/afficher',async(req,res)=>{
      try{
          const items = await Item.find()
          res.json(items)

      }catch(err){
          res.send('Error' + err)
      }
  })
  router.get('/:id',async(req,res)=>{
    try{
        const items = await Item.findById(req.params.id)
        res.json(items)

    }catch(err){
        res.send('Error' + err)
    }
})
  router.post('/ajouter',upload.single("photo"),async(req,res,next)=>{
   const path = req.file.path
   const pas = req.body.itemName
   const par = req.body.categorie
   const paz = req.body.price
    //console.log(req.file.path)
    //const { itemName, price , categorie} = req.body
   
      const item = new Item({
          
          itemName:pas,
          picture:path  ,
          price:paz ,
          categorie:par
      })
      try{
           const a1= await item.save()
           res.json(a1)

      }catch(err){
          res.send('Error' + err)
      }

  })
  router.put('/modifer/:id',async(req,res)=>{
      try{
          const item = await Item.findById(req.params.id)
          item.price = req.body.price 
          
          const a1 = await item.save()
          res.json(a1)

      }catch(err){
          res.send('Error'+ err)
      }
  })
  router.delete('/supprimer/:id',async(req,res)=>{
    try{
        const item = await Item.findById(req.params.id)
        const a1 = await item.remove()
        res.send('Element supprime')
        

    }catch(err){
        res.send('Error'+ err)
    }
})


  module.exports = router;