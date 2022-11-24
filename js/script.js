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

function calculate() {
  let inputedAge = age

  if (inputedAge >= 17) {
    //code
  } else if (inputedAge >= 13) {
    //code
  } else if (inputedAge <= 12) {
    //code
  } else {
    document.getElementById("number-value").innerHTML =
      "Value is: " + randomNumber
  }

}

/**
 * This function displays an alert.
 * Math
 */
//function calculate() {
  // input
  const age = parseInt(document.getElementById("age").value)
  const b = parseInt(document.getElementById("b").value)

  // process
  const math = age + b
  // output
  document.getElementById("math").innerHTML = "Numbers: " + math + " units"
//}
