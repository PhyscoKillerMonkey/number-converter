const inputs = document.getElementsByTagName("input");

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