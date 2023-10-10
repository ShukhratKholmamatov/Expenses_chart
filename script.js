let monday = document.querySelector('.monday');
let tuesday = document.querySelector('.tuesday');
let wednesday = document.querySelector('.wednesday');
let thursday = document.querySelector('.thursday');
let friday = document.querySelector('.friday');
let saturday = document.querySelector('.saturday');
let sunday = document.querySelector('.sunday');

const url = 'data.json';

window.addEventListener('onload', change())

function change(){
    fetch(url)
    .then(data => data.json())
    .then(item => {monday.style.height = `${item[0].amount*2.5}px`,
                  tuesday.style.height = `${item[1].amount*2.5}px`,
                  wednesday.style.height = `${item[2].amount*2.5}px`,
                  thursday.style.height = `${item[3].amount*2.5}px`,
                  friday.style.height = `${item[4].amount*2.5}px`,
                  saturday.style.height = `${item[5].amount*2.5}px`,
                  sunday.style.height = `${item[6].amount*2.5}px`
                }
        );
}
