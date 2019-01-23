const $ = require('jquery');

const createUser = require('./data.js')

let users = []

for(let i = 0;i<15;i++){
	users.push(createUser())
}

console.log(users)

users.forEach((user) =>{
	$('.users').append(
	"<div class=\"user\">" +
	"<img src=" + user.image+">"+
	"<h1>" + user.name + "</h1>" +
	"<h3>" + user.age + "</h3>"+
	"</div>"
	)
})

