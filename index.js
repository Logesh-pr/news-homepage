let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
let navMenu = document.getElementById("nav-menu");


    navToggle.addEventListener("click" , () =>{
       navMenu.classList.add("show")
    })

        navClose.addEventListener("click" , () =>{
       navMenu.classList.remove("show")
    })
// navClose.addEventListener("click" , () => {
//     console.log("clicked");
// })
// if(navToggle){
//     navToggle.addEventListener("click" , () =>{
//        navMenu.classList.add("show")
//     })
// }
// if(navClose){
//     navClose.addEventListener("click" , () =>{
//        navMenu.classList.remve("show")
//     })
// }