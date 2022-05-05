import {renderNotifications} from './notifications.js';

export let renderForm = () => {

    let saveButton = document.querySelector(".save");

    if(saveButton){
        saveButton.addEventListener("click", () =>{

            renderNotifications('Se guardo el formulario correctamente', 'success');
    
        });
    }
  
}