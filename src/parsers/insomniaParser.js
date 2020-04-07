class InsomniaParser {
    constructor(data) {
      this.resources = data.resources;
    }

    Parse() {
        let results = [];
        const requests = this.resources.filter(x=> x._type === 'request'); //get all requests
        const groups = this.resources.filter(x=> x._type === 'request_group'); //get all groups
        
        const unparentRequests = requests.filter(x => x.parentId.substr(0,3) === "wrk");
        groups.forEach(requestGroup => {
            const r = requests.filter(x=> x.parentId === requestGroup._id);
            results.push({ group : requestGroup, requests: r });
        });
        
        unparentRequests.forEach(r => {
            results.push({ group : r, requests: [ r ]});
        });

        return results;
    }

}

module.exports = InsomniaParser;