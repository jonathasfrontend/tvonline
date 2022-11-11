const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data.json');

app.use(express.json());
app.use(cors());

app.get("/clients", function(req, res) {
  res.json(data);
});

app.get("/clients/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
  
    if (!client) return res.status(204).json();
  
    res.json(client);
});
app.get("/clients/:filmesseries", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
  
    if (!client) return res.status(204).json();
  
    res.json(client);
});


app.post("/clients", function(req, res){
    const { name, email } = req.body;

    // salvar
  
    res.json({ name, email });
})

app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
  
    if (!client) return res.status(204).json();
  
    const { name } = req.body;
  
    client.name = name;
  
    res.json(client);
})

app.delete("/clients/:id", function(req, res){
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);
  
    res.json(clientsFiltered);
})

app.listen(process.env.PORT || 3000, function(){
    console.log("servidor rodando");
})