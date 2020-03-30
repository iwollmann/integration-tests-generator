const fs = require("fs");

module.exports = {
    params: ({ args }) => {
        let jsonData = {};
        if (args) {
            jsonData = JSON.parse(decodeURIComponent(args.name).replace(/'/g, ''));
        }

        return {
            ...args,
            group: jsonData.group,
            requests: jsonData.requests,
            request: {}
        };
    }
};
