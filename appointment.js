let list= document.getElementById('ListOfUsers')



function additems(event)
{ 
   
 event.preventDefault()
const inputname= event.target.username.value
const inputnumber= event.target.userno.value
const inputmail= event.target.usermail.value

if(inputname && inputnumber && inputmail){
// storage 
let obj={
  inputname,
  inputnumber,
   inputmail

}
let newData= JSON.stringify(obj)

// posting it into axios 

   axios.post('https://crudcrud.com/api/f4acee92d7674410874c6833f8d46dbf/appointmentData',obj)
   .then((response) =>{
      
   showonScreen(response.data)
   })
   .catch((err) =>{
   console.log(err)
   })
} 
else{
   alert('Please enter all your details')
}
}


window.addEventListener('DOMContentLoaded', ()=>{
   axios.get('https://crudcrud.com/api/f4acee92d7674410874c6833f8d46dbf/appointmentData')
   .then((e) =>{
      for(let i=0; i<e.data.length; i++){
      showonScreen(e.data[i])
      }
      })
      .catch((err) =>{
         console.log(err)
      })
  })
   // show on screen 
   function showonScreen(e)
   { 
      document.getElementById('username').value=""
      document.getElementById('userno').value=""
      document.getElementById('usermail').value="" 
    
      const parentNode= document.getElementById('ListOfUsers')
      const childHTML =`<li id=${e._id}> 
                         ${e.inputname} - ${e.inputmail} - ${e.inputnumber}
                         <button onclick=deleteUser('${e._id}')> Delete User </button>
                         <button onclick=editUser('${e.Name}','${e.Email}',  '${e.Number}')> Edit User </button>
                         </li>`
                        
                        parentNode.innerHTML= parentNode.innerHTML+childHTML;
   }

function deleteUser(id){
   confirm('Do you want to delete?')
    {
      axios.delete(`https://crudcrud.com/api/f4acee92d7674410874c6833f8d46dbf/appointmentData/${id}`)
      .then((response) =>{
         const parentNode= document.getElementById('ListOfUsers')
          const ChildNOde=document.getElementById(id)
           if(ChildNOde){
         parentNode.removeChild(ChildNOde)
          }
      })
      .catch((err) =>{
         console.log(err)
      })
      
   }
    }
    

