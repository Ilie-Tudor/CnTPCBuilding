let description_activators = document.getElementsByClassName("service-title");
let descriptions = document.getElementsByClassName("description");



for (let i = 0; i < description_activators.length; i++) {
    description_activators[i].addEventListener("click", function(){
        
        if(descriptions[i].style.display==""){
            descriptions[i].style.display="block";
        }
        else{
            descriptions[i].style.display="";
        }
        if(description_activators[i].classList.contains("chevrone-anim-up")){
            description_activators[i].classList.replace("chevrone-anim-up", "chevrone-anim-down");
        }
        else if(description_activators[i].classList.contains("chevrone-anim-down")){
            description_activators[i].classList.replace("chevrone-anim-down", "chevrone-anim-up");
            
        }

    });

}