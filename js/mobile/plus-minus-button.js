export let renderPlusMinusButton = () => {

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

}
