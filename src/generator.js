const { exec } = require('child_process');
// const normalize = require('./normalizer');

module.exports = async function generate(resources) {
    let results = [];

    const requests = resources.filter(x=> x._type === 'request'); //get all requests
    const groups = resources.filter(x=> x._type === 'request_group'); //get all groups
    
    const unparentRequests = requests.filter(x => x.parentId.substr(0,3) === "wrk");
    groups.forEach(requestGroup => {
        const r = requests.filter(x=> x.parentId === requestGroup._id);
        results.push({ group : requestGroup, requests: r });
    });
    
    unparentRequests.forEach(r => {
        results.push({ group : r, requests: [ r ]});
    });

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