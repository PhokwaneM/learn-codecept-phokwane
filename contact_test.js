Feature('contact');

Scenario('contact button', (I) => {
    I.amOnPage('https://www.dotmodus.com/');
    I.see('Contact Us');

});
