const input = document.forms['searchInput'];
input.value = 'Search Here';
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);
const form1 = document.forms['search'];
form1.addEventListener('submit', search, false);
function search(event) {
    event.preventDefault();
    alert(`You Searched for : ${input.value}`);

}
input.addEventListener('focus', function(){
    if(input.value==='Search Here') {
        input.value = ''
    }
},false);
input.addEventListener('blur', function() {
    if(input.value==='') {
        input.value = 'Search Here';
    }
}, false);

const form2 = document.forms['hero'];
form2.addEventListener('submit', makeHero, false);
function makeHero(event) {
    event.preventDefault();
    const hero = {};
    hero.name = form2.heroName.value;
    hero.realName = form2.realName.value;
    hero.power = [];
    for(let i=0; i< form2.powers.length; i++) {
        if(form2.powers[i].checked) {
            hero.powers.push(form2.powers[i].value);
        }
    }
    hero.category = form2.category.value;
    hero.age = form2.age.value;
    hero.city = form2.city.value;
    hero.origin = form2.origin.value;
    alert(JSON.stringify(hero));
    return hero;
}
form2.addEventListener('submit', validate, false);
function validate(event) {
    const firstLetter = form2.heroName.value[0];
    if(firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
const label = form2.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('x')) {
        error.style.display = 'block';
    }
    else {
        error.style.display = 'name';
    }
}
form2.heroName.addEventListener('keyup', disableSubmit, false);
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementsById('submit').disabled = true;
    }
    else {
        document.getElementById('submit').disabled = false;
    }
}