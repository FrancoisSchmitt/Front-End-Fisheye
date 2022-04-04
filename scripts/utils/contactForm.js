const modalOpen = document.getElementById("contact_modal");
const modalClose = document.getElementById("contact_modal");


function openModal() {
    modalOpen.style.display = "block";
}

function closeModal() {
    modalClose.style.display = "none";
}



// DOM
const firstname = document.forms["contactMe"]["name"];
const lastname = document.forms["contactMe"]["lastname"];
const email = document.forms["contactMe"]["email"];
const birthdate = document.forms["contactMe"]["message"];
const formData = document.querySelectorAll(".formData");


// DOM event form
const eventForm = document.querySelector("form");

// regex
const regexName = /^[a-zA-Z ]+$/;
const regexNumb = /^[0-9]+$/;
const validRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// Event on submit Form 
eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

function validate() {

    let errors = 0;
    // lastname check

    if (firstname.value.length >= 2 && firstname.value.match(regexName)) {
        formData[0].setAttribute("data-success-visible", true);
        formData[0].setAttribute("data-error-visible", false);
        console.log(`Validate`);
    }
    else {
        formData[0].setAttribute("data-error-visible", true);
        formData[0].setAttribute("data-error", `Veuillez entrer 2 caractères ou plus pour le champ du prénom.`);
        console.log(`Not Validate`);
        errors++;
    }

    // name check

    if (lastname.value.length >= 2 && lastname.value.match(regexName)) {
        formData[1].setAttribute("data-error-visible", false);
        console.log(`Validate`);
    }
    else {
        formData[1].setAttribute("data-error-visible", true);
        formData[1].setAttribute("data-error", `Veuillez entrer 2 caractères ou plus pour le champ du nom.`);
        console.log(`Not Validate`);
        errors++;
    }

    // email check

    if (email.value.match(validRegexEmail)) {
        formData[2].setAttribute("data-error-visible", false);
        console.log(`Validate`);
    }
    else {
        formData[2].setAttribute("data-error-visible", true);
        formData[2].setAttribute("data-error", `Votre email n'est pas valide. exemple : email@to.me`);
        console.log(`Not Validate`);
        errors++;
    }

    // message check

    if (message.value.length >= 10 || message.value.length > 300) {
        formData[3].setAttribute("data-error-visible", false);
        console.log(`Validate`);
    }
    else {
        formData[3].setAttribute("data-error-visible", true);
        formData[3].setAttribute("data-error", `Vous devez entrer un message d'au moins 10 caractère.`);
        console.log(`Not Validate`);
        errors++;
    }


    if (errors == 0) {
        console.log("true");
        console.log("Votre nom est : " + lastname.value);
        console.log("Votre nom de famille est : " + firstname.value);
        console.log("Votre email est : " + email.value);
        console.log("Votre message est : " + message.value);
        document.querySelector("form").reset();
    }
    else {
        return false;
    }
};


