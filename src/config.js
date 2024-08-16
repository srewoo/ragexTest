// src/config.js

const config = {
    regexPatterns: {
        MEET: /(?:https?:\/\/)?meet\.google\.com\/[0-9A-Za-z-]+(\?[a-zA-Z0-9.:\/=_?&\-%]+)?(?<!_)/,
        TEAMS: /(?:https?:\/\/)?teams\.microsoft\.com\/l\/meetup-join\/[-a-zA-Z0-9()@:%_\+.~#?&//=]+/,
        WEBEX: /((http[s]{0,1}:\/\/|)[0-9A-Za-z\.\-]{0,}\.{0,}webex\.com\/meet\/[a-zA-Z0-9.:\/=_?&\-%]{1,}(?<!_))|((http[s]{0,1}:\/\/|)[0-9A-Za-z\.\-]{0,}\.{0,}webex\.com\/join\/[a-zA-Z0-9.:\/=_?&\-%]{1,}(?<!_))|((http[s]{0,1}:\/\/|)[0-9A-Za-z\.\-]{0,}\.{0,}webex\.com\/[0-9A-Za-z\.\-]{0,}\.{0,}\/j\.php\?[a-zA-Z0-9.:\/=_?&\-%]{1,}(?<!_))/,
    },
    inputFilePath: './test/testData.txt',
    outputFilePath: './test/results.csv'
};

module.exports = config;
