# About Author
- **Author:** *Hirra Khan*					
- **SCCB S-Number:** *S45139003*
- **DMU P-Number:** *P2652223*
- **SCCB Assessor:** *Aram Saeed*			
- **DMU Module:** *CTEC3905 Front-End Web Development*
	
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
