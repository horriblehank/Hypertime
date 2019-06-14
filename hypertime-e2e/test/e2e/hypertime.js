var config = require('../../nightwatch.conf.BASIC.js');
const ENTER = "\uE007"
module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://hypertimehenrik.z16.web.core.windows.net/')
      .waitForElementVisible('body')
      .assert.title('Hypertime')
      .setValue("#username", "horriblehank")
      .keys(ENTER)
      .saveScreenshot('hypertime.png')
      //.pause(10000)
      .end()
      .pause();
  }
};