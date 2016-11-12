var update = document.getElementById('update')
var del = document.getElementById('delete')

//on click update quotes
update.addEventListener('click', function () {
	//trigger a PUT request (update request) using fetch API
	//first parameter is path, which is defined in server file
	//second parameter is options object
	fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  }).then(function (response) {
    window.location.reload()
  })
})

//onclick delete quote
del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Darth Vader'
    })
  }).then(function (response) {
    window.location.reload()
  })
})