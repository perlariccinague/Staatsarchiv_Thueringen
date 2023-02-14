const allMapButtons = document.querySelectorAll('.department-button');
const departmentOverlay = document.getElementById('department-overlay');
const allDepartmentLinks = document.querySelectorAll('.department-link');
const allPopup  = document.querySelectorAll('.department-popup');
const menuCloseLink = document.querySelectorAll('.menu-close-link');
let fullscreen = false;
let fullscreenPopUp = false;
 let fullscreenLink = false;

const openPopup = (city) => {
    const popup = document.getElementById(city+'-popup');
    fadeIn(popup, 500)
    departmentOverlay.style.display = 'block'

}

const addCloseHandler = city => {
    const popup = document.getElementById(city+'-popup');
    document.body.addEventListener('click', (event) => {
        if(event.target === departmentOverlay) {
            fadeOut(popup, 500);
            departmentOverlay.style.display = 'none';
        }
   })
}

allMapButtons.forEach(link => {
    link.addEventListener('click', () => {
        const city = link.id.substr(7);
        openPopup(city);
        addCloseHandler(city);
    })
})

allDepartmentLinks.forEach(link => {
    link.addEventListener('click', () => {
        const city = link.id.substr(5);
        openPopup(city);
        addCloseHandler(city)
    })
})



const toggleFullscreen = () => {
    allMapButtons.forEach(button => {
        if(fullscreen) {
            button.classList.remove('fullscreen-button')
        } else {
            button.classList.add('fullscreen-button')
        }
    })
    fullscreen = true;
}


const popupFullscreen = () => {
    allPopup.forEach(box => {
        if(fullscreenPopUp) {
            box.classList.remove('fullscreen-button');
        } else {
            box.classList.add('fullscreen-button')
        }
    })
    fullscreenPopUp = true;
}

const linkFullscreen = () => {
    allDepartmentLinks.forEach(link => {
        if(fullscreenLink) {
            link.classList.remove('fullscreen-button');
        } else {
            link.classList.add('fullscreen-button')
        }
    })
    fullscreenLink = true;
}


menuCloseLink.forEach(close => {
    close.addEventListener('click', (event) => {
        event.preventDefault();
        departmentOverlay.style.display = 'none';
        allPopup.forEach(box => {
           box.style.opacity = '0';
           box.style.zIndex = '0'
        })

    })
})








