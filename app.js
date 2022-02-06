app = () =>{
    let isHamburgerClosed = true;
    let hamburger = document.querySelector(".hamburger");
    let hamburgerbars = document.querySelector(".hamburger-bars");
    let mobileLinks = document.querySelector(".mobile-links");
    
    hamburger.addEventListener('click', function(){
        if(isHamburgerClosed){
            hamburgerbars.style.transform ="rotate(180deg)"
            hamburgerbars.style.transition = "0.5s";
            isHamburgerClosed = !isHamburgerClosed;
            mobileLinks.setAttribute('style', 'display:block')
        }
        else{
            hamburgerbars.style.transform ="rotate(-180deg)"
            hamburgerbars.style.transition = "0.5s";
            isHamburgerClosed = !isHamburgerClosed;
            mobileLinks.setAttribute('style', 'display:none')
        }
    });
};

app();


