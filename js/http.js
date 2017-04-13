var router = require('./router');

var app = router(3412);

var operadoras =[
					{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
					{nome: "Tim", codigo: 15, categoria: "Celular", preco: 5},
					{nome: "Vivo", codigo: 41, categoria: "Celular", preco: 1},
					{nome: "GVT", codigo: 12, categoria: "Fixo", preco: 2},
					{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 3}
					];

var contatos = [
				{nome: "Bruno", telefone: "98898899", data: new Date(), operadora: operadoras[0]},
				{nome: "Sandra", telefone: "98223345", data: new Date(), operadora: operadoras[1]},
				{nome: "Mariana", telefone: "988966673", data: new Date(), operadora: operadoras[2]}
				];

app.get('/operadoras', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/contatos', function(req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});

app.post('/contatos', function(req, res){
	res.end();
});
