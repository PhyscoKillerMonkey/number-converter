const inputs = document.getElementsByTagName("input");

const otherChars = ["Delete", "Backspace", "ArrowLeft", "ArrowRight", "Home", "End"];
const numChars = otherChars.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
const hexChars = numChars.concat(["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
const binChars = otherChars.concat(["0", "1"]);

// Iterate all <input> elements
for (let i = 0; i < inputs.length; i++) {
  let el = inputs[i];

  // When the <input> receives any input (typing & copy/paste)
  el.oninput = function(event) {

    if (this.value == "") {
      for (let j = 0; j < inputs.length; j++) {
        inputs[j].value = "";
      }

    } else {
      // Parse the value of the changed <input> to base 10
      switch(this.id) {
        case "int":
          value = parseInt(this.value, 10);
          break;
        case "bin":
          value = parseInt(this.value, 2);
          break;
        case "hex":
          value = parseInt(this.value, 16);
          break;
      }
    
      // Convert to other bases and put into other inputs
      for (let j = 0; j < inputs.length; j++) {
        let el2 = inputs[j];
        if (el2 != el) {
          switch(el2.id) {
            case "int":
              el2.value = value.toString(10);
              break;
            case "bin":
              el2.value = value.toString(2);
              break;
            case "hex":
              el2.value = value.toString(16).toUpperCase();
              break;
          }
        }
      }
    }
  }
}