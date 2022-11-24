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
  let inputedAge = document.getElementById("age").value

  if (inputedAge >= 17) {
    document.getElementById("answer").innerHTML = "G, Pg13 and R"
  } else if (inputedAge >= 13) {
    document.getElementById("answer").innerHTML = "G and Pg13"
  } else if (inputedAge <= 12) {
    document.getElementById("answer").innerHTML = "G"
  } else {
    document.getElementById("answer").innerHTML = "Error"
  }
}
