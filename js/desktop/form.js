import {renderNotifications} from './notifications.js';

export let renderForm = () => {

    let addButton = document.querySelector(".save");

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

