import express from 'express';

const port = 3333;
const app = express();

app.get("/", (request, response) =>{
    return response.json({message: "Tudo certo"});
});


app.post("/", (request, response) =>{
    return response.json({message: "Dados salvo com sucesso!!"});
});


app.listen(port, () => console.log("Serve is running"));
