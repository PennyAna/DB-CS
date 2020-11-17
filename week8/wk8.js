const input = form.elements.searchInput;
input.value = 'Search Here';
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);
const form = document.form['search'];
form.addEventListener('submit', search, false);
function search(event) {
    alert(`You Searched for : ${input.value}`);
    event.preventDefault();
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
