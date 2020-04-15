
const divs = [
    document.querySelector(".class1"),
    document.querySelector(".class2"),
    document.querySelector(".class3"),
    document.querySelector(".class4"),
]


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
    const currentDiv = divs.find(div => div.className == input);

    if (direction === "up") {
        if (currentDiv.className == input) {
            section.insertBefore(currentDiv, currentDiv.previousElementSibling);
           }    
    }

    if (direction === "down") {
        if (currentDiv.className == input && currentDiv.nextElementSibling) {
            section.insertBefore(currentDiv.nextElementSibling, currentDiv); 
            } else { 
                section.insertBefore(currentDiv, section.firstElementChild); }
        }     
} 
  
    


// function upAndDown (direction) {
//     const input = document.querySelector("#input").value.toLowerCase().replace(/\s/g, "");
//     const section = document.querySelector("#container");
//     const div = document.querySelector("#container").children;

//     if (direction === "up") {
//         for (let i = 0; i < div.length; i++) {
//           if (i) {
//             if (div[i].className === input) {
//                  section.insertBefore(div[i], div[i - 1]);
//            } 
//         }
//     }
// }
//     if (direction === "down") {
//         for (let i = 0; i < div.length; i++) {
//           if (i < div.length - 1) {
//             if (div[i].className === input) {
//                  section.insertBefore(div[i + 1], div[i]);
//                  i++;
//            } 
//         }
//     }
// }  
    
// }

// for (var x = "#"; x.length <= 7; x += "#") {
//     console.log(x);
// }


//  for (let num = 1; num <= 100; num++)  {
//      let output = "";
//         if (num % 3 == 0) output += "Fizz";
//         if (num % 5 == 0) output += "Buzz";
//         console.log(output || num);
    
// }

// let size = 8;
// let board = "";

// for (let y = 0; y < size; y++) {
   
//     for (let x = 0; x < size; x++) {
        
//         if ((x + y) % 2 == 0) {
//             board += " ";
//         } else {
//             board += "#";
//         }
//     }
//     board += "\n";
// }

// console.log(board);
