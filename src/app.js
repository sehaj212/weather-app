const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 8000;                           //if 8000 pe nhi chla to dusre port pe

const publicPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");                       //views ko templates ke andar dala so this is path to views folder
const partialsPath=path.join(__dirname,"../templates/partials");  

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));                            //given path to public folder which has our html files

  
app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render('404error')
})

app.listen(port,()=>{
    console.log(`listening to port at ${port}`);
})
