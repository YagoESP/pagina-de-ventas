export let renderTabs = () => {

    let tabl = document.querySelectorAll(".tab-element")
    let panel = document.querySelectorAll(".panel")
    let tab = document.querySelectorAll(".tab")
    let panell = document.querySelectorAll(".panel-element")
    
    
    tabl.forEach(tab => {
        
        tab.addEventListener("click", () => {    
            
    
            tabl.forEach(tab =>{
    
                tab.classList.remove("active");
                
            })
            
            tab.classList.add("active");
    
            panell.forEach(panel =>{
                if(tabl.dataset.text == panel.dataset.text) {
                    panel.classList.add("first");
                }
            })
        });
    
        
    });
}

