const li = document.querySelectorAll('li');
const rating = document.querySelector('.rating');
const ty = document.querySelector('.thank_you');
const rate = document.querySelector('.rate');
let clicked = 0;

window.addEventListener('click', (e) => {
    e.preventDefault();
    el = event.target;
    if(el.innerHTML >= 0 || el.innerHTML <= 5){
        li.forEach((e)=>{
            if(e.classList.contains('li__selected')){
                e.classList.remove('li__selected');
            }
        })
        clicked = el.innerHTML;
        el.classList.add("li__selected");
        console.log(clicked)
    }

    if(el.innerHTML == "SUBMIT") {
        if(ty.classList.contains('submitted')){
            ty.classList.remove('submitted');
            rating.classList.add('submitted')
            console.log(clicked)
            rate.innerHTML = clicked;
        }
    }
})