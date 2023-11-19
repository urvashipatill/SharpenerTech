let submitBtn= document.getElementById('submitbtn')
submitBtn.textContent='SUBMIT'
let list= document.getElementById('formlist')
submitBtn.addEventListener('click', additems)


function additems(){
let inputname= document.getElementById('username').value
let inputnumber= document.getElementById('userno').value
let inputmail= document.getElementById('usermail').value
// storage 
let obj={
   Name:inputname,
   Number:inputnumber,
   Email:inputmail

}
let newData= JSON.stringify(obj)

console.log(obj)
   axios.post('https://crudcrud.com/api/ec2835c33e144026af307052d2c73666/appointdata',obj)
   .then((response) =>{
   showonScreen(response.data)
   })
   .catch((err) =>{
   console.log(err)
   })

   function showonScreen(e)
   {
   let li= document.createElement('li')
   li.className= 'list-group-item'
   // remove button 
   let removeBtn= document.createElement('button')
    removeBtn.textContent='REMOVE'
    removeBtn.id='remove'
      //  edit button 
    let editBtn=document.createElement('button')
    editBtn.textContent='EDIT'
    editBtn.id='edit'

    removeBtn.onclick=(e) =>{
      confirm('Do you want to delete?')
      {
          let li= e.target.parentElement
          list.removeChild(li)
         
          
          
      }
          
       }

       editBtn.onclick=(e) =>{
         confirm('Do you want to make chages?')
             {   let li=e.target.parentElement
              list.removeChild(li)
                 document.getElementById('username').value=Inpname
                 document.getElementById('userno').value=Inpnumber
                 document.getElementById('usermail').value=Inpemail
             }
          }

    li.appendChild(document.createTextNode(e.Name))
    li.appendChild(document.createTextNode(" "+ e.Number))
    li.appendChild(document.createTextNode(" "+ e.Email))
    li.appendChild(removeBtn)
    li.appendChild(editBtn)
    list.appendChild(li)
   
   }

   document.getElementById('username').value=""
   document.getElementById('userno').value=""
   document.getElementById('usermail').value=""

   
}
axios.get('https://crudcrud.com/api/ec2835c33e144026af307052d2c73666/appointdata')
   .then((e) =>{
      let arr=e.data
      for ( i=0; i<arr.length;i++) {
         let li= document.createElement('li')
         li.className='list-group-item'
     
         let removeBtn= document.createElement('button')
         removeBtn.textContent='REMOVE'
         removeBtn.id='remove'
     
         let editBtn=document.createElement('button')
         editBtn.textContent='EDIT'
         editBtn.id='edit'
        

         removeBtn.onclick=(e) =>{
            confirm('Do you want to delete?')
            {
                let li= e.target.parentElement
                list.removeChild(li)
               
                
                
            }
                
             }
      
             editBtn.onclick=(e) =>{
               confirm('Do you want to make chages?')
                   {   let li=e.target.parentElement
                    list.removeChild(li)
                       document.getElementById('username').value=Inpname
                       document.getElementById('userno').value=Inpnumber
                       document.getElementById('usermail').value=Inpemail
                   }
                }
         
         li.appendChild(document.createTextNode(arr[i].Name))
         li.appendChild(document.createTextNode(" "+ arr[i].PhoneNumber))
         li.appendChild(document.createTextNode(" "+ arr[i].Email))
         li.appendChild(removeBtn)
         li.appendChild(editBtn)
         list.appendChild(li)
       }; 
      console.log(e.data)
   })
   .catch((err) =>{
      console.log(err)
   })

   
   