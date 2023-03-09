"use strict";
const inputsection = document.querySelector("#input-section");
const company = document.querySelector("#company");
const lastname = document.querySelector("#lastname");
const firstname = document.querySelector("#firstname");
const title = document.querySelector("#title");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const printout = document.querySelector("#print-button");
const nollstall = document.querySelector("#nollstall-button");
const outputs = document.querySelector("#output");
const outputCompanyName = document.getElementById("out-company-name");
const outputFistname = document.querySelector("#out-first-name");
const outputTitle = document.querySelector("#out-title");
const outputEmail = document.querySelector("#out-email");
const outputPhone = document.querySelector("#out-phone");
const selectFonts = document.querySelector("#select-text-font");
const selectBackground = document.querySelector("#select-background");
const selectTextColor = document.querySelector("#select-text-color");

// Check if the inputes are empty

/*
        Author: Aman Arabzadeh 
        Course: Webbprogrammin lab 1
        Teachers : Mikael Hasselmalm och Jan-Erik Jonsson 
        Done
    */

function isEmpty() {
  if (
    company.value === "" ||
    lastname.value === "" ||
    firstname.value === "" ||
    title.value === "" ||
    phone.value === "" ||
    email.value === ""
  ) {
    return true;
  } else {
    return false;
  }
}

// Dom content has been loaded
window.addEventListener("DOMContentLoaded", () => {
  outputs.style.display = "none"; // hide the output

  printout.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isEmpty()) {
      inputsection.style.display = "none"; // hide page 1
      outputs.style.display = "block"; // Hide page2
      outputs.style.background = selectBackground.value;
      outputs.style.color = selectTextColor.value;
      outputs.style.fontFamily = selectFonts.value;

      // Output results
      outputCompanyName.innerHTML = company.value;
      outputFistname.innerHTML = `${firstname.value} ${lastname.value}`;
      outputTitle.innerHTML = title.value;
      outputPhone.innerHTML = phone.value ? `Tfn ${phone.value}` : "";
      outputEmail.innerHTML = email.value ? `E-post: ${email.value}` : "";
    } else {
      inputsection.style.display = "block"; // hide page 1
      alert`Please fill all inputs!`;
    }
  });
  outputs.addEventListener("click", function (e) {
    // Back to first page
    inputsection.style.display = "block"; // Hide div with name "page1"
    outputs.style.display = "none"; // Show div with name "page2"
  });
});

// Reset function

document.getElementById("reset-button").addEventListener("click", function (e) {
  e.preventDefault();
  //console.log("You clicked reset");
  document.getElementById("company").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("title").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("select-background").value = "lightblue";
  document.getElementById("select-text-color").value = "black";
  document.getElementById("select-text-font").value = "Verdana";
});
