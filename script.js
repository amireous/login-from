"use strict";

const container = document.querySelector(".container");
const LoginTitle = document.querySelector(".login-header");
const signupTitle = document.querySelector(".signup-header");
const loginSection = document.querySelector(".login-section");
const signupSection = document.querySelector(".signup-section");
const sectionSlider = document.querySelector(".background-header");
const signForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");

const signReminder = document.querySelector(".sign-reminder");
const Loginbtn = document.querySelector(".btn");
const userMail = document.getElementById("email-login");
const userPass = document.getElementById("pass-login");
const closeModal = document.querySelectorAll(".close-modal");

const image = document.querySelector("img");

signupSection.addEventListener("click", function () {
  loginSection.classList.add("reset-colors");
  signupSection.classList.remove("reset-colors");
  sectionSlider.classList.add("change-section");
  loginForm.classList.add("hidden");
  signForm.classList.remove("hidden");
  LoginTitle.classList.add("hidden");
  signupTitle.classList.remove("hidden");
  signReminder.classList.add("hidden");
});

loginSection.addEventListener("click", function () {
  signupSection.classList.add("reset-colors");
  loginSection.classList.remove("reset-colors");
  sectionSlider.classList.remove("change-section");
  loginForm.classList.remove("hidden");
  signForm.classList.add("hidden");
  LoginTitle.classList.remove("hidden");
  signupTitle.classList.add("hidden");
  signReminder.classList.remove("hidden");
});

const userInformaton = [];

Loginbtn.addEventListener("click", function (event) {
  event.preventDefault(); // to stop the form submittig

  let userInfo = {
    email: userMail.value,
    password: userPass.value,
  };
  userInformaton.push(userInfo);
  document.querySelector("form").reset();
  console.log(userInformaton);

  if (userInfo.email == "shahinkoonde@hasti.com" && userInfo.password == 8585) {
    container.classList.add("blur");
    image.classList.remove("hidden");
    closeModal.classList.remove("hidden");
  }
});

closeModal.addEventListener("click", function () {
  image.classList.add("hidden");
  container.classList.remove("hidden");
});
