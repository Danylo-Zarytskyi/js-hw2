let inputAgeEl = document.querySelector('input[name="age"]');
let selectGenderEl = document.querySelector('select[name="gender"]');
let enterEl = document.querySelector('.enter');

enterEl.addEventListener('click', (ev) => {
    enterEl.classList.add();

    let val = Number(inputAgeEl.value); 
    let genderVal = selectGenderEl.value;

    console.log ( 'The age is ' + val + ' y.o');
    console.log ( 'Gender ' + genderVal );
})

