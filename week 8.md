# About Author
- **Author:** *Hirra Khan*					
- **SCCB S-Number:** *S45139003*
- **DMU P-Number:** *P2652223*
- **SCCB Assessor:** *Aram Saeed*			
- **DMU Module:** *CTEC3905 Front-End Web Development*

## Important Notice 
**PLEASE NOTE: I had used "responsive-designs-demos-master" file, firstly as a template during week 2, then altered it to fit my webpage's requirements.**
**Certain Lab lessons were not necessary to document on readme.md / following week as the template "responsive-designs-demos-master" file already** 
**had it implemented within the template.**
*SCCB* , Attain, [Resources](https://attain.sccb.ac.uk/moodle/mod/folder/view.php?id=48839)


## Week 8 
*	As the template I had chosen already had a animation setted up, so not much could be documented
in this week
*	However, additionaly i added social media external links to make the website more appealing with the specific social media icons

** *Please see the code below* **


## HTML
# index.html

```
<!DOCTYPE html>

<html lang="en" dir="ltr">

	<head>
		<title>Welcome to HKatCafe's Webpage</title>		
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="HKatCafe">
		<meta name="author" content="Hirra Khan">
		<meta name="module" content="CTEC3905 Front-End Web Development">
		<link rel="stylesheet" href="styles.css">
	</head>
	
	<body id="home">
		<div id="menuToggler" class="no-print">
			<div></div>
			<div></div>
			<div></div>
		</div>
		
		<header>
			<h1>HKatCafé</h1>
			<nav class="no-print">
				<a href="#home">Home</a>
				<a href="#yourkittyfriends">Furry Friends</a>
				<a href="#thecats">The Cats</a>
				<a href="#menu">Menu</a>
				<a href="#nearme">Alternative Cat Cafes</a>
				<a href="#booking">Book a Table</a>
				<a href="#location">Location</a>
				<a href="#contact">Contact Us</a>
			</nav>
		</header>
		
		<main>
			<section>
				<center><h2><br>Welcome to HKatCafe.</br></h2>
				<br>Cute Cats, Good Food & Happy People!.</br>
				<br>This website is designed to keep felines in mind, with wide open spaces that includes a cafe with comfortable sofas and armchairs to maximise your experience and relaxation! </br>
				<br>Come and say hello!</br>
				</center>
			</section>
			
			
			<section id="yourkittyfriends">
				<center>
					<fieldset>
						<legend><h2>Furry Friends</h2></legend>
							<br>Lets meet your furry friends!</br>
							<button class="btn btn-primary my-2 generate_btn"> Show me cats!</button>
					
							<div class="catsImgDiv">				
							</div>
					</fieldset>	
				</center>
			</section>			
			
			
			<section class="images">
				<article id="thecats">
					<img src="https://kitty-cafe.imgix.net/catImages/Gizmo2.jpg?auto=compress%2Cformat&className=tile__image&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=250&ixlib=php-1.1.0&q=60&sizes=&w=250" alt="kitten">
					<h2>Meet The Cats</h2>
					<p>Gizmo</p>
				</article>
				<article>
					<img src="https://kitty-cafe.imgix.net/catImages/Cream.jpg?auto=compress%2Cformat&className=tile__image&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=250&ixlib=php-1.1.0&q=60&sizes=&w=250" alt="kitten">
					<p>Cream</p>
				</article>
				<article>
					<img src="https://kitty-cafe.imgix.net/catImages/tabitha.jpg?auto=compress%2Cformat&className=tile__image&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=250&ixlib=php-1.1.0&q=60&sizes=&w=250" alt="kitten">
					<p>Tabitha</p>
				</article>
				<article>
					<img src="https://kitty-cafe.imgix.net/catImages/lily.jpg?auto=compress%2Cformat&className=tile__image&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=250&ixlib=php-1.1.0&q=60&sizes=&w=250" alt="kitten">
					<p>Lily</p>
				</article>
			</section>
			
			
			<section id="menu">
				<center>
					<fieldset>
						<legend><h2><i>Menu</i></h2></legend>
							<b><u>Tasty Meals</u></b></br>
							Jacket Potato - Cheese & Beans (£6.95)</br>
							9” Margherita Pizza (£7.95)</br>
							Tuna Melt Panini (£7.45)</br>
							Veggies Wrap (£6.45)</br>
								_________________________
							<br><b><u>Fresh Juice</u></b></br>
							Orange (£1.95)</br>
							Apple (£1.95)</br>
							Pineapple (£1.95)</br>
								_________________________
							<br><b><u>Hot Drinks</u></b></br>
							Any Coffee (£1.95)</br>
							Any Tea (£2.90)</br>
							Hot Chocolate (£2.90)</br>
					</fieldset>	
				</center>
			</section>


			<section id="nearme" class="text">
				<center>
					<fieldset>
						<legend><h2>Alternative Cat Cafes</h2></legend>
						<p>In the map below indicates other kitty cafes that you could visit.</p>
							<iframe src="https://www.google.com/maps/d/embed?mid=1vNCg4S8eo51swqHvmwO-w_fXgZi4le61" width="400" height="340"></iframe>
							<div id="map"></div>
								<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly" async></script>
					</fieldset>	
				</center>
			</section>
						
						
			<section id="booking" class="text">
				<form action="login.html" method="post">
					 <fieldset>
						<legend><h2>Book a Table</h2></legend>
							Please fill this form in to book your table at H'Kat'Café.</p>
							<p><b><label for="firstname">First name:</label></b>
							<input id="firstname" value =""></p>
							
							<p><b><label for="lastname">Last name:</label></b>
							<input id="lastname" value =""></p>
						
							<p><center><b><label for="amount"> For How Many People?</label></b></br>
							<label for="radio2">2 People</label>
							<input id="radio2" name="options" type="radio"></br>						
							<label for="radio4">4 People</label>
							<input id="radio4" name="options" type="radio"></br></center></p>
						
							<p><center><b><label for="group">Group of (people):</label></b>
							<label for="radio6"><p id="cal6"></p>
								<script>
									const x = (x, y) => { return x * y };
									document.getElementById("cal6").innerHTML = x(2, 3);
								</script> people</br><input id="radio6" name="options" type="radio"></p></center>

							<b><label for="email">Email:</label></b>
							<input id="email" type="email"></p>
							
							<p><b><label for="date">Date:</label></b>
							<input id="date" type="date" ></p>
						
							<button type="button">Book</button>
					</fieldset>
				</form>
			</section>
			
					
			<section id="location" class="text">
				<center>
					<fieldset>
						<legend><h2>Location</h2></legend>
							<b>Address</b>
								<br>HKatCafé</br>
									High Street Deritend</br> 
									Birmingham<br>
									B5 5SU
									
									<div id="googleMap" style="width:60.5%;height:250px;"></div>
									<script>
										function myMap() {
											var mapProp= {
											  center:new google.maps.LatLng(52.47560651393718, -1.885776443522525),
											  zoom:17.3};
											  
											var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
										}
									</script>
									
									<script src="https://maps.googleapis.com/maps/api/js?key=&callback=myMap"></script>
					</fieldset>
				</center>
			</section>
			
			
			<section id="contact" class="text">
				<center>
					<fieldset>
						<legend><h2><b>Contact us</b></h2></legend>
							 <b>Phone:</b> 0121-335-6357</br>
							 <b>Email:</b> <a href="s45139003@sccb.ac.uk">birmingham@hkatcafe.co.uk</a>
							 
						<div align="right"><b>Or follow us on:</b>
							<a href="https://en-gb.facebook.com/"><img src="fb.png" style="width:24px;height:24px;border:0;"></a>
							<a href="https://www.instagram.com/"><img src="inst.png" style="width:24px;height:24px;border:0;"></a>
							<a href="https://twitter.com/?lang=en-gb"><img src="tw.png" style="width:24px;height:24px;border:0;"></a>
						</div>
					</fieldset>
				</center>
			</section>
			
			
		</main>
		
		<footer>
			<center>
				<script language="javascript"> 
						months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
						var d=new Date();
						var weekday=new Array(7);
							weekday[0]="Sunday";
							weekday[1]="Monday";
							weekday[2]="Tuesday";
							weekday[3]="Wednesday";
							weekday[4]="Thursday";
							weekday[5]="Friday";
							weekday[6]="Saturday";

						var d = new Date();
						(d.getFullYear());

						var theDate = new Date(document.lastModified); 
						theDate.setTime((theDate.getTime()+(60*60)) ) 
						with (theDate) { 
						document.write("<i>	Last Updated: "+weekday[getDay()]+' '+getDate()+' '+months[getMonth()]+' '+d.getFullYear()+' ,'+getHours()+':'+getMinutes()+" GMT</i>") 
						} 
				</script> 
				
				<p style="font-size:x-small;">©2021 HKatCafé - All Rights Reserved -</p>
				
			</center>
		</footer>
		
		<script src="scripts.js"></script>
		<script src="input.js"></script>
		<script src="scripts2.js"></script>
	</body>
</html>
```

## CSS
```
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;400&display=swap');

html {
	scroll-behavior: smooth;
}
body {
	font-family: "Big Shoulders Display", sans-serif;
	margin: 0;
	background-color: black;
	color: white;
	z-index: 0;
}

#menuToggler {
	position: fixed;
	top: 0.5em;
	right: 0.5em;
	height: 1em;
	width: 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 0.25em;
}
#menuToggler div {
	height: 20%;
	background: white;
	transition: transform 0.3s;
}
#menuToggler.open div:nth-child(1) {
	transform: translateY(0.3em) rotate(45deg);
}
#menuToggler.open div:nth-child(3) {
	transform: translateY(-0.5em) rotate(-45deg);
}
#menuToggler.open div:nth-child(2) {
	opacity: 0;
}

header, main, section, article {
	overflow: auto;
}

a {	color: #ccf; }
a:visited {	color: #cff; }


header {
	font-size: 2em;
	min-height: 100vh;
	background-image: url(https://placekitten.com/400/600);
	background-size: cover;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	box-sizing: border-box;
}

header h1 {
	background-color: rgba(0, 0, 0, 0.7);
	margin: 0;
	padding: 0.25em 1em;
}
header nav {
	font-weight: 100;
	letter-spacing: 0.25em;
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	transform: translate(100vw);
	transition: transform 0.4s;
	z-index: 15;
}

#menuToggler.open + header nav {
	transform: translate(0);
}

header nav a {
	color: white;
	text-decoration: none;
	background-color: rgba(0, 0, 0, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.2);
	padding: 0.5em 0;
}

main {
	max-width: 500px;
	margin: 0 auto;
}


section, footer {
	padding: 0 1em;
}

section:nth-of-type(1) {
	font-size: 2em;
	padding: 3em 1em;
}

section.images {
	display: flex;
	flex-direction: column;
}

section.text {
	background-color: white;
	color: black;
}

article {
	position: relative;
	z-index: 10;
}

article img {
	width: 100%;
	box-sizing: border-box;
}

article h2 {
	position: absolute;
	top: 0;
	margin: 0;
	padding: 0.5em;
	background-color: rgba(0,0,0,0.7);
}

img{
	width: 20%;
	height: 20%
}

.showcase {
	width: 30%;
	margin-top: 20px;
}

label {
  display: block;
  font-family: 'Nanum Gothic';
  padding-bottom: 10px;
  font-size: 1.25em;
}

input, select, textarea {
  border-radius: 2px;
  border: 2px solid #777;
  box-sizing: border-box;
  font-size: 1.25em;
  font-family: 'Nanum Gothic';
  width: 100%;
  padding: 10px;
}

div.elem-group.inlined input {
  width: 95%;
  display: inline-block;
}

textarea {
  height: 250px;
}

hr {
  border: 1px dotted #ccc;
}

button {
  height: 50px;
  background: orange;
  border: none;
  color: white;
  font-size: 1.25em;
  font-family: 'Nanum Gothic';
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  border: 2px solid black;
}

@media screen and (min-width: 500px) {
	header {
		background-image: url(https://placekitten.com/700);
	}
}

@media screen and (min-width: 700px) {
	header nav {
		flex-direction: row;
		transform: none;
		transition: none;
		height: auto;
	}

	header nav a {
		flex-grow: 1;
	}
	header nav a:hover {
		background-color: rgba(100, 100, 0, 0.2);
	}

	#menuToggler {
		display: none;
	}

	main {
		max-width: none;
		font-size: 1.6em;
	}

	section.images {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;
	}

	article {
		flex-basis: 45%;
	}

	section#story p, section#story h2 {
		max-width: 500px;
		margin: 1em auto;
	}
}


@media screen and (min-width: 1000px) {
	main {
		display: grid;
		grid-template-columns: 1fr 1fr
	}

	section:nth-of-type(1) {
		grid-column: 1 / 3;
		text-align: right;
	}
}

@media screen and (min-width: 1200px) {
	header {
		background-image: url(https://www.catster.com/wp-content/uploads/2015/06/600px-persian-kitten-in-teacup.jpg);
	}
	main {
		display: grid;
		grid-template-columns: 1.5fr 1fr
	}
}



@media print {
	body {
		background-color: white;
		color: black;
	}

	h1 {
		color: white;
	}
	a, a:visited {
		color: blue;
		text-decoration: none;
	}

	a[href^="http"]::after {
		content: " (" attr(href) ")";
	}

	#menuToggler, .no-print {
		display: none;
	}

	main {
		max-width: none;
	}

	section.images {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	section.images article {
		width: 30%;
	}

	article h2 {
		position: static;
		color: white;
	}

	section, article, footer {
		padding: 0;
	}

}
```

## Javascript
### scripts.js
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
### scripts.js
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
### input.js
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
