const express=require('express')
const router=express.Router()
const Tasks=require('./schema')
const Users=require('./user.schema')

//UserSchema lai

router.post('/user/post',async(req,res)=>
    {
      hashpassword(req.body.password),(err,hash)=>{
        if(err){
          res.status(200).json(err);
        }
        const newUser= new Users({
          contact:req.body.contact,
          password:hash
        });
      newUser.save().then(()=>{
        res.status(200).json('success')
      })
      .catch((err)=>{
        res.status(201).json(err)
      })
      };
      
    }
    //   try{
    //       let newUser=new Users(req.body);
    //       const savedUser=await newUser.save();
    //       res.status(200).json('User Posted');
    //     }
    //   catch(err)
    //       {
    //         console.log(err);
    //       }
    // }  
)


router.post('/user/login',(req,res)=>{
  Users.findOne({ email: req.body.email })
  .then((Users) => {
    if (!Users) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    bcrypt.compare(req.body.password, Users.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      const token = jwt.sign({ email: Users.email }, 'secret_key');
      res.status(200).json({ token: token });
    });
  })
  .catch((error) => {
    res.status(500).json({ error: error });
  });
})

router.patch('/user/update/:id',async(req,res)=>
    {
      try{
          const updatedUser=await Users.findByIdAndUpdate(req.params.id);
          res.status(200).json('Updated');
        }
      catch(err)
        {
          console.log(err)
        }
    }
)
router.get('/user/:id',async(req,res)=>
    {   try{
          const findUser=await  Users.findById(req.params.id);
          res.status(200).json('User Found')
            }
        catch(err)
            {
              console.log(err);
            }
    }
)
router.delete('/user/delete/:id',async(req,res)=>
    {
      try{
          const deleteUser=await Users.findByIdAndDelete(req.params.id);
          res.status(200).json('User deleted');
        }
      catch(err)
        {
          console.log(err);
        }
    }
)

//TaskSchema lai

router.post('/task/post',async(req,res)=>
    {
      try{
          let task=new Tasks(req.body);
          const newTask=await Tasks.save();
          res.status(200).json('Task Posted')
        }
      catch(err)
        {
          console.log(err);
        }
    }
)

router.patch('/task/update/:id',async(req,res)=>
    {
      try{
          const updatedTask=await Tasks.findByIdAndUpdate(req.params.id)
          res.status(200).json('Updated')
        }
      catch(err)
        {
          console.log(err);
        }
    }
)

router.delete('/task/delete/:id',async(req,res)=>
    {
      try{
          const deleteTask=await Tasks.findByIdAndDelete(req.params.id)
          res.status(200).json('Task Deleted');
        }
      catch(err)
        {
          console.log(err)
        }
    }
)

router.get('/task/:id',async(req,res)=>
    {
      try{
          const getTask=await Tasks.findById(req.body);
          res.status(200).json('Task Found');
        }
      catch(err)
          {
            console.log(err);
          }
    }
)
  