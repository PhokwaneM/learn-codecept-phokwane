Feature('contact');

Scenario('contact button', (I) => {
    I.amOnPage('https://www.dotmodus.com/');
    I.amOnPage('/about');
    I.click('Schedule a session');
    I.fillField('First Name', 'Phokwane');
    I.fillField('Surname', 'Malebye');
    I.fillField('Email', 'phokwane@dotmodus.com');
    I.fillField('Contact Number', '1234567890');
    I.fillField('Company', 'Dotmodus');
    I.click('Submit');


});
