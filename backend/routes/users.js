const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth")
let User = require('../models/user.model');


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post( async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const passwordCheck = req.body.password;

  if (!email || !username || !password || !passwordCheck)
    return res
    .status(400)
    .json({msg:"Please enter information into all the fields."});
  if (password.length < 8)
    return res
    .status(400)
    .json({msg:"The password must be at least 8 characters."});
  if (password !== passwordCheck)
    return res
    .status(400)
    .json({msg:"Passwords do not match!"});

  const existingUser = await User.findOne({email: email})

  if (existingUser)
  return res
    .status(400)
    .json({msg:"An account with this email already exists. Please message admin if you have forgotten your password."});

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password,salt);


  const newUser = new User({
    email,
    username,
    password : passwordHash,
  });

  newUser.save()
    .then(() => res.json(`${username}  added!`))
    .catch(err => res.status(400).json('Error: ' + err));


});

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password)
  return res
    .status(400)
    .json({msg:"Please enter information into all the fields."});
  
  const user = await User.findOne({username : username});
  if (!user)
  return res
    .status(400)
    .json({msg:"No account with this username. Please contact admin if you feel there is a mistake."});
  
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch)
  return res
    .status(400)
    .json({msg:"Invalid credentials."});
  
  const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN);
  res.json({
    token,
    user:{
      id: user._id,
      username:user.username,
    }
  })

})

router.delete('/delete', auth, async (req,res) => {
  const deletedUser = await User.findByIdAndDelete(req.user);
  res.json(deletedUser);
});

router.post("/tokenIsValid", async(req, res) => {
  const token = req.header("x-auth-token");
  if (!token) 
  return res.json(false);

  const verified = jwt.verify(joken, process.env.JWT_TOKEN)
  if(!verified)
  return res.json(false);

  const user = await User.findById(verified.id)
  if(!user)
  return res.json(false);

  return res.json(true)

})

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id});
})

module.exports = router;