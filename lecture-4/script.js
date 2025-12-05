const express= require('express');

const app = express();

app.use(function(req,res,next){
    console.log("middleware run");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World');
})
app.get('/profile', (req, res) => {
  //res.send('profile page hai ye');
  return next(new Error("Not implemented"))
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})