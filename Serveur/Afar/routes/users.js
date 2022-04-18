
var express = require('express');
var multer = require ('multer');
var router = express.Router();
 const cors = require('cors');
 const bcrypt = require('bcryptjs');
 const jwt = require("jsonwebtoken");

 const secret = "test";

 const UserModal = require("../models/user");
 const User = require("../models/user");
router.use(cors({
    origin:'*'
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
  router.post("/login",async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (!oldUser)
        return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id },secret, {
        expiresIn: "1h",
      });
  
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  });
  

  router.post('/register'/*,upload.single("photo")*/,async (req,res)=> {
    
    const { email, password, firstName, lastName } = req.body;

    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser)
        return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await  UserModal.create({
        email,
        password: hashedPassword,
        name: `${firstName} ${lastName}`,
      });
  
      const token = jwt.sign({ email: result.email, id: result._id }, secret, {
        expiresIn: "1h",
      });
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
  
      console.log(error);
    }
})


router.put('/passwordreset/:resetToken', async(req, res, next) => {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resetToken)
      .digest("hex");
  
    try {
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });
  
      if (!user) {
        return next(new ErrorResponse("Invalid Token", 400));
      }
  
      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
  
      await user.save();
  
      res.status(201).json({
        success: true,
        data: "Password Updated Success",
        token: user.getSignedJwtToken(),
      });
    } catch (err) {
      next(err);
    }
  });
  
  const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ sucess: true, token });
  };

  router.get('/all',async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
  
    }catch(err){
        res.send('Error' + err)
    }
  })
  router.get('/:id',async(req,res)=>{
    try{
        const Auser = await User.findById(req.params.id)
        res.json(Auser)
  
    }catch(err){
        res.send('Error' + err)
    }
  })

  router.put('/modifier/:id',async(req,res)=>{
    try{
        var Auser = await User.findById(req.params.id)
        Auser.firstName = req.body.firstName
        Auser.lastName = req.body.lastName
        
        Auser = await User.create(Auser)
        res.json(Auser)

    }catch(err){
        res.send('Error'+ err)
    }
})

router.delete('/delete/:id', async(req, res) => {

  const id = req.params.id;
  await User.findByIdAndRemove(id).exec();
  res.send("user deleted");
});
  
module.exports = router;