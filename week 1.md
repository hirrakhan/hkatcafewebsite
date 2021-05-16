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


## Week 1
*	During the first week I had attempted on my HTML, CSS and JS coding for my website (HKatCafe)


> # Generic HTML Body Structure/ Layout used
>
>*	header tag
>*	nav tag
>*	main tag
>*	section tag
>*	article tag
>*	footer tag


```## HTML
<!DOCTYPE html>
<html lang="en">
	<head>
			
		<title>hkatcafe web page</title>		
		
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="HKatCafe">
		<meta name="author" content="Hirra Khan">	
			
		<link rel="stylesheet" href="styles.css">			
			
	</head>
		
	<body>
		<header>
			<h1> This is a header </h1>
		</header>

		<nav>
		</nav>

		<section>
			<h2> This is a section</h2>
		</section>

		<aside>
			<h4> This is aside </h4>
		</aside>

		<footer>
			<p> Author: Hirra Khan | <a href="s45139003@sccb.ac.uk">Hirra's SCCB E-mail</a></p>
		</footer>
	</body>

	</html>
```

```## CSS
body {
	background-color: #FFFFFF;
}

h1 {
	background-color: #A2A2A2;
	text-align: center;
	padding: 20px;
}

p {
	font-family: calabri;
	font-size: 20px;
}

container {
	xmin-width: 900px;
}

header {
	background-color: #C0C0C0;
	color: #000000;
	text-align: left;
	padding: 10px;
	position: absolute;
	top: 15px;
	left: 100px;
	width: 86.7%;
	height:100px;
	margin: auto;
	border: 2px solid black;
}

nav {
	background-color: #00FFFF;
	color: #000000;
	padding: 10px;
	position: absolute;
	width: 86.6%;
	height: 20px;
	top: 145px;
	left: 100px;
	margin: auto;
	border: 2px solid black;
}

section {
	background-color: #C0C0C0;
	color: #000000;
	padding: 10px;
	position: absolute;
	top: 195px;
	left: 100px;
	width: 65%;
	height: 350px;
	margin: auto;
	border: 2px solid black;
}

sidebar {
	background-color: ##FFFFFF;
	color: #000000;
	padding: 10px;
	position: absolute;
	width: 18.7%;
	height: 350px;
	top: 195px;
	right: 60px;
	margin: auto;
	border: 2px solid black;
}

footer {
	background-color: #000000;
	color: #FFFFFF;
	text-align: center;
	padding: 10px;
	position: absolute;
	width: 86.7%;
	bottom: 10px;
	left: 100px;
	height: 30px;
	margin: auto;
	border: 2px solid black;
}
```

```## JavaScript
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
				
	<p style="font-size:x-small;">©2021 H'Kat'Café - All Rights Reserved -</p>
				
</center>
```
