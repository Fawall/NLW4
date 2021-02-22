import express from 'express';

const app = express();

app.listen(3333, () => console.log("Server Is Running"));

app.get("/", (req, res ) =>{
    return res.send("Hello Word");
}); 

app.post("/", (req, res) => {
    return res.json({message: "Os dados foram salvos com sucesso"})
});
