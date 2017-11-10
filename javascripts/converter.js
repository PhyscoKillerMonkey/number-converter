const inputs = document.getElementsByTagName("input");

const otherChars = ["Delete", "Backspace", "ArrowLeft", "ArrowRight", "Home", "End"];
const numChars = otherChars.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
const hexChars = numChars.concat(["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
const binChars = otherChars.concat(["0", "1"]);

for (el of inputs) {
  el.oninput = function() {

    let value = this.value;

    if (value != "") {
      switch(this.id) {
        case "bin":
          value = parseInt(value, 2);
          break;
        case "hex":
          value = parseInt(value, 16);
          break;
      }
  
      for (el of inputs) {
        if (this != el) {
          switch(el.id) {
            case "int":
              el.value = (+value).toString(10);
              break;
            case "bin":
              el.value = (+value).toString(2);
              break;
            case "hex":
              el.value = (+value).toString(16).toUpperCase();
              break;
          }
        }
      }
    } else {
      for (el of inputs) {
        el.value = value;
      }
    }
  }
}

// string.includes() polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}