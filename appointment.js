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

   axios.post('https://crudcrud.com/api/6b4d6f68e0a84cc290ea19b7d3ecff30/appointmentData',obj)
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
   axios.get('https://crudcrud.com/api/6b4d6f68e0a84cc290ea19b7d3ecff30/appointmentData')
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
      const childHTML =`<li id=${e._id}>  Name:${e.inputname} - ${e.inputnumber} - ${e.inputmail}
                         <button onclick=deleteUser('${e._id}')> Delete User </button>
                         <button onclick=editUser('${e._id}')> Edit User </button>
                         </li>`
                        
                        parentNode.innerHTML= parentNode.innerHTML+childHTML;
                        console.log(e)
   }

function deleteUser(id){
   confirm('Do you want to make changes?')
    {
      axios.delete(`https://crudcrud.com/api/6b4d6f68e0a84cc290ea19b7d3ecff30/appointmentData/${id}`)
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

function editUser(id)
{
   
      axios.get(`https://crudcrud.com/api/6b4d6f68e0a84cc290ea19b7d3ecff30/appointmentData/${id}`)
      .then((response) =>{
      let name1= response.data.inputname
       let number= response.data.inputnumber
      let email= response.data.inputmail

      document.getElementById('username').value=name1
      document.getElementById('userno').value=number
      document.getElementById('usermail').value=email 
      
      })
      .catch((err)=>{
         console.log(err)
      })
      
      deleteUser(id)
      
      // const newname=document.getElementById('username').value
      // const newno= document.getElementById('userno').value
      // const newemail= document.getElementById('usermail').value

     
      // const obj2={
      //    newname,
      //    newno,
      //    newemail
      // }

      // axios.post('https://crudcrud.com/api/f4acee92d7674410874c6833f8d46dbf/appointmentData',obj2)
      // .then((response) =>{
      //    console.log(response)
      // })
      // .catch((err) =>{
      //    console.log(err)
      // })
      // axios.put(`https://crudcrud.com/api/f4acee92d7674410874c6833f8d46dbf/appointmentData/${id}`)
      // .then((response) =>{
         
      
      // })
      // .catch((err) =>{
      //  console.log(err)
      // })
     
   }

    

