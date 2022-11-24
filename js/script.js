// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-05-03/sw.js", {
    scope: "/ICS2OR-Unit-05-03/",
  })
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  let inputedAge = document.getElementById("age").checked

  if (inputedAge >= 17) {
    document.getElementById("number-value").innerHTML =
      "Value is: 1" + randomNumber
  } else if (inputedAge >= 13) {
    document.getElementById("number-value").innerHTML =
      "Value is: 2" + randomNumber
  } else if (inputedAge <= 12) {
    document.getElementById("number-value").innerHTML =
      "Value is: 3" + randomNumber
  } else {
    document.getElementById("number-value").innerHTML =
      "Value is: 4" + randomNumber
  }
}
