
const menu = document.querySelector(".navor");
const button = document.querySelector(".open");
const Close = document.querySelector("#close");

button.addEventListener('click', () =>{
    menu.style.display ="flex";
    Close.style.display ="inline-block";
    button.style.display = "none";

})

const closeNav = () =>{
    menu.style.display = "none";
    Close.style.display = "none";
    button.style.display ="inline-block";
}

Close.addEventListener('click', closeNav)

// window.onscroll = () =>{ 
    
//     menu.style.display = "none"; 
//     Close.style.display = "none";
//     button.style.display ="inline-block";
 
// };

const Btn = document.querySelector(".btn__sub");

Btn.addEventListener('click', () =>{
   Notification.requestPermission().then(perm =>{
    if(perm === "granted"){
        new Notification("new Notification")
    }
   })
 
})

const darkmode = document.querySelector(".moon");
const lightmode = document.querySelector(".sun");
 
darkmode.addEventListener('click', () => {
    lightmode.style.display = "block";
    darkmode.style.display = "none";
    document.body.classList.remove("bright");
    document.body.classList.add("black");

    document.body.classList.add("white");
})

lightmode.addEventListener('click', () => {
    darkmode.style.display = "block";
    lightmode.style.display = "none";
    document.body.classList.add("bright");
    document.body.classList.remove("black");
    document.body.classList.remove("white");
})


 