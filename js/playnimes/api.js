const HOST = ''

function api(path, callback) {
  fetch(`http://${HOST}/${path}`)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch(console.error)
}

