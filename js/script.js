window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

//adding a new object of years
let age = {0:"2003", 1:'2002', 2:'2001', 3:'2000', 4:'1999', 5:'1998', 6:'1997', 7:'1996', 8:'1995', 9:'1994', 10:'1993', 11:'1992', 12:'1991', 13:'1990', 14:'1989', 15:'1888', 16:'1887', 17:'1886'};

Object.entries(age).forEach(([key, value]) => {
    $(`<li class="select__list-item">${value}</li>`).appendTo("ul#select__list");
});

//selecting date of birth
const dropDownBtn = document.querySelector('.select__input');
      dropDownList =document.querySelector('.select__list');
      dropDownListItems = dropDownList.querySelectorAll('.select__list-item');
      dropDownInput = document.querySelector('.select__input_hidden');
      changeIcon = document.querySelector('.select__input_icon');

dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('select__list--visible');
    changeIcon.classList.toggle('.select__input_icon--active');
});


dropDownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = dropDownBtn.innerText; 
        dropDownList.classList.remove('select__list--visible');
    });
});

document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.select__input')) {
        dropDownList.classList.remove('select__list--visible'); 

    }
});

document.addEventListener('keydown', function (e) {
    dropDownList.classList.remove('select__list--visible');
});

//slider range
$(function(){
	$('#slider').slider({
        animate: "slow",
        range: "min",
		min: 0,
		max: 100,
		value: 0,
		slide: function(event, ui){
			$('#val').val(ui.value);
		}
	});
});

//Modal
$('.modal__close').on('click', function() {
    $('.overlay, #thanks, #order').fadeOut('slow');
});


validateForms('#personal-info-form');

//Send questionnaire form
$('form').submit(function(e) {
    e.preventDefault();

    if ($(this).valid()) {   

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",  //php file
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('fast');
            $('form').trigger('reset');
        });
    }
    return false;
});