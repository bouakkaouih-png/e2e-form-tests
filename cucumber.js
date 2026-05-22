module.exports = {
  default: {
    require: [
      'steps/**/*.ts',
      'support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: ['progress',
      "html:reports/cucumber-report.html",
      "json:reports/cucumber.json"
    ],
    paths: ["features/**/*.feature"],
    publishQuiet: true,
    timeout: 60000
  }
};