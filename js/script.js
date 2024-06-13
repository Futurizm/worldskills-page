const optionMenu = document.querySelector('.header__select-menu')
const headerSelectBtn = optionMenu.querySelector('.header__select-btn')
const headerOptions = optionMenu.querySelectorAll('.header__option')
const headerSBtnText = optionMenu.querySelector('.header__sBtn-text')


function closeDropdown() {
    optionMenu.classList.remove('active')
}

headerSelectBtn.addEventListener('click', () => {
    optionMenu.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    const isInsideDropdown = optionMenu.contains(e.target) || headerSelectBtn.container(e.target)
    if (!isInsideDropdown) {
        closeDropdown()
    }
})

headerOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedOption = option.querySelector('.header__option-hidden').innerText
        headerSBtnText.innerText = selectedOption
        closeDropdown()
    })
})