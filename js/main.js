/*------------about section tabs -----------*/ 
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            //deactivate existing active tab item
            tabsContainer.querySelector(".active").classList.remove("outer-shadow",
            "active");
            //activate new tab item
            event.target.classList.add("active", "outer-shadow");

            //deactivate exisiting tab content
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //activate new tab content
            aboutSection.querySelector(target).classList.add("active");
        }
    })

    window.location.hash = hash;
})();

// navigation menu
// (() => {
//     const hamburgerBtn = document.querySelector(".hamburger-btn"),
//     navMenu = document.querySelector(".nav-menu"),
//     closeNavBtn = navMenu.querySelector(".close-nav-menu");
    
//     hamburgerBtn.addEventListener("click", showNavMenu);
//     closeNavBtn.addEventListener("click", hideNavMenu);

//     function showNavMenu(){
//         navMenu.classList.add("open");
//     }
//     function hideNavMenu(){
//         navMenu.classList.remove("open");
//     }

//     document.addEventListener('click', (event) => {
//         if(event.target.classList.contains('link-item')){
//             alert("hi")
//         }
//     })
// })();