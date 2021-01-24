const express=require('express')
const cors = require('cors')

const mockToken= 'f1f4640b651249198ff76546f1f825a9c332be9fb488b775'
const mockUser= {
    id:1,
    name:'John Doe',
    email:'john@doe.com'
}

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())

router.get('/me',(req, res) => {
   // req.headers.authorization //Bearer <TOKEN>
   const headers = req.headers.authorization
   const token = headers && headers.split(' ')[1]

   console.log('token:'+token);
   if(token === mockToken){
     return res.json({
         user:mockUser
     })
   }else{
       return res.status(401).json({message:'Invalid token'})
   }
})

router.post('/login',(req,res) => {
    const {email,password} = req.body
    console.log('--------------');
    console.log(email)
    console.log(password)
    if(email === 'admin@admin.com' && password==='123456'){
        return res.json({
            user:mockUser,
            token:mockToken
        })
    }else{
        return res.status(401).json({
            message:'Invalid password'
        })
    }
})

app.use('/api',router)

app.listen(12345,() => {
console.log('Running at port 12345')
})