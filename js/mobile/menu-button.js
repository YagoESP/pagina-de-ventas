export let renderMenuButton = () => {

    let hamburger = document.querySelector(".hamburger");
    let menu = document.getElementById("hamburger-menu");
    
    
    if(hamburger){
        hamburger.addEventListener("click",()=> {
    
            hamburger.classList.add("active");
            menu.classList.add("active");
        
            
        });
    }
}
