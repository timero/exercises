document.onreadystatechange = () => {
    console.log(document.readyState);
    if (document.readyState === 'complete') {
      doStuff();
    }
  };

function doStuff() {
    document.querySelectorAll(".faq").forEach(addClickFunction);
}

function addClickFunction(htmlElement) {
    htmlElement.addEventListener("click", function(event){
        let old = document.querySelector(".faq.selected");
        if (old!==null){
            old.classList.remove("selected");
        }
        if (!this.isEqualNode(old)) {
            this.classList.add("selected");
        }
    });
}