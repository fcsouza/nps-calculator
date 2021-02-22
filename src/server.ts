import express from 'express';

const port = 3333;
const app = express();

app.get("/", (require, res) =>{
    return res.json({message: "Tudo certo"});
});


app.post("/", (require, res) =>{
    return res.json({message: "Dados salvo com sucesso!!"});
});


app.listen(port, () => console.log("Serve is running"));
