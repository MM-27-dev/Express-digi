import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Monika from Express!!!")
})

app.get("/ice-tea",(req,res)=>{
    res.send("what ice tea would you prefer?")
})

app.get("/twiter",(req,res)=>{
    res.send("monika.com mmmm")
})

app.listen(port, () => {
  console.log(`Server is running at the port : ${port}`);
});
