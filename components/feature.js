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