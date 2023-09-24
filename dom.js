document.title= 'My World'
var headerTitle= document.getElementById('main-header')
// console.log(headerTitle)
headerTitle.style.borderBottom = 'solid 3px #000'
var additems= document.getElementById('additems')
additems.style.color= 'green'
additems.style.fontWeight= 'bold'
const listItem= document.getElementsByClassName("list-group-item")
listItem[2].style.backgroundColor= 'green'
let l= Array.from(listItem)
for(var i=0; i<l.length;i++){
    if(i!==2){
        l[i].style.fontWeight='bold'
    }
}