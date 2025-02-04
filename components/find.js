const arrowDown = document.querySelectorAll('.arrowDown');
const arrowDownIcon = document.querySelectorAll('.arrowDownIcon');

arrowDown.forEach((item, i) => {
    item.addEventListener('click', () => {

        arrowDownIcon[i].classList.toggle('active')
    })
})


// loading

window.addEventListener('load', () => {

    
    document.querySelector('body').classList.remove('hidden');
    document.getElementById('btn-open-nav').classList.remove('noneClick');
    document.getElementById('nav').classList.remove('hiddenMenu');



    const loading = document.querySelector('.loading');
    const loadingTop = document.querySelector('.loadingTop');

    loading.classList.add('hiddenLoading');

    loading.addEventListener('transitionend', () => {
        document.body.removeChild(loading)
    })

    loadingTop.classList.add('active');

    loadingTop.addEventListener('transitionend', () => {
        document.body.removeChild(loadingTop)
    })

})

// title name 

let nameTitle = [
    'Store Locator: Starbucks Coffee Company',
    'Delivery: Starbucks Coffee Company'
]


// taps 

const btnTaps = document.querySelectorAll('.btn-taps');
const containerTpaPage1 = document.querySelectorAll('.container-taps-page1');
const containerTpaPage2 = document.querySelectorAll('.container-taps-page2');
const title = document.querySelector('.title');

btnTaps.forEach((item, i) => {
    item.addEventListener('click', () => {

        btnTaps.forEach(item => {
            item.classList.remove('activeBTN')
        })
        item.classList.add('activeBTN');

        containerTpaPage1.forEach(item => [
            item.classList.remove('active')
        ])
        containerTpaPage1[i].classList.add('active');

        containerTpaPage2.forEach(item => [
            item.classList.remove('active')
        ])
        containerTpaPage2[i].classList.add('active');

        title.innerHTML = nameTitle[i];
    })
})