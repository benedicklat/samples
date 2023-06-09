const { remote } = require('webdriverio');

async function runTest() {
  const browser = await remote({
    logLevel: 'error',
    capabilities: {
      browserName: 'chrome'
    }
  });

  await browser.url('https://benedicklat.github.io/samples/');

  const username = await browser.$('#username');
  await username.setValue('myusername');

  const password = await browser.$('#password');
  await password.setValue('mypassword');

  const submitButton = await browser.$('#submit');
  await submitButton.click();
}

runTest();


  


