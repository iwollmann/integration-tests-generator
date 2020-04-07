const InsomniaParser = require('./insomniaParser');

function GetParser(file) {
    if (file.lastIndexOf('.json') !== -1) {
        const data = require(file);

        if (data.__export_source && data.__export_source.indexOf('insomnia') !== -1) {
            return new InsomniaParser(data);
        }
    }
}

module.exports = {
    GetParser
};