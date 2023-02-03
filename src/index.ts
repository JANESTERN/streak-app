 import streakClass from "./classes/streakClass.js"
 import taskClass from "./classes/myTaskClass.js"

//  get the div elements
 const contentdiv=document.getElementById('contentdiv')! as HTMLDivElement
 const content2 = document.getElementById('content2')! as HTMLDivElement

 // geting the input elements
 const form= document.getElementById('form')! as HTMLFormElement
 const addTask=document.getElementById('addTask')! as HTMLInputElement
 const ImageInput= document.getElementById('ImageInput')! as HTMLInputElement
 const dateInput=document.getElementById('dateInput')! as HTMLInputElement
 const createTask=document.getElementById('createTask')! as HTMLButtonElement
 const popUp= document.getElementById('popUp')! as HTMLDivElement
 // getting the display div
 const displayContent=document.querySelector('.displayContent') as HTMLDivElement
 let streakClass1 = new streakClass()

//  const validationMessage=document.getElementById('validationMessage')! as HTMLDivElement
  

//  get close and add div icons
 const addSign = document.getElementById('addSign')! as HTMLDivElement 
 const closeSign=document.querySelector('.closeBtn') as HTMLDivElement

 // creating an interface


createTask.addEventListener('click',(e)=>{
   // collecting the values of the input
e.preventDefault()
   const Tasktitle=addTask.value
   const Image=ImageInput.value
   const date=dateInput.value

   // adding a validation
   if(Tasktitle ==="" || Image ===""|| date ===""){
      const p = document.createElement('p')
      p.textContent="Hey, Kindly fill all the field"
      p.style.color='red'
      form.insertAdjacentElement('afterbegin', p)
      
      setTimeout(()=>{
         p.style.display='none'
      },5000)
   }else{
      let taskClass1 = new taskClass(Tasktitle,Image,date)
  
      streakClass1.TaskArray.push(taskClass1)

      console.log(taskClass1);
      displayTask()
      
      
   }
 
})

 addSign.addEventListener('click', ()=>{
    contentdiv.style.display='none';
    content2.style.display='flex';
    // contentdiv.style.backgroundColor= 'blue'
   //  alert('hi')


 });
 closeSign.addEventListener('click',()=>{
    contentdiv.style.display='flex';
    content2.style.display='none';
    
 })
 
 function displayTask(){
   displayContent.innerHTML=""
   streakClass1.TaskArray.map(task=>{
    let taskTemplate = ` <div class="taskCard" onclick = "popUpTask(${task.id})">
    <img src="${task.Image}">
    <p>${task.Tasktitle}</p>
    <p>${task.date}</p>
</div>`
console.log(task.id)
   displayContent.innerHTML += taskTemplate
   
   })   
   
 }

 function popUpTask(id:number){
 
   popUp.style.display='block';
   popUp.innerHTML =""
   const task: taskClass[] = streakClass1.TaskArray.filter((a) => a.id === id);
   task.find((a) => {
    let taskTemplate = ` <div class="taskCard">
    <img src="${a.Image}">
    <p>${a.Tasktitle}</p>
    <p>${a.date}</p>
</div>`

popUp.innerHTML += taskTemplate
   })

 }
 
// popUp.addEventListener('click')


  



 

























//  let formValidation=()=>{
//    if(addTask.value==="" || dateInput.value==="" || ImageInput.value===""){
//       // console.log("Kindly fill All The field");
//       validationMessage.innerHTML="Hey, Kindly Add all fields"   
//    }else{
//       console.log("pass");
//       validationMessage.innerHTML="";
      
//    }
//  }
// collecting and storing the data in an object
// let collectedData={}

// creating a function to collect the data