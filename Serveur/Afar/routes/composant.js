var express = require('express');
var router = express.Router();
var Composant = require('../models/composant');
const app = express();
app.use(express);



let cors = require("cors");
router.use(cors());



router.post('/add', async(req, res, next) => {
  /*  new Composant({
            Name: req.body.Name,
            Etat: req.body.Etat,
            Marque: req.body.Marque,
            Description: req.body.Description,
            Image: req.body.Image,
            Prix: req.body.Prix,
            Livraison: req.body.Livraison,
            DateFabrication: req.body.DateFabrication,



        })
        .save(
            (err, newcomposant) => {
                if (err)
                    console.log("error message :" + err);
                else {
                    console.log(newcomposant);
                    res.send("Composant Added Succesfully");

                }
            }
        );
})*/


// console.log(req.body);
const {Name,Etat,Marque,Description,Image,Prix,Livraison} = req.body;

if(!Name || !Etat || !Marque || !Description || !Image || !Prix || !Livraison){
    res.status(422).json("plz fill the data");
}

try {
    
        const adduser = new Composant({
            Name,Etat,Marque,Description,Image,Prix,Livraison});

        await adduser.save();
        res.status(201).json(adduser);
        console.log(adduser);
    
        

} catch (error) {
    res.status(422).json(error);
}
})






router.put('/update', async(req, res) => {
    const newComposantName = req.body.newComposantName;
    // const newComposantEtat = req.body.newComposantEtat;

    const id = req.body.id;

    try {

        await Composant.findById(id, (err, updatedComposant) => {

            updatedComposant.Name = newComposantName;
            // updatedComposant.Etat = newComposantEtat;

            updatedComposant.save();
            res.send("update");
        });

    } catch (err) {
        console.log(err);
    }
});




router.delete('/delete/:id', async(req, res) => {

    const id = req.params.id;
    await Composant.findByIdAndRemove(id).exec();
    res.send("deleted");


});






router.get('/find/:id', async(req, res) => {



    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await Composant.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }

});












router.get('/read', function(req, res, next) {
    Composant.find(
        (err, composants) => {
            res.render(
                'composant.twig', {
                    title: "Composant list",
                    cont: composants
                }
            );
        }
    );
})



router.get("/readcomposants", async(req, res) => {
    Composant.find({}, (err, result) => {

        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})















router.patch("/updatecompo/:id", async(req, res) => {
    try {
        const { id } = req.params;

        const updatecomposant = await Composant.findByIdAndUpdate(id, req.body, {
            new: true
        });

        console.log(updatecomposant);
        res.status(201).json(updatecomposant);

    } catch (error) {
        res.status(422).json(error);
    }
})

























module.exports = router;