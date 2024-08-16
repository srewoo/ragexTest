// src/validator.js

const validator = {
    validateUrl: (url, pattern) => {
        return pattern.test(url);
    },

    generateResults: (urls, patterns) => {
        const results = [['URL', 'Conference Type', 'Valid']]; // Header row

        urls.forEach(url => {
            let validType = 'Invalid';
            let conferenceType = 'Unknown';

            for (const [type, pattern] of Object.entries(patterns)) {
                if (Array.isArray(pattern)) {
                    if (pattern.some(p => validator.validateUrl(url, p))) {
                        validType = 'Valid';
                        conferenceType = type;
                        break;
                    }
                } else if (validator.validateUrl(url, pattern)) {
                    validType = 'Valid';
                    conferenceType = type;
                    break;
                }
            }

            results.push([url, conferenceType, validType]);
        });

        return results;
    },

    formatResultsCSV: (results) => {
        return results.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')).join('\n');
    }
};

module.exports = validator;
