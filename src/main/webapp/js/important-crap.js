function loadContent() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
      if (xmlhttp.status == 200) {
        // Load the crap
      }
    }
  };

  xmlhttp.open("GET", "important-crap.txt", true);
  xmlhttp.send();
}
