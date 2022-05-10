export let renderTabs = () => {

    document.querySelectorAll(".tabs").forEach((tab) => {
        let tabl = tab.querySelectorAll(".element");
        let content = tab.querySelectorAll(".content");
      
        let tabName;
      
        tabl.forEach((element) => {
          element.addEventListener("click", () => {
            tabl.forEach((item) => {
              item.classList.remove("active");
            });
      
            element.classList.add("active");
      
            tabName = element.getAttribute("data-tab");
      
            content.forEach((item) => {
                item.classList.contains(tabName)
                item.classList.add("active")
                item.classList.remove("active");
      
            });
          });
        });
      });

}

