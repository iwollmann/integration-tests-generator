const { exec } = require('child_process');

module.exports = function generate(results) {
    try {
        results.forEach(result => {
            exec(`hygen generator tests '${encodeURIComponent(JSON.stringify(result))}'`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
            });
        });    
    } catch (error) {
        console.log(`error: ${error}`);
    }
}