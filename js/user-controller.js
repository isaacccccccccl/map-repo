'use strict'

function onSubmit(ev) {
    ev.preventDefault()
    const user = getUser()
    user.bgColor = document.querySelector('.background-color').value
    user.txtColor = document.querySelector('.text-color').value
    user.BirthDate = document.querySelector('.date-of-birth').value
    user.BirthTime = document.querySelector('.time-of-birth').value
    console.log(user)
    changeSettings(user)
    _saveUserSettingsToStorage()
    onInit()
}

function changeSettings(user) {
    // console.log('settings.....')
    const elBody = document.querySelector('body')
    // console.log('elBody', elBody)
    elBody.style.backgroundColor = user.bgColor
    elBody.style.color = user.txtColor
}

function onShowAge(elAge) {
  const elAgeSpan =   document.querySelector('.age-span')
//   console.log(elAge)
  elAgeSpan.innerText = elAge
}