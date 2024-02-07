const express = require('express');
const regRouter = require('./src/routes/regRouter');
const userRouter = require('./src/routes/userRouter');
const productRouter = require('./src/routes/productRouter');
const loginRouter = require('./src/routes/loginRouter');





const app = express();

app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/register',regRouter)
app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/login',loginRouter)


app.get('/', function (req, res) {

    res.send('base')
})


app.listen(4000, () => {
    console.log('server started at http//localhost:4000');

})

























// var http=require("http");
// //first argument will be request
// http.createServer(function(request,response){
//     response.write('nodejs')
//     response.end()
// }).listen(3000,()=>{
//     console.log('server started at http://localhost:3000');
// })
