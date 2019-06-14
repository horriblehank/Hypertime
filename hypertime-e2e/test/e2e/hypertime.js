var config = require('../../nightwatch.conf.BASIC.js');
const ENTER = "\uE007"
module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('http://henriklofqvist.com/ajax')
      .waitForElementVisible('body')
      .assert.title('Stanley Cup winners')
      //.setValue("#username", "horriblehank")
      //.keys(ENTER)
      //.saveScreenshot('hypertime.png')
      .assert.containsText("#placeholder > div > h1", "Choose a season above and find out which team won the Stanley Cup that year!")
      
      .click("#y2012")
      .pause(2000)
      .click("#y2000")
      .pause()
      .end();
  }
};