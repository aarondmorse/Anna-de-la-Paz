function include(url,id) {
  var req = false;
  // For Safari, Firefox, and other non-MS browsers
  if (window.XMLHttpRequest) {
    try {
      req = new XMLHttpRequest();
    } catch (e) {
      req = false;
    }
  } else if (window.ActiveXObject) {
    // For Internet Explorer on Windows
    try {
      req = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        req = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        req = false;
      }
    }
  }
  if (req) {
    // send out the response
    req.open('GET', url, false); req.send(null);
    // if the optional 'id' element is present, insert returned text into it, otherwise write to the page wherever it was called
    document.getElementById(id) ? document.getElementById(id).innerHTML = req.responseText : document.write(req.responseText);
  } else {
    document.write('This browser does not support XMLHTTPRequest objects which are required for this page to work');
  }
}

