var listitem= document.querySelector("#items")

// PARENT ELEMENT AND PARENT NODE
console.log(listitem.parentNode)
// listitem.parentNode.style.backgroundColor= '#f4f4f4'
console.log(listitem.parentNode.parentElement)
console.log(listitem.parentNode.parentNode)
console.log(listitem.parentElement.style.backgroundColor= '#f3f3f2')

// CHILD NODE
console.log(listitem.childNodes)
console.log(listitem.children)
console.log(listitem.children[1])
listitem.children[1].style.backgroundColor= 'grey'
listitem.children[3].style.backgroundColor='grey'

// FIRST ELEMENT CHILD OR FIRST CHILD
listitem.firstElementChild.style.backgroundColor='#f4f4f4'
console.log(listitem.firstChild)

// LAST ELEMENT CHILD
console.log(listitem.lastElementChild)
listitem.lastElementChild.textContent='Hey'

// NEXT SIBLING
console.log(listitem.nextSibling)
console.log(listitem.nextElementSibling)

// CREATE CHILD OR CREATE ELEMENT
var newDiv= document.createElement('div')
newDiv.className='newdiv'
newDiv.id='Hello1'
newDiv.setAttribute('name', 'Hello world!')
console.log(newDiv)
var newDivtext=document.createTextNode('Hello World')
newDiv.appendChild(newDivtext)
var container= document.querySelector('header .container')
var h1= document.querySelector('header h1')
container.insertBefore(newDiv, h1)