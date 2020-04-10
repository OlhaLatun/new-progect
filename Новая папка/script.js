
    const buttonUp = document.querySelector(".upBtn");
    buttonUp.addEventListener("click", () => {
       upAndDown ("up");
    });

    const buttonDown = document.querySelector(".downBtn");
    buttonDown.addEventListener("click", () => {  
        upAndDown ("down");
    });
     

function upAndDown (direction) {
    const input = document.querySelector("#input").value.toLowerCase().replace(/\s/g, "");
    const section = document.querySelector("#container");
    const div = document.querySelector("#container").children;

    if (direction === "up") {
        for (let i = 0; i < div.length; i++) {
          if (i) {
            if (div[i].className === input) {
                 section.insertBefore(div[i], div[i - 1]);
           } 
        }
    }
}
    if (direction === "down") {
        for (let i = 0; i < div.length; i++) {
          if (i < div.length - 1) {
            if (div[i].className === input) {
                 section.insertBefore(div[i + 1], div[i]);
                 i++;
           } 
        }
    }
}  
    
}