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
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const age = parseInt(document.getElementById("age").value)

  // process
  const math = a
  // output
  document.getElementById("math").innerHTML = "Numbers: " + math + " units"
}

/**
 * This function displays an alert.
 * Words
 */
function button() {
  document.getElementById("words").innerHTML = "<p>Hello, World!</p>"
}
