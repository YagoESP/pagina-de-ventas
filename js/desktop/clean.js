export let renderClean = () =>{
    let addButton = document.querySelector(".clean");

    addButton.addEventListener("click", () =>{
        

        if(addButton) {
            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Enviado correctamente',
                    type: 'success'
                }
            }));
        } else{
            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Incorrecto ',
                    type: 'error'
                }
            }));
        }
    }) 
}