export let renderAccordion = () =>{
    
    let faqs = document.querySelectorAll(".question");

    if(faqs){
        faqs.forEach((faq, i) => {
            faq.addEventListener("click", () => {
                faqs[i].classList.toggle("active")
                let contents = document.querySelectorAll(".content")
                contents[i].classList.toggle("active")
                let arrow = document.querySelectorAll(".item")
                arrow[i].classList.toggle("active")
            });
        });
    }
}