const $ = require('jquery');
const names = ["Dave Jones", "Bob Saget", "Marky Mark", "Tim Curry", "Michael Jordan", "Dave Thomas"]
const genders = ["men","women"]

    

const createUser = () =>{
	return {
		name: names[Math.floor(Math.random()*names.length)],
		age: Math.floor(Math.random()*65 + 18),
		image: "https://randomuser.me/api/portraits/" + genders[Math.floor(Math.random()*genders.length)] +"/" + Math.floor(Math.random()*99) + ".jpg"
	}
}



module.exports = createUser;
