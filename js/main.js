//grab the div that we id'd as newcolor and change the class name to our newly added class
document.getElementById('newColor').className = "divColor2"

//assign our body tag to a variable so we can quickly append children to it
var DOM = document.getElementById('addHere')
//create a new div and assign it to a variable
var newDiv = document.createElement("div")
//assign an id to this new div
newDiv.id = "newId"
//add the new div into our body (that we simplified by assigning to the DOM variable)
DOM.appendChild(newDiv)

//create an h1 and assign it to a variable (header for reference)
var header = document.createElement('h1')
//add text to that header via .textContent
header.textContent = "Hello World!"
//add this header into the div we created above!
newDiv.appendChild(header)

//create a second div
var secondDiv = document.createElement('div')
//assign an id to the second div
secondDiv.id = "secondId"
//create a second h1
var secondH1 = document.createElement('h1')
//create a text node
var text = document.createTextNode("This is a text node!")
//add the text to the h1
secondH1.appendChild(text)
//add the header to the div
secondDiv.appendChild(secondH1)
//finally, add the div containing all this, into the DOM!
DOM.appendChild(secondDiv)

//create an image and a button tag
var image = document.createElement('img');
var btn = document.createElement('BUTTON');
//set the source and alt attributes for this new image
image.setAttribute('src', 'img/NSWO.jpg');
image.setAttribute('alt', 'saw whet owl')
image.className = 'nswo';
//add text to our new button
btn.textContent = "click me"
//add an onclick event to the button so that we can call a function to change the picture upon clicking it
btn.setAttribute('onclick', 'changeImage()')
//don't forget to add these elements to the DOM!
DOM.appendChild(image);
DOM.appendChild(btn);

//function to change the image src and alt attributes upon clicking the button
function changeImage(){
	//confirm onclick is working
	console.log('user clicked the button')
	//change the image source to that of a pygmy owl
	image.setAttribute('src', 'img/nopo.jpg')
	//change the alt attribute to read 'pygmy owl'
	image.setAttribute('alt', 'pygmy owl')
	//change class to suit pygmy photo
	image.className = "nopo";
}









