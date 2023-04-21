const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", function(req, res){
    res.render("primeiraPagina")
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        dataC: req.body.dataC,
        observacao: req.body.observacao
    }).then(function(){
        res.send("Dados enviados com sucesso!")
    }).catch(function(err){
        res.send("Falha ao enviar os dados: "+ err)
    })

    
})

app.get("/listar", function(req, res){
    post.findAll().then(function(post){
        res.render("listar", {post})
        console.log(post)
    }).catch((error)=>{
        res.send("Erro ao puxar os dados! erro: "+ error)
    })
})

app.listen(8081, function(){
    console.log("Servidor ativo!")
})