// src/fileHandler.js
const fs = require('fs');

const fileHandler = {
    readFile: (filePath) => {
        try {
            return fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim() !== '');
        } catch (error) {
            console.error(`Error reading file ${filePath}: ${error.message}`);
            return [];
        }
    },

    writeFile: (filePath, data) => {
        try {
            fs.writeFileSync(filePath, data, 'utf-8');
        } catch (error) {
            console.error(`Error writing file ${filePath}: ${error.message}`);
        }
    }
};

module.exports = fileHandler;
