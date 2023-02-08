const allMapButtons = document.querySelectorAll('.department-button');
const departmentOverlay = document.getElementById('department-overlay');
const allDepartmentLinks = document.querySelectorAll('.department-link');


const openPopup = (city) => {
    const popup = document.getElementById(city+'-popup');
    fadeIn(popup, 500)
    departmentOverlay.style.display = 'block'

}

const addCloseHandler = city => {
    console.log('CLosing popup');
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

