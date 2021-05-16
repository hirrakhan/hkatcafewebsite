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


## Week 5 
*	This week document will include, working with user input by using accessibilty tags (label elements, document structure, with more input types (i.e.
date, email, time, people, etc.) - all by implementing a form within my code, especially in the "book a table" section.
*	I had implemented the script associated with the form (input.js) within my index.html file

## HTML linking input from form on javascript
```
<script src="input.js"></script>
```

## HTML (.cont)
```
<section id="booking" class="text">
	<form action="login.html" method="post">
		<fieldset>
			<legend><h2>Book a Table</h2></legend>
				Please fill this form in to book your table at HKatCafe.</p>
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

