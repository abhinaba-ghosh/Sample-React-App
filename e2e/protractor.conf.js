const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    getPageTimeout: 300000000,
    specs: [
        './src/*.e2e-spec.ts'
    ],
    capabilities: {
        build: 'Sample-Website',
        name: 'Sample-Website End-to-End Tests',
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1024,768']
        },
    },
    baseUrl: 'http://localhost:3000/',
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 3000000
    },
    plugins: [
        {
            inline: require('protractor-react-selector')
        },
        {
            inline: require('protractor-testability-plugin')
        }
    ],
    onPrepare: async() => {
        await browser.driver.get('http://localhost:3000');
        await browser.waitForReact(400000);
        await jasmine.getEnv().addReporter(new SpecReporter({ spec: {displayStackTrace: true }}));
    }
};
