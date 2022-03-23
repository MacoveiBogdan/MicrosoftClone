// Initializarea trigger-ului de meniu
let $menuTriggerButton = document.getElementById('menuTrigger');
let $mainMenuNav = document.getElementById('mainMenu');

$menuTriggerButton.addEventListener('click', () => {
    $mainMenuNav.classList.toggle('Active');
    $menuTriggerButton.classList.toggle('Active');
}, true);

let $triggerButton = document.getElementById('btnTrigger');
let $spanTrigger = document.getElementById('btnSpan');
let $rotate = document.getElementById('arrow');
$triggerButton.addEventListener('click', () => {
    $spanTrigger.classList.toggle('Active');
    $rotate.classList.toggle('Active');
},true);

let $triggerButton1 = document.getElementById('btnTrigger1');
let $spanTrigger1 = document.getElementById('btnSpan1');
let $rotate1 = document.getElementById('arrow1');
$triggerButton1.addEventListener('click', () => {
    $spanTrigger1.classList.toggle('Active');
    $rotate1.classList.toggle('Active');
},true);

let $triggerButton2 = document.getElementById('btnTrigger2');
let $spanTrigger2 = document.getElementById('btnSpan2');
let $rotate2 = document.getElementById('arrow2');
$triggerButton2.addEventListener('click', () => {
    $spanTrigger2.classList.toggle('Active');
    $rotate2.classList.toggle('Active');
},true);

let $triggerButton3 = document.getElementById('btnTrigger3');
let $spanTrigger3 = document.getElementById('btnSpan3');
let $rotate3 = document.getElementById('arrow3');
$triggerButton3.addEventListener('click', () => {
    $spanTrigger3.classList.toggle('Active');
    $rotate3.classList.toggle('Active');
},true);

let $triggerButton4 = document.getElementById('btnTrigger4');
let $spanTrigger4 = document.getElementById('btnSpan4');
let $rotate4 = document.getElementById('arrow4');
$triggerButton4.addEventListener('click', () => {
    $spanTrigger4.classList.toggle('Active');
    $rotate4.classList.toggle('Active');
},true);

let $triggerButton5 = document.getElementById('btnTrigger5');
let $spanTrigger5 = document.getElementById('btnSpan5');
let $rotate5 = document.getElementById('arrow5');
$triggerButton5.addEventListener('click', () => {
    $spanTrigger5.classList.toggle('Active');
    $rotate5.classList.toggle('Active');
},true);

// Search
let $search = document.getElementById('search');
let $searchInput = document.getElementById('searchInput');
$search.addEventListener('click', () =>{
    $search.classList.toggle('Active');
    $searchInput.classList.toggle('Active');
},true);

/*@@@@@@@@@@@@ instanțierea slider-ului  @@@@@@@@*/
let $previousSlideLink = document.getElementById('previousSlide');
let $nextSlideLink = document.getElementById('nextSlide');
let $sliderPickerList = document.getElementById('sliderPicker');
let currentSlide = 1;
let $sliderList = document.getElementById('sliderList');
let allSlides = $sliderList.childElementCount;

function selectSlide(position) {
	$sliderList.children[currentSlide - 1].classList.remove('Active');
	$sliderPickerList.children[currentSlide - 1].classList.remove('Active');
	currentSlide = position;
	$sliderList.children[currentSlide - 1].classList.add('Active');
	$sliderPickerList.children[currentSlide - 1].classList.add('Active');
}

$previousSlideLink.addEventListener('click', () => {
	let position = (currentSlide === 1) ? allSlides : (currentSlide - 1);
	selectSlide(position);
}, true);
$nextSlideLink.addEventListener('click', () => {
	let position = (currentSlide === allSlides) ? 1 : (currentSlide + 1);
	selectSlide(position);
}, true);
$sliderPickerList.querySelectorAll('.SliderPickerLink').forEach((el, index) => {
	el.addEventListener('click', () => {
		let position = index + 1;
		selectSlide(position);
	}, true);
});

let $toate = document.getElementById('toateMicrosoft');
let $articol = document.getElementById('showToate');
$toate.addEventListener('click', () => {
    $articol.classList.toggle('Active');
    $toate.classList.toggle('Active');
},true);
