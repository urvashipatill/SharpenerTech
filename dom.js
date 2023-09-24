// document.title= 'My World'
// var headerTitle= document.getElementById('main-header')
// headerTitle.style.borderBottom = 'solid 3px #000'
// var additems= document.getElementById('additems')
// additems.style.color= 'green'
// additems.style.fontWeight= 'bold'
// const listItem= document.getElementsByClassName("list-group-item")
// listItem[2].style.backgroundColor= 'green'
// let l= Array.from(listItem)
// for(var i=0; i<l.length;i++){
//     if(i!==2){
//         l[i].style.fontWeight='bold'
//     }
// }

//     var ul= document.getElementById('items')
//     var li= document.createElement('li')
//     li.appendChild(document.createTextNode("Item 5"))
//     ul.appendChild(li)
//     li.className= "newlist"
//     li.tagName="listcreated"
//  console.log(document.getElementsByClassName("newlist"))
//  console.log(document.getElementsByTagName("listcreated"))
 
//Make second item have green bg and 3 item invisible
let list= document.getElementsByClassName("list-group-item")
list[1].style.backgroundColor= 'green'
list[2].style.display= 'none'