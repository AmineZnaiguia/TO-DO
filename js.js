document.getElementById('addbtn').addEventListener('click', function(){
    let iputval = document.querySelector("#input").value;
   
    let mylist = document.getElementById('list')
    
    let li = `<ul class="myul"><button type="button" class="completeA">complete</button><button type="button" class="rem">delete</button><li class="inderline">${iputval}</li></ul>`
    if(iputval!==""){
    mylist.insertAdjacentHTML('beforeend', li);
    } else {
        return alert("vide")
    }
   
    
   
    let comp= Array.from(document.querySelectorAll(".completeA"));
    console.log(comp)

    verif=(child,index)=>{
        if(child.textContent==='complete' ){  

            child.addEventListener('click',()=>{
              
                child.textContent="undo";
                child.nextSibling.nextSibling.style.textDecoration="line-through";
                
                })

          }
        else{

            child.addEventListener('click',()=>{
                 
                    child.textContent='complete';
                    child.nextSibling.nextSibling.style.textDecoration="none";
                })

           }
   
       
    }

    Array.from(document.querySelectorAll(".completeA")).forEach((child,i) => {
        
        verif(child,i,child.textContent)
        

    });

    // comp.foreach((el,i)=>el.addEventListener('click', ()=>{
        // console.log(el,"ell",i)
    // console.log(el,"ell",i)
    //   if(el.textContent==='complete' ){
     
    //   el.textContent="undo";
    //   el.nextSibling.nextSibling.style.textDecoration="line-through";
      
    // }else{
    //   el.textContent='complete';
    //   el.nextSibling.nextSibling.style.textDecoration="none";
    // }
  
      
    // }))
        let remov =Array.from(document.querySelectorAll('.rem'));
        remov.map(el=>el.addEventListener('click',()=>{
            var x=el.parentNode
            x.remove(x)
        }))
        iputval = document.querySelector("#input").value = "";      
      
 })


//  function remove(){
//     let remov = document.querySelector('.myul')
//    remov.remove(remov)
//    }

//    function line(){
//     document.querySelector(".inderline").style.textDecoration="line-through";
    
//    }



   