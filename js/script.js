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
    document.write = "G, Pg13 and R"
  } else if (inputedAge >= 13) {
    document.write = "G and Pg13"
  } else if (inputedAge <= 12) {
    document.write = "G"
  } else {
    document.write = "Error"
  }
}
