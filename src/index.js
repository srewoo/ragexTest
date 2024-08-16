// src/index.js

const config = require('./config');
const fileHandler = require('./fileHandler');
const validator = require('./validator');

const main = () => {
    const urls = fileHandler.readFile(config.inputFilePath);
    if (urls.length === 0) {
        console.log('No URLs found in the input file.');
        return;
    }

    const results = validator.generateResults(urls, config.regexPatterns);
    const resultsCSV = validator.formatResultsCSV(results);
    fileHandler.writeFile(config.outputFilePath, resultsCSV);

    console.log(`Validation complete. Results written to ${config.outputFilePath}`);
};

main();
