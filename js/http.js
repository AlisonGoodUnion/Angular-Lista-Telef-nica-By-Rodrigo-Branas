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
	{nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
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
	contatos.push(req.body);
	res.end();
});
