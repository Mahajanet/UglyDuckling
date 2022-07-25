// Defining variables
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const navbar = document.getElementById("nav__list");
const sections = document.querySelectorAll("section");
const navList = document.getElementById("nav__list");
let userHasScrolled = false;


// Functions


// Creating a new nav item dynamically
function createNavItem(){
    //Iterating over each section and creating a navItem for it
    for (let i= 0; i<sections.length; i++){
        let navName = sections[i].getAttribute("id");

        //Creating list item
        const navItem = document.createElement("li");
        const navText = document.createTextNode(navName);
        navItem.appendChild(navText);
        navItem.classList.add("nav__item");
        navItem.setAttribute("data-id", navName);

        //Creating link item
        let navLink = document.createElement("a");
        navLink.href = "#"+ navName;

        //Appending list item to link item
        navLink.appendChild(navItem);

        //Appending link item to navbar
        navbar.appendChild(navLink);
    };

    //Adding event listener
    navbar.addEventListener("click", (evt)=>{
        if (evt.target.classList.contains("nav__item")){
            sectionName = document.getElementById(evt.target.dataset.id);
            document.querySelector(".active-sec").classList.remove("active-sec")
            sectionName.classList.add("active-sec");
        }
    })
}

createNavItem();

//Smooth scrolling
function smoothScroll(){
    document.querySelectorAll('a').forEach(anc =>{
        anc.addEventListener("click", function(evt){
            evt.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth"}
            );
        });
    });
}

smoothScroll();

function lightMode(){
    document.querySelector(".theme-btn").addEventListener("click", ()=>{

        //Light Mode and Dark mode to body
        let element = document.querySelector(".main-content");
        element.classList.toggle("light-mode");
       
        //Changing toggle button
        let toggle = document.querySelector(".toggle");
        if (toggle.classList.contains("fa-toggle-off")){
            toggle.classList.replace("fa-toggle-off", "fa-toggle-on");}
        else {
            toggle.classList.replace("fa-toggle-on", "fa-toggle-off");
        }
    })
}

lightMode();

// Collapsable nav
function hamburger(){
    hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function(){
        nav.classList.toggle("nav-collapsable");
    })
}

hamburger();

// Collapsable nav
function removeHamburger(){
    document.querySelector("#nav__list").addEventListener('click', (e) =>{
        if (e.target.classList.contains("nav__item")){
            nav.classList.remove("nav-collapsable");
        }
    });
}

removeHamburger();

//Go to top button  and opacity of navbar when scrolling
function hasScrolled(){
    window.addEventListener('scroll', (e) => {
    userHasScrolled = true;
    if (userHasScrolled){
        nav.classList.toggle("nav-scroll", window.scrollY>0);
        document.querySelector(".top-btn").classList.toggle("visible", window.scrollY >100);
        nav.classList.remove("nav-hide");
        main.classList.remove("nav-padding");
    };
    
}); 
}

hasScrolled();

// Hiding navbar when not scrolling
function noScroll(){
    let timer = 0;
    window.addEventListener("scroll", function(e){
        if (timer != 0) {
            this.clearTimeout(timer);
        }
        setTimeout(()=>{
            if (this.window.scrollY>0){
            nav.classList.add("nav-hide")
            main.classList.add("nav-padding")};
        }, 3000);
    }, false);
}

noScroll();

// End of code