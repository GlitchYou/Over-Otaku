const HOST = '152.44.32.124';
const TOKEN  = 'VERoNS9wOXh2U0BiNlRZaExbZFBgL3gkJXBYd3Yk';
const KEY = '1p4vo5hz1592mvvy';


function httpRequest(url, headers = {}, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);

  Object.keys(headers).forEach((key) => {
    xhttp.setRequestHeader(key, headers[key]);
  })

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.response))
    }
  }

  xhttp.send();
}

function api(path, callback = console.log) {
  const headers = {
    'Authorization': TOKEN,
    'Accept': 'application/json',
  }
  return httpRequest(`http://${HOST}${path}`, headers, callback);
}

