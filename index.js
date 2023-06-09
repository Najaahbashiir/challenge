const buttons =document.querySelectorAll(".btn");
const box = document.querySelector(".box");
const span = document.querySelector("span");
const fontSi = document.querySelector("#fontSi");
const border = document.querySelector("#border");
const fontW = document.querySelector("#fontW");

const op = document.querySelector("#op");



buttons.forEach(button =>{

                     

     button.addEventListener("click",(e)=>{
        
   if(button.classList.contains("blck")){
        box.style.backgroundColor ="black";
        console.log("fffffff")
     }else if(button.classList.contains("red")){
     box.style.backgroundColor ="red";
     }else if(button.classList.contains("brown")){
          box.style.backgroundColor ="brown";
           
     }else if(button.classList.contains("darkcyan")){
     box.style.backgroundColor ="darkcyan";

     }else if(button.classList.contains("gray")){
    box.style.backgroundColor ="gray";
                       
    }else{
    box.style.backgroundColor ="#2b4c69";

 }
                            
     
     
     })

});




fontSi.addEventListener("keyup",(e)=>{
  const font= e.target.value;


  span.style.fontSize = `${font}px`;
  
})

border.addEventListener("keyup",(e)=>{
     const font= e.target.value;
   
    //  console.log(font)
   
     box.style.borderRadius  = `${font}px`;
     
   })


   fontW.addEventListener("keyup",(e)=>{
     const font= e.target.value;
   
     console.log(font)
   
     span.style.fontWeight  = `${font}`;
     
   })

   op.addEventListener("change",(e)=>{
    const font= e.target.value;
  
    console.log(font)
  
    span.style.fontFamily  = `${font}`;
    
  })