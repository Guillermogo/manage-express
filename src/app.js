const express =  require('express')
const path =  require('path')
const app = express()

app.use(express.static(path.join(__dirname,'./statics')))

let accountRouter = require(path.join(__dirname,'./routers/accountRouters'))
app.use('/account',accountRouter)
app.listen(3000,"127.0.0.1",err=>{
    if(err){
        console.log(err);
    }
    console.log("servering running at http://127.0.0.1:3000/");
})