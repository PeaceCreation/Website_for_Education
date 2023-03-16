
// Slider Image 
// Select The Slider Section
let slider = document.querySelector(".slider");
    // Image Array
let imags = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
setInterval( () =>{
//console.log(images)
// Get Random Number of Image
let RanImg = Math.floor(Math.random()* imags.length);
// Select Slider 
slider.style.backgroundImage = 'url("images/'+imags[RanImg]+'")';
}, 3000);
// Select All Links
let links = document.querySelectorAll(".links li");
// console.log(links)
links.forEach( link =>{
    // Add Event To The Current Links
    link.addEventListener('click', (e) =>{
        // Select Link That Has Class Active
        e.target.parentElement.querySelectorAll('.active').forEach( li =>{
            // Remove Class Active From Clicked Lin
            li.classList.remove("active");
        });
            // Add Class Active to Current Link
            e.target.classList.add("active");
    });
});

links.forEach(link =>{
    link.addEventListener("click", (e) =>{
        window.scrollTo({
           
            top: document.querySelector(e.target.dataset.course).offsetTop,
            behavior: 'smooth'
        });
    //   console.log();
    console.log(document.querySelector(e.target.dataset.course).offsetTop);
    });
});
// Select Menu

let menu = document.querySelector('.fa-bars');
let navbar = document.querySelectorAll('.navbar');
menu.onclick = function (){
 
    navbar.forEach( link =>{
    link.classList.toggle("active");
    })
     
}
let months = document.querySelector(".months");
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let seconds = document.querySelector(".seconds");
let datenow = new Date();
let Months =datenow.getMonth();
let Days =datenow.getDay();
let Hours =datenow.getHours();
let Minutes =datenow.getMinutes();
console.log(Minutes);

months.innerHTML = Months + "\nMonths";
days.innerHTML = Days + "\nDays";
hours.innerHTML = Hours + "\nHours";
seconds.innerHTML = Minutes + "\nMinutes";


// Gget all imgaes
let linkscat = document.querySelectorAll(".navcat li");
let all = document.querySelectorAll(".product img");
// all.forEach(img =>{
//     img.style.display = "none";
// });

linkscat.forEach( link =>{
    link.addEventListener("click", (e)=>{
        console.log(e.target);
        // console.log(a);
        document.querySelectorAll(e.target.dataset.products).forEach( cat =>{
            cat.style.display = "block";
        });
        // console.log( );
       
    });
    all.forEach(img =>{
        // img.style.display = "none"; 
    });
   
});
// linkscat.forEach( link =>{
//     link.addEventListener("click", (e) =>{
//         document.querySelectorAll(e.target.dataset.products).forEach( prods =>{
//            prods.style.display = "block";
//         });
//     });
// });
console.log(linkscat)

