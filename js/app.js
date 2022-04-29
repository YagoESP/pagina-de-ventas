let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let show = document.getElementById("show");

add.addEventListener("click",function(){
    show.value = (parseInt(show.value) + 1)
})

subtract.addEventListener("click",function(){
    
    if(show.value > 1){
        show.value = (parseInt(show.value) - 1)
    }
})


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

