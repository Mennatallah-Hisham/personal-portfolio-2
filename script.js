const progressBars =document.querySelectorAll(".progress-bar");
const progressBarContainer =document.querySelector(".skills");

const counterContainer =document.querySelector(".info");
const counters = document.querySelectorAll(".num");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list-link");


function progressUp(){
    progressBars.forEach(bar => 
    
        {
            const targetWidth =bar.getAttribute("data-width");
 
            let currentWidth =0;
            const updateBar=()=>{
                if(currentWidth<targetWidth){
                    currentWidth++;
                    bar.style.width=`${currentWidth}%`;
                    setTimeout(updateBar,10)
        
                }else{
                   bar.style.width=`${targetWidth}%`;
        
        
                }
            }

                updateBar();

           
       
      
     
    });
    
}

function countUp (){
counters.forEach(counter=>{
    const target = counter.getAttribute("data-target");
   
  let current =0;
  function updateCounter(){

    if(current <target){
        current= current +2;
        counter.innerHTML =current;
        setTimeout(updateCounter,3);
    }else{

        counter.innerHTML=target;
    }
    
  }
  updateCounter();


})


 }


const startCouterUp = function(entery){
    if(entery[0].isIntersecting){
      countUp();
      counterObs.unobserve(counterContainer)
    }
}

const startProgressBar = function (entery){
    if(entery[0].isIntersecting){
      
       progressUp();
       progressBarObs.unobserve(progressBarContainer);
    }
}
const obsOptions ={
    root:null,
    threshold:0,
}

const progressBarObs = new IntersectionObserver(startProgressBar,obsOptions);
progressBarObs.observe(progressBarContainer);


const counterObs = new IntersectionObserver(startCouterUp,obsOptions);

counterObs.observe(counterContainer);




const sectionLinkActivation=function (entery){
    const section =entery[0];

const sectionId =section.target.getAttribute("id");
if(!sectionId) return;
    if(section.isIntersecting){
     
     
        
        

     document.querySelector(`[href="#${sectionId}"]`)?.classList.add('active-link');
    

     

    }
    if(section.isIntersecting ===false){
       
        document.querySelector(`[href="#${sectionId}"]`)?.classList.remove('active-link');
    }


    
   

}

const sectionObs = new IntersectionObserver(sectionLinkActivation,{
   
        root:null,
        threshold:0.1,
    
})



sections.forEach((section)=>{
    sectionObs.observe(section);

})