export let renderPlusMinusButton = () => {

    let add = document.getElementById("add");
    let subtract = document.getElementById("subtract");
    let show = document.getElementById("show");
    
    add.addEventListener("click",() =>{
        show.value = (parseInt(show.value) + 1)
    })
    
    subtract.addEventListener("click",()=>{
        
        if(show.value > 1){
            show.value = (parseInt(show.value) - 1)
        }
    })

}
