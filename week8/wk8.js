const input = form.elements.searchInput;
input.value = 'Search Here';
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);
const form = document.form['search'];
form.addEventListener('submit', search, false);
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

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
function makeHero(event) {
    event.preventDefault();
    const hero = {};
    hero.name = form.heroName.value;
    hero.realName = form.realName.value;
    hero.power = [];
    for(let i=0; i< form.powers.length; i++) {
        if(form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero));
    return hero;
}
form.addEventListener('submit', validate, false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if(firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is nto allowed to start with X.';
function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('x')) {
        error.style.display = 'block';
    }
    else {
        error.style.display = 'name';
    }
}
form.heroName.addEventListener('keyup', disableSubmit, false);
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementsById('submit').disabled = true;
    }
    else {
        document.getElementById('submit').disabled = false;
    }
}