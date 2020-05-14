let EC = protractor.ExpectedConditions;

let TIMEOUT_SETTING = 10000;

describe('Spec | App E2E Test', function () {

    beforeAll(async function () {
        await browser.get(browser.baseUrl);
        await browser.waitForReact(300000);
    });

    it ('should find the sample header', async function () {
       const headerText = await element(by.react(
            'Typography',
           {
               id: 'SampleTypography'
           }
       ));
       await browser.wait(EC.presenceOf(headerText), TIMEOUT_SETTING);
       expect(await headerText.getText()).toMatch('This is a sample header');
    });

});
