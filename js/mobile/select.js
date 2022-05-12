export let renderSelect = () => {
    let infoproducts = document.querySelectorAll('.information-product');
    
    if(infoproducts){
        infoproducts.forEach(infoproduct =>{

            infoproduct.addEventListener("change", () => {
                
                let infoRelated = document.querySelector('.information-related');
          
                if(infoproduct == infoRelated.dataset.related){
                    infoRelated.classList.add('active');
                }else{
                    infoRelated.classList.remove('active');
                }
            });
        })
    }
}