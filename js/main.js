
let recipyContainer = document.querySelector('.recipyContainer');
let recepyDetailsRow = document.querySelector('.recepyDetailsRow');
let recipySearchContainer = document.querySelector('.recipySearchContainer')

let seachInputs = document.querySelector('.seachInputs');
let seachByNameInput = document.querySelector('.seachByNameInput');
let seachByFirstLetterInput = document.querySelector('.seachByFirstLetterInput');
let oneLetterAlert = document.querySelector('#oneLetterAlert');

let searchLink = document.querySelector('.searchLink');
let categoryLink = document.querySelector('.categoryLink')
let ariaLink = document.querySelector('.ariaLink')
let ingredientsLink = document.querySelector('.ingredientsLink')
let contactUsLink = document.querySelector('.contactUsLink')
let menuIconDiv = document.querySelector('.menuIconDiv')

let contactUs = document.querySelector('.contactUs');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let age = document.querySelector('#age');
let password = document.querySelector('#password');
let repassword = document.querySelector('#repassword');
let nameAlert = document.querySelector('#nameAlert');
let emailAlert = document.querySelector('#emailAlert');
let phoneAlert = document.querySelector('#phoneAlert');
let ageAlert = document.querySelector('#ageAlert');
let passwordAlert = document.querySelector('#passwordAlert');
let repasswordAlert = document.querySelector('#repasswordAlert');
let submitBtn = document.querySelector('.submitBtn');


let sliderWidth = $('.sliderDiv').outerWidth();

// $('.loadingScreen').fadeOut(2500)
// $('.loadingScreen').fadeIn(2500)


function loading() {

    $(document).ready(function () {
        $('.loadingScreen').fadeOut(2000)

        // $('.loadingScreen').fadeOut(3000, function () {
        //     $(body).css('overflow', 'visible');
        // })

    })
}
loading();


// $('.sideBare a').click(function(e){
//     let clickedLink = e.target.getAttribute("clickedLink")
// //console.log(clickedLink);
//     if (clickedLink =='Search'){

//     }
// })

searchLink.addEventListener('click', function () {
     seachInputs.classList.remove('d-none')
     contactUs.classList.add('d-none')
     recipyContainer.innerHTML='';
     recepyDetailsRow.innerHTML='';
     recipySearchContainer.innerHTML='';
     closeBar();
})

categoryLink.addEventListener('click' , function(){
    seachInputs.classList.add('d-none')
    contactUs.classList.add('d-none')
    recepyDetailsRow.innerHTML='';
    recipySearchContainer.innerHTML='';
    closeBar();
    getAllCategoriesApi()
    
    
    
})

ariaLink.addEventListener('click' , function(){
    seachInputs.classList.add('d-none')
    contactUs.classList.add('d-none')
    recepyDetailsRow.innerHTML='';
    recipySearchContainer.innerHTML='';
    closeBar();
    getAllAriaesApi();
    
    
})

ingredientsLink.addEventListener('click' , function(){
    seachInputs.classList.add('d-none')
    contactUs.classList.add('d-none')
    recepyDetailsRow.innerHTML='';
    recipySearchContainer.innerHTML='';
    closeBar();
    getAllIngredientsApi();
  
    
})

contactUsLink.addEventListener('click' , function(){
    seachInputs.classList.add('d-none')
    contactUs.classList.remove('d-none')
    recepyDetailsRow.innerHTML='';
    recipySearchContainer.innerHTML='';
    recipyContainer.innerHTML='';
    closeBar();
})



name.addEventListener('keyup',function(){
    if (name.value != '') {
        checkNameValidation();
    }
    else {
        name.classList.remove('is-invalid');
        name.classList.remove('is-valid');
        nameAlert.classList.add('d-none');
    }
})

email.addEventListener('keyup',function(){
    if (email.value != '') {
        checkEmailValidation();
    }
    else {
        email.classList.remove('is-invalid');
        email.classList.remove('is-valid');
        emailAlert.classList.add('d-none');
    }
})

phone.addEventListener('keyup',function(){
    if (phone.value != '') {
        checkPhoneValidation();
    }
    else {
        phone.classList.remove('is-invalid');
        phone.classList.remove('is-valid');
        phoneAlert.classList.add('d-none');
    }
})

age.addEventListener('keyup',function(){
    if (age.value != '') {
        checkAgeValidation();
    }
    else {
        age.classList.remove('is-invalid');
        age.classList.remove('is-valid');
        ageAlert.classList.add('d-none');
    }
})

password.addEventListener('keyup',function(){
    if (password.value != '') {
        checkPasswordValidation();
    }
    else {
        password.classList.remove('is-invalid');
        password.classList.remove('is-valid');
        passwordAlert.classList.add('d-none');
    }
})

repassword.addEventListener('keyup',function(){
    if (repassword.value != '') {
        checkRePasswordValidation();
    }
    else {
        repassword.classList.remove('is-invalid');
        repassword.classList.remove('is-valid');
        repasswordAlert.classList.add('d-none');
    }
})

let egeValidation =false
let emailValidation=false
let nameValidation =false
let passwordValidation =false
let phoneValidation =false
let rePasswordValidation=false 

function checkNameValidation(){

if(/^[a-zA-Z ]+$/.test(name.value)){

    nameAlert.classList.add('d-none');
    name.classList.remove('is-invalid')
    name.classList.add('is-valid')
   
    nameValidation= true;
}
else{
    nameAlert.classList.remove('d-none');
    name.classList.add('is-invalid')
    name.classList.remove('is-valid')

    nameValidation = false;
}
btnValidation()
}

function checkEmailValidation(){
 
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        emailAlert.classList.add('d-none');
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
       
        emailValidation = true;
    }
    else{
        emailAlert.classList.remove('d-none');
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    
        emailValidation = false;
    }
    btnValidation()
}

function checkAgeValidation(){
    if(/^[1-9][0-9]?$|^100$/.test(age.value)){
        ageAlert.classList.add('d-none');
        age.classList.remove('is-invalid')
        age.classList.add('is-valid')
       
        egeValidation = true;
    }
    else{
        ageAlert.classList.remove('d-none');
        age.classList.add('is-invalid')
        age.classList.remove('is-valid')
    
        egeValidation = false;
    }
    btnValidation()
}

function checkPhoneValidation(){
    if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.value)){
        phoneAlert.classList.add('d-none');
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
       
        phoneValidation = true;
    }
    else{
        phoneAlert.classList.remove('d-none');
        phone.classList.add('is-invalid')
        phone.classList.remove('is-valid')
    
        phoneValidation = false;
    }
    btnValidation()
}

function checkPasswordValidation(){
    if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)){
        passwordAlert.classList.add('d-none');
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
       
        passwordValidation = true;
    }
    else{
        passwordAlert.classList.remove('d-none');
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
    
        passwordValidation = false;
    }
    btnValidation()
}

function checkRePasswordValidation(){
    if(password.value===repassword.value){
        repasswordAlert.classList.add('d-none');
        repassword.classList.remove('is-invalid')
        repassword.classList.add('is-valid')
       
        rePasswordValidation = true;
    }
    else{
        repasswordAlert.classList.remove('d-none');
        repassword.classList.add('is-invalid')
        repassword.classList.remove('is-valid')
    
        rePasswordValidation = false;
    }
    btnValidation()
}

function btnValidation(){

    if(egeValidation && emailValidation && nameValidation && passwordValidation && phoneValidation && rePasswordValidation){
        submitBtn.removeAttribute('disabled')
        console.log('true');
        }
          else{
            submitBtn.setAttribute('disabled' , 'true')
            console.log('false');
        }
}
  
function closeBar() {
    $('.sliderDiv').animate({ 'left': -sliderWidth }, 1500);
    $('.fixedDiv').animate({ 'left': 0 }, 1500);
    $(".menuIcon").addClass("fa-bars").removeClass("fa-xmark")

}

// function startCloseBar() {
//     $('.sliderDiv').css('left' ,-sliderWidth ) ;
//     $('.fixedDiv').css('left' , 0);
//     $(".menuIcon").addClass("fa-bars").removeClass("fa-xmark")

// }

// startCloseBar();

(function(){
    $('.sliderDiv').css('left' ,-sliderWidth ) ;
    $('.fixedDiv').css('left' , 0);
    $(".menuIcon").addClass("fa-bars").removeClass("fa-xmark")
})()




menuIconDiv.addEventListener('click', function () {


    $(".menuIcon").toggleClass("fa-bars").toggleClass("fa-xmark")

    if ($('.sliderDiv').css('left') == '0px') {

        $('.sliderDiv').animate({ 'left': -sliderWidth }, 1500)

        $('.fixedDiv').animate({ 'left': 0 }, 1500)

        $('.contactUsLink').animate({ 'margin-top': '100px' }, 100).animate({ opacity: .1 }, 100, function () {
            $('.ingredientsLink').animate({ 'margin-top': '100px' }, 100).animate({ opacity: .1 }, 100, function () {
                $('.ariaLink').animate({ 'margin-top': '100px' }, 100).animate({ opacity: .1 }, 100, function () {
                    $('.categoryLink').animate({ 'margin-top': '100px' }, 100).animate({ opacity: .1 }, 100, function () {
                        $('.searchLink').animate({ 'margin-top': '100px' }, 100).animate({ opacity: .1 }, 100, function () {


                        })
                    })
                })
            })
        })


    }
    else {
        $('.sliderDiv').animate({ 'left': 0 }, 1000)

        $('.fixedDiv').animate({ 'left': '200px' }, 1000)


        $('.searchLink').animate({ 'margin-top': '0px' }, 300).animate({ opacity: 1 }, 100, function () {
            $('.categoryLink').animate({ 'margin-top': '0px' }, 300).animate({ opacity: 1 }, 100, function () {
                $('.ariaLink').animate({ 'margin-top': '0px' }, 300).animate({ opacity: 1 }, 100, function () {
                    $('.ingredientsLink').animate({ 'margin-top': '0px' }, 300).animate({ opacity: 1 }, 100, function () {
                        $('.contactUsLink').animate({ 'margin-top': '0px' }, 300).animate({ opacity: 1 }, 100, function () {

                        })
                    })
                })
            })
        })


    }

})

let recipies = [];

(async function(){

    $('.recepyDetails').fadeOut(200)
    $('.loadingScreen').fadeIn(100)

    let myRecipy = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;
        desplayStartRecipy(meals)
        // console.log(meals, recipies);
         console.log(meals[11].idMeal);
        $('.loadingScreen').fadeOut(500)
        
    }
}) () 
   

// getStartRecipyApi();


function desplayStartRecipy(meals) {
    let divs = '';

    for (let i = 0; i < meals.length; i++) {


        divs += `<div class="col-md-6 col-lg-3" >
        <div class="recipy-present rounded">
          <img src="${meals[i].strMealThumb}" class="w-100 rounded">
          <div onclick="getRecipyDetailsApi('${meals[i].idMeal}')" class="layer rounded">
            <div class="p-3 fs-3">${meals[i].strMeal}</div>
          </div>
        </div>
      </div>`

    }
    recipyContainer.innerHTML = divs
    // console.log(recipyContainer);

}

async function getRecipyDetailsApi(id) {
    recipyContainer.innerHTML='';
   
     $('.recepyDetails').fadeIn(200)
   
    $('.loadingScreen').fadeIn(100)

    //  closeBar();
    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        desplaySpiceficRecipy(meals)
        console.log(meals);
        console.log(meals[0].strMealThumb);
        $('.loadingScreen').fadeOut(500)

    }

}

function desplaySpiceficRecipy(meals) {
    let recipyDivs = '';
    let tagsDivs = '';
    let tagsArr = '';


    for (let i = 1; i < 20; i++) {

        if (meals[0][`strIngredient${i}`]) {
            recipyDivs += `<div class="bg-light text-dark rounded p-2 mb-4 me-2">${meals[0][`strMeasure${i}`]} ${meals[0][`strIngredient${i}`]}</div>`
            //  recipyDivs +='<div class="bg-light text-dark rounded p-2 mb-4 me-2">' + meals.strMeasure+i + meals.strIngredient+i+'</div>'
        }
    }

    if (meals[0].strTags) {
        tagsArr = meals[0].strTags.split(',')
        for (let i = 0; i < tagsArr.length; i++) {

            tagsDivs += ` <div class="bg-light text-danger rounded p-2 m-1 mb-5">${tagsArr[i]}</div>`

        }
    }
    else{
        tagsDivs =` <div class="bg-light text-danger rounded p-2 m-1 mb-5">general </div>`; 
    }
    console.log(recipyDivs);
    console.log(tagsDivs);
    console.log(tagsArr);


    
     
    let divs = `<div class="col-md-4">
     <div class="">
       <img src="${meals[0].strMealThumb}" class="w-100">

       <div class=" fs-1 text-center text-white">${meals[0].strMeal}</div>

     </div>
   </div>
   <div class="col-md-8">
     <div class="text-white">
       <div class=" fs-1 ">Instructions</div>
       <p>${meals[0].strInstructions}</p>
       <div class="mb-2 mt-5"><span class="fw-bold">Area :  </span>${meals[0].strArea}</div>
       <div class="mb-5"><span class="fw-bold">Category :  </span>${meals[0].strCategory}</div>
       <div class="fs-2 mb-3">Recipes : </div>

      <div class="d-flex flex-wrap" id='recipy'>
     
        <div class="bg-light text-dark rounded p-2 mb-4 me-2">${meals[0][`strMeasure1`]} ${meals[0][`strIngredient1`]}</div>
        
      </div>
       <div class="fs-2 mb-3">Tags : </div>

       <div class="d-flex" id='tags'>

         <div class="bg-light text-danger rounded p-2 mb-5 me-2">${meals[0].strTags}</div>

       </div>

       <a class="btn btn-info text-white" target="_blank" href="${meals[0].strSource}">Source</a>
       <a class="btn btn-danger text-white" target="_blank" href="${meals[0].strYoutube}">Youtub</a>
      
     </div>
   </div>
`
    recepyDetailsRow.innerHTML = divs
    $('#recipy').html(recipyDivs);//by jquery becouse id will created in the code not in html
    $('#tags').html(tagsDivs);
    //  recipy.innerHTML =recipyDivs
    // tags.innerHTML = tagsDivs
    // console.log(recepyDetailsRow);
}

//search
function desplaySearchRecipy(meals) {
    let divs = '';

    for (let i = 0; i < meals.length; i++) {


        divs += `<div class="col-md-6 col-lg-3" >
        <div class="recipy-present rounded">
          <img src="${meals[i].strMealThumb}" class="w-100 rounded">
          <div onclick="getRecipyDetailsApi(${meals[i].idMeal} )" class="layer rounded">
            <div class="p-3 fs-3">${meals[i].strMeal}</div>
          </div>
        </div>
      </div>`

    }
    recipySearchContainer.innerHTML = divs
    // console.log(recipyContainer);

}

async function getSearchByNameRecipyDetailsApi(name) {
   // $('.loadingScreen').fadeIn(100)
    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        desplaySearchRecipy(meals);
        console.log(meals);
        console.log(meals[0].strMealThumb);
       // $('.loadingScreen').fadeOut(500)
        
    }

}

async function getSearchByFirstLetterRecipyDetailsApi(letter) {
   
    // $('.loadingScreen').fadeIn(100)
    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        desplaySearchRecipy(meals);
        console.log(meals);
        console.log(meals[0].strMealThumb);
        // $('.loadingScreen').fadeOut(500)
    }

}
seachByFirstLetterInput.addEventListener('keyup', function () {
   let letter = seachByFirstLetterInput.value.length
   console.log(letter);
   if (letter ==1 || letter ==0){
    oneLetterAlert.classList.add('d-none')
    getSearchByFirstLetterRecipyDetailsApi(seachByFirstLetterInput.value)
   }
  else{
      oneLetterAlert.classList.remove('d-none')
  }
    
})

// $('.seachByFirstLetterInput').keyup(function () {
//     console.log('letter1');
//     getSearchByFirstLetterRecipyDetailsApi(seachByFirstLetterInput.value)
//     console.log('letter');
// })

seachByNameInput.addEventListener('keyup', function () {
    getSearchByNameRecipyDetailsApi(seachByNameInput.value)
})

//category

async function getAllCategoriesApi() {
     $('.loadingScreen').fadeIn(100)
    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { categories } = recipies;

        displayAllCategories(categories);
        console.log(categories);
        console.log(categories[0].strCategory);
         $('.loadingScreen').fadeOut(500)
    }

}


function displayAllCategories(categories) {
    let divs = '';

    for (let i = 0; i < categories.length; i++) {

      divs += `<div class="col-md-6 col-lg-3" >
      <div class="recipy-present rounded">
        <img src="${categories[i].strCategoryThumb}" class="w-100 rounded">
        <div onclick="getCategoryRecipiesDetailsApi('${categories[i].strCategory}')" class="layer rounded ">
          <div class="text-center m-auto">
            <div class=" fs-2">${categories[i].strCategory}</div>
            <div class=" fs-5">${categories[i].strCategoryDescription}</div>
          </div>
        </div>
      </div>
    </div>`

    }
    recipyContainer.innerHTML = divs
    
    // ${categories[i].strCategory}
    // ${categoryName}
}

async function getCategoryRecipiesDetailsApi(categoryName){
   $('.loadingScreen').fadeIn(100)
   $('.allCategories').fadeOut(500)

    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        // getRecipyDetailsApi(meals.idMeal);
        desplayCategoryRecipy(meals)
        console.log(meals);
        console.log(meals[0].strMealThumb);
         $('.loadingScreen').fadeOut(500)

    }
 }

 function desplayCategoryRecipy(meals) {

    let divs = '';

    for (let i = 0; i < meals.length; i++) {


        divs += `<div class="col-md-6 col-lg-3" >
        <div class="recipy-present rounded">
          <img src="${meals[i].strMealThumb}" class="w-100 rounded">
          <div onclick="getRecipyDetailsApi('${meals[i].idMeal}')" class="layer rounded">
            <div class="p-3 fs-3">${meals[i].strMeal}</div>
          </div>
        </div>
      </div>`

    }
    recipyContainer.innerHTML = divs
    // console.log(recipyContainer);

}


//Aria

async function getAllAriaesApi() {
     $('.loadingScreen').fadeIn(100)
    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    console.log(myRecipy);

    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        displayAllAriaes(meals);
        console.log(meals);
        console.log(meals[0].strArea);
         $('.loadingScreen').fadeOut(500)
    }

}


function  displayAllAriaes(meals) {
    let divs = '';

    for (let i = 0; i < meals.length; i++) {

      divs += `<div class="col-md-6 col-lg-3 " >
      <div onclick="getAriaRecipiesDetailsApi('${meals[i].strArea}')" class="rounded text-center  shadow-lg  aria">
            <i class="fa-solid fa-city fa-3x text-danger"></i>
            <div class=" fs-2 text-white">${meals[i].strArea}</div>
      </div>
    </div>`

    }
    recipyContainer.innerHTML = divs
    
    // ${meals[i].strArea}
    // ${ariaName}
}

async function getAriaRecipiesDetailsApi(ariaName){
     $('.loadingScreen').fadeIn(100)
   $('.allAriaes').fadeOut(500)

    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ariaName}`);
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        // getRecipyDetailsApi(meals.idMeal);
        desplayAriaRecipy(meals)
        console.log(meals);
        console.log(meals[0].strMealThumb);
         $('.loadingScreen').fadeOut(500)
    }
 }

 function desplayAriaRecipy(meals) {

    let divs = '';

    for (let i = 0; i < meals.length; i++) {


        divs += `<div class="col-md-6 col-lg-3" >
        <div class="recipy-present rounded">
          <img src="${meals[i].strMealThumb}" class="w-100 rounded">
          <div onclick="getRecipyDetailsApi('${meals[i].idMeal}')" class="layer rounded">
            <div class="p-3 fs-3">${meals[i].strMeal}</div>
          </div>
        </div>
      </div>`

    }
    recipyContainer.innerHTML = divs
    // console.log(recipyContainer);

}


//ingredient

async function getAllIngredientsApi() {
     $('.loadingScreen').fadeIn(100)
    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    console.log(myRecipy);

    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        displayAllIngredients(meals);
        console.log(meals);
        console.log(meals[0].strDescription.split(' ').splice(0,2).join(' '));
         $('.loadingScreen').fadeOut(500)
    }

}


function  displayAllIngredients(meals) {

     let divs = '';
     let sMeals= meals.splice(0,20)//use to reduce number of ingredients 
    let desc=''
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].strDescription){
             desc = meals[i].strDescription.split(' ').splice(0,10).join(' ');
        }
        else{
            desc = '';
        }
      divs += `<div class="col-md-6 col-lg-3" >
      <div onclick="getIngredientRecipiesDetailsApi('${meals[i].strIngredient}')" class="rounded text-center shadow-lg  ingr">
           
            <i class="fa-solid fa-bowl-food fa-3x text-success"></i>
            <div class=" fs-3 text-white">${meals[i].strIngredient}</div>
            <p class=" fs-6 text-white">${desc}</p>
      </div>
    </div>
`

    }
    recipyContainer.innerHTML = divs
    
    // ${meals[i].strArea}
    // ${ariaName}
}

async function getIngredientRecipiesDetailsApi(ingredientName){
     $('.loadingScreen').fadeIn(100)
   $('.allIngredients').fadeOut(500)

    let myRecipy = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
    console.log(myRecipy);
    if (myRecipy.ok && myRecipy.status == 200) {

        recipies = await myRecipy.json();

        let { meals } = recipies;

        // getRecipyDetailsApi(meals.idMeal);
        desplayIngredientRecipy(meals)
        console.log(meals);
        console.log(meals[0].strMealThumb);
         $('.loadingScreen').fadeOut(500)

    }
 }

 function desplayIngredientRecipy(meals) {

    let divs = '';

    for (let i = 0; i < meals.length; i++) {


        divs += `<div class="col-md-6 col-lg-3" >
        <div class="recipy-present rounded">
          <img src="${meals[i].strMealThumb}" class="w-100 rounded">
          <div onclick="getRecipyDetailsApi('${meals[i].idMeal}')" class="layer rounded">
            <div class="p-3 fs-3">${meals[i].strMeal}</div>
          </div>
        </div>
      </div>`

    }
    recipyContainer.innerHTML = divs
    // console.log(recipyContainer);

}

