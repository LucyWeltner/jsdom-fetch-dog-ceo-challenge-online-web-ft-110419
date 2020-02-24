console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
	fetch('https://dog.ceo/api/breeds/image/random/4').then(response => 
	response.json()).then(function (json) {
		console.log(json)
		// let dog_list = document.createElement("ul");
		let dogs = document.getElementById("dog-image-container");
		// dogs.appendChild(dog_list)
		json.message.forEach(function (dog_pic) {
			let img = document.createElement("img");
			img.setAttribute("src", dog_pic);
			let dogs = document.getElementById("dog-image-container");
			dogs.appendChild(img);
		})
	})
	fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(function(json){
		let message = json.message
		let first_words = Object.keys(message)
		let breeds = document.getElementById("dog-breeds")
		first_words.forEach(function(first_word){
			if (message[first_word].length == 0){
				let li = document.createElement("li")
				li.innerHTML = `${first_word}`
				breeds.appendChild(li)
			}
			else {
				message[first_word].forEach(breed => {
					let li = document.createElement("li")
					li.innerHTML= breed + " " + first_word
					breeds.appendChild(li)
				})	
			}
		})
		let dog_breeds = Array.from(document.querySelectorAll("ul > li"))
		Array.from(document.querySelectorAll("ul > li")).forEach(breed => {
			breed.id = `${breed.innerHTML}`
			breed.addEventListener("click", function() { 
				let dog = document.getElementById(`${breed.innerHTML}`)
				dog.style.color = "rgb(180, 50, 200)";
			})
		})
		let breed_list = document.getElementById("dog-breeds")
		let breed_menu = document.getElementById("breed-dropdown")
		breed_menu.addEventListener("change", function() {
			let letter = this.value
			console.log(letter)
			breed_list.innerHTML = ""
			let letter_breeds = dog_breeds.filter(breed => breed.innerText.charAt(0) == letter)
			letter_breeds.forEach(breed => {
				let html = `<li>${breed.innerText}</li>`
				breed_list.innerHTML += html
			})
		})
	})

})


