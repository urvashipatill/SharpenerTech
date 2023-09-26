let form= document.getElementById("addForm")
let list= document.getElementById('items')
// ADD ITEM OR RESPONSE ON SUBMIT BUTTON 
 form.addEventListener('submit', addItems)

//  REMOVE ITEM OR RESPONSE ON DELETE CLICK 
list.addEventListener('click', removeItem)


//  CREATING FUNCTION addITems 
 function addItems(e){
    e.preventDefault()
// GET THE INPUT VALUE 
    let input= document.getElementById('item').value
// CREATE li ELEMENT
    var li= document.createElement('li')
    li.className ="list-group-item"
// CREATE THE INPUT IN FORM OF TEXT NODE AND SAVE IT IN OUR NEW ELEM li 
    li.appendChild(document.createTextNode(input))
    list.appendChild(li)
// CREATE THE DELETE BTN FOR NEW ELEM
    let deleteBtn= document.createElement('button')
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete' 
//CREATE TEXT NODE IN DELTE BTN AS "X"
deleteBtn.appendChild(document.createTextNode('X'))
// PUSH THE DELETE BTN INTO LI 
li.appendChild(deleteBtn)
 }

//  CREATING FUNCTION REMOVE ITEM 
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li= e.target.parentElement;
        list.removeChild(li)
    }
}
}