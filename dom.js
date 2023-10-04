let form= document.getElementById("addForm")
let list= document.getElementById('items')
var filter= document.getElementById('filter')



// ADD ITEM OR RESPONSE ON SUBMIT BUTTON 
 form.addEventListener('submit', addItems)
//  REMOVE ITEM OR RESPONSE ON DELETE CLICK 
// list.addEventListener('click', removeItem)
// FILTER EVENT 
filter.addEventListener('keyup', filterItems)



//  CREATING FUNCTION addITems 
 function addItems(e){
    e.preventDefault()
    // GET THE INPUT VALUE 
let input= document.getElementById('item').value
let description= document.getElementById('describe').value
// CREATE li ELEMENT
    var li= document.createElement('li')
    li.className ="list-group-item"

// CREATE THE INPUT IN FORM OF TEXT NODE AND SAVE IT IN OUR NEW ELEM li 
    li.appendChild(document.createTextNode(input))
    li.appendChild(document.createTextNode(" "+description))
    list.appendChild(li)

    // CREATE A EDIT BTN FOR NEW ELEM 
let editBtn= document.createElement('button')
editBtn.className= "btn float-sm-right"
editBtn.appendChild(document.createTextNode('EDIT'))
li.appendChild(editBtn)

// CREATE THE DELETE BTN FOR NEW ELEM
    let deleteBtn= document.createElement('button')
    deleteBtn.className= 'btn btn-danger btn float-right delete' 
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)

// STORING IT TO LOCAL STORAGE 
    let myObj= {
        item: input,
        detail: description
    }
   let myObjstore= JSON.stringify(myObj)
   localStorage.setItem(myObj.item, myObjstore)

document.getElementById('item').value= "";
document.getElementById('describe').value= "";
// DELETING FROM LOCAL STORAGE 
   deleteBtn.onclick= (e) => 
   {
    localStorage.removeItem(myObj.item)
    if(e.target.className='btn btn-danger btn float-right delete')
    {
        if(confirm('Are you sure?'))
        {
            var li= e.target.parentElement;
            list.removeChild(li)
        }
      } 
   }

  editBtn.onclick= (e) => {
    localStorage.removeItem(myObj.item)
    if(e.target.className= "btn float-sm-right"){
        if(confirm('Do you want to edit?')){
            var li= e.target.parentElement;
            list.removeChild(li)
        }
    }
    // POPING THE VALUE ON INPUT AGAIN 
    document.getElementById('item').value= input
    document.getElementById('describe').value=description
  }
  
}

// CREATING FILTER EVENT LISTENER 
function filterItems(e){

// CONVERT IT INTO LOWERCASE 
var text= e.target.value.toLowerCase();
// GET list 
var lists=list.getElementsByTagName('li')

// CONVERT TO AN ARRAY 
Array.from(lists).forEach(function (item) {
let itemName= item.firstChild.textContent;
let describeName= item.childNodes[1].textContent;
if(itemName.toLowerCase().indexOf(text) !=-1 || describeName.toLowerCase().indexOf(text) !=-1){
item.style.display= 'block'
}    
else{
    item.style.display='none'
}

});
}



