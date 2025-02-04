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


// let item scrollLeft 

const containeritem = document.querySelector('.container-item');
const arrow = document.querySelectorAll('.arrow i');
const left = document.getElementById('left');
const right = document.getElementById('right');

const handleIcon = () => {
    let scrollVal = Math.round(containeritem.scrollLeft);
    let scrollBleWidth = containeritem.scrollWidth - containeritem.clientWidth;
    arrow[0].parentElement.style.display = scrollVal > 0 ? 'inline-flex' : 'none';
    arrow[1].parentElement.style.display = scrollBleWidth > scrollVal ? 'inline-flex' : 'none';
}

right.addEventListener('click', () => {
    containeritem.scrollLeft += right === "left" ? 350 : 350;
    setTimeout(() => handleIcon(), 50)
})

left.addEventListener('click', () => {
    containeritem.scrollLeft += left === "left" ? -350 : -350;

    setTimeout(() => handleIcon(), 50)
})

// scroll2

const containeritem2 = document.querySelector('.container-item2');
const arrow2 = document.querySelectorAll('.arrow2 i');
const left2 = document.getElementById('left2');
const right2 = document.getElementById('right2');

const handleIcon2 = () => {
    let scrollVal = Math.round(containeritem2.scrollLeft);
    let scrollBleWidth = containeritem2.scrollWidth - containeritem2.clientWidth;
    arrow2[0].parentElement.style.display = scrollVal > 0 ? 'inline-flex' : 'none';
    arrow2[1].parentElement.style.display = scrollBleWidth > scrollVal ? 'inline-flex' : 'none';
}

right2.addEventListener('click', () => {
    containeritem2.scrollLeft += right2 === "left" ? 350 : 350;
    setTimeout(() => handleIcon2(), 50)
})

left2.addEventListener('click', () => {
    containeritem2.scrollLeft += left2 === "left" ? -350 : -350;

    setTimeout(() => handleIcon2(), 50)
})


// scroll3

const containeritem3 = document.querySelector('.container-item3');
const arrow3 = document.querySelectorAll('.arrow3 i');
const left3 = document.getElementById('left3');
const right3 = document.getElementById('right3');

const handleIcon3 = () => {
    let scrollVal = Math.round(containeritem3.scrollLeft);
    let scrollBleWidth = containeritem3.scrollWidth - containeritem3.clientWidth;
    arrow3[0].parentElement.style.display = scrollVal > 0 ? 'inline-flex' : 'none';
    arrow3[1].parentElement.style.display = scrollBleWidth > scrollVal ? 'inline-flex' : 'none';
}

right3.addEventListener('click', () => {
    containeritem3.scrollLeft += right3 === "left" ? 350 : 350;
    setTimeout(() => handleIcon3(), 50)
})

left3.addEventListener('click', () => {
    containeritem3.scrollLeft += left3 === "left" ? -350 : -350;

    setTimeout(() => handleIcon3(), 50)
})

//scroll4

const containeritem4 = document.querySelector('.container-item4');
const arrow4 = document.querySelectorAll('.arrow4 i');
const left4 = document.getElementById('left4');
const right4 = document.getElementById('right4');

const handleIcon4 = () => {
    let scrollVal = Math.round(containeritem4.scrollLeft);
    let scrollBleWidth = containeritem4.scrollWidth - containeritem4.clientWidth;
    arrow4[0].parentElement.style.display = scrollVal > 0 ? 'inline-flex' : 'none';
    arrow4[1].parentElement.style.display = scrollBleWidth > scrollVal ? 'inline-flex' : 'none';
}

right4.addEventListener('click', () => {
    containeritem4.scrollLeft += right4 === "left" ? 350 : 350;
    setTimeout(() => handleIcon4(), 50)
})

left4.addEventListener('click', () => {
    containeritem4.scrollLeft += left3 === "left" ? -350 : -350;

    setTimeout(() => handleIcon4(), 50)
})

// scroll5

const containeritem5 = document.querySelector('.container-item5');
const arrow5 = document.querySelectorAll('.arrow5 i');
const left5 = document.getElementById('left5');
const right5 = document.getElementById('right5');

const handleIcon5 = () => {
    let scrollVal = Math.round(containeritem5.scrollLeft);
    let scrollBleWidth = containeritem5.scrollWidth - containeritem5.clientWidth;
    arrow5[0].parentElement.style.display = scrollVal > 0 ? 'inline-flex' : 'none';
    arrow5[1].parentElement.style.display = scrollBleWidth > scrollVal ? 'inline-flex' : 'none';
}

right5.addEventListener('click', () => {
    containeritem5.scrollLeft += right5 === "left" ? 350 : 350;
    setTimeout(() => handleIcon5(), 50)
})

left5.addEventListener('click', () => {
    containeritem5.scrollLeft += left5 === "left" ? -350 : -350;

    setTimeout(() => handleIcon5(), 50)
})

//scroll6

const containeritem6 = document.querySelector('.container-item6');
const arrow6 = document.querySelectorAll('.arrow6 i');
const left6 = document.getElementById('left6');
const right6 = document.getElementById('right6');

const handleIcon6 = () => {
    let scrollVal = Math.round(containeritem6.scrollLeft);
    let scrollBleWidth = containeritem6.scrollWidth - containeritem6.clientWidth;
    arrow6[0].parentElement.style.display = scrollVal > 0 ? 'inline-flex' : 'none';
    arrow6[1].parentElement.style.display = scrollBleWidth > scrollVal ? 'inline-flex' : 'none';
}

right6.addEventListener('click', () => {
    containeritem6.scrollLeft += right6 === "left" ? 350 : 350;
    setTimeout(() => handleIcon6(), 50)
})

left6.addEventListener('click', () => {
    containeritem6.scrollLeft += left6 === "left" ? -350 : -350;

    setTimeout(() => handleIcon6(), 50)
})

//scroll7

const containeritem7 = document.querySelector('.container-item7');
const arrow7 = document.querySelectorAll('.arrow7 i');
const left7 = document.getElementById('left7');
const right7 = document.getElementById('right7');

const handleIcon7 = () => {
    let scrollVal = Math.round(containeritem7.scrollLeft);
    let scrollBleWidth = containeritem7.scrollWidth - containeritem7.clientWidth;
    arrow7[0].parentElement.style.display = scrollVal > 0 ? 'inline-flex' : 'none';
    arrow7[1].parentElement.style.display = scrollBleWidth > scrollVal ? 'inline-flex' : 'none';
}

right7.addEventListener('click', () => {
    containeritem7.scrollLeft += right7 === "left" ? 350 : 350;
    setTimeout(() => handleIcon7(), 50)
})

left7.addEventListener('click', () => {
    containeritem7.scrollLeft += left7 === "left" ? -350 : -350;

    setTimeout(() => handleIcon7(), 50)
})


// display item 

const SEEALL = document.querySelectorAll('.SEEALL');
const containerHidden = document.querySelector('.container-hidden');
const containerSEEALLCARD = document.querySelectorAll('.containerSEEALLCARD');
const title = document.querySelector('.title')

SEEALL.forEach((item, i) => {
    item.addEventListener('click', () => {
        containerHidden.classList.add('active');

        containerSEEALLCARD.forEach(item => {
            item.classList.remove('active')
        })
        containerSEEALLCARD[i].classList.add('active');

        title.innerHTML = nameTitle[i]
    })
}) 


let nameTitle = [
    'Starbucks Featured Gift Cards: Starbucks Coffee Company',
    `Starbucks Valentine's Day | 2/14 Gift Cards: Starbucks Coffee Company`,
    'Starbucks Birthday Gift Cards: Starbucks Coffee Company',
    'Starbucks Thank You Gift Cards: Starbucks Coffee Company',
    'Starbucks Celebration Gift Cards: Starbucks Coffee Company',
    'Starbucks Appreciation Gift Cards: Starbucks Coffee Company',
    'Starbucks Encouragement Gift Cards: Starbucks Coffee Company'
]