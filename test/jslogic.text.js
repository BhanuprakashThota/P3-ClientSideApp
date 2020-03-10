QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST Meters', assert => {
  assert.equal(meter(100), 160934, 'miles to meters')
  assert.equal(meter(-50), -80467, 'Negative meters') 
  assert.equal(meter(56.7), 91249.578, 'Decimal Conversion')
  assert.equal(meter(-56.7), -91249.578, 'Negative Decimal Conversion') 
  assert.equal(meter(10), 16093.4, 'miles to meters')
   
})

QUnit.config.autostart = false 


window.addEventListener('load', () => {
    const appURL = '../index.html' // reach out to the html for the app (js-gui)
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>' // go grab it!
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {                
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end) // we only want part of the page
        const qunitFixtureBody = document.querySelector('#qunit-fixture')
        qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
        console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
        QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })
