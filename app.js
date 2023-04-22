const accorddionItems = document.querySelectorAll('.accordion-item')
const accorddionButtons = document.querySelectorAll('.accordion-button')

accorddionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (accorddionItems[index].classList.contains('active')) {
            accorddionItems[index].classList.remove('active')

        } else {
            accorddionItems[index].classList.add('active')

        }
    })
})


// function removeFromAll() {
//     accorddionItems.forEach(item => {
//         if (item.classList.contains('active')) {
//             item.classList.remove('active')
//         }
//     })
// }