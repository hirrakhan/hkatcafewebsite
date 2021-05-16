# Javascript

## scripts.js
```
menuToggler.addEventListener('click', ev => {
	menuToggler.classList.toggle('open');
});

for (const element of document.querySelectorAll('nav a')) {
	element.addEventListener('click', ev => {
		menuToggler.classList.remove('open');
	});
}
```

## scripts2.js
```
let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
	let catsImgDiv = document.querySelector(".catsImgDiv")
	catsImgDiv.innerHTML = ''
	
	fetch('https://api.thecatapi.com/v1/images/search')
	.then(response => response.json())
	.then((data) => {
	  let catsImgUrl = data [0].url
	  
	  let catsImgEl = document.createElement("img")
	  catsImgEl.setAttribute('src', `${catsImgUrl}`)
	  catsImgEl.classList.add("showcase")
	  
	  let catsImgDiv = document.querySelector(".catsImgDiv")
	  catsImgDiv.appendChild(catsImgEl)
	  
	})
	.catch(err => console.log(err))
}
```

## input.js
```
console.log(firstname.value);		//"firstname"
console.log(lastname.value);		//"lastname"
console.log(radio2.checked);
console.log(radio4.checked);
console.log(radio6.checked);
console.log(email.value);
console.log(date.value);
console.log(time.value);
```
