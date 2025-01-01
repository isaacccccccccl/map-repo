'use strict'

function onInit() {
    renderWeb()
}

function renderWeb() {
    // Load user preferences from localStorage
    const userPreferences = loadFromStorage('userDB') || {}
    const bgColor = userPreferences.bgColor || 'rgb(63, 150, 121)'
    const textColor = userPreferences.txtColor || '#39ac39'
    const dateOfBirth = userPreferences.BirthDate || '18-11-96'
    const timeOfBirth = userPreferences.BirthTime || '12:00'
    console.log(timeOfBirth)

    // Apply background color and text color to the body
    document.body.style.backgroundColor = bgColor
    document.body.style.color = textColor

    // Dynamically update the <a> elements inside the <nav>
    const navLinks = document.querySelectorAll('nav a')
    navLinks.forEach(link => {
        link.style.color = textColor; // Use the text color from preferences
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = textColor// Change background on hover
            link.style.color = bgColor; // Invert text color on hover
        })
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = 'gold' // Reset background color
            link.style.color = textColor // Reset text color
        })
    })

    const elDate = document.querySelector('span')
    // console.log(elDate)
    elDate.innerText = dateOfBirth
    const elTime = document.querySelector('.user-info .time span')
    // console.log(elTime)
    elTime.innerText = timeOfBirth
}