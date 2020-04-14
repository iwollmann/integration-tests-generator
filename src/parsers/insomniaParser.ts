import { Request, TemplateResult, RequestGroup } from '../definitions/Request'

interface InsomniaFile {
    resources: Array<InsonminaRequest | InsomniaGroup>
}

interface InsonminaRequest extends Request {
    _type: string,
    _id: string,
    method: string,
    url: string,
    parentId: string,
}

interface InsomniaGroup extends RequestGroup {
    _type: string,
    _id: string,
    parentId: string,
}

class InsomniaParser {
    resources: Array<InsonminaRequest | InsomniaGroup>;
    constructor(data: InsomniaFile) {
      this.resources = data.resources;
    }

    Parse(): Array<TemplateResult> {
        let results:Array<TemplateResult> = [];
        const requests = this.resources.filter(x=> x._type === 'request') as InsonminaRequest[]; //get all requests
        const groups = this.resources.filter(x=> x._type === 'request_group') as InsomniaGroup[]; //get all groups
        
        const unparentRequests = requests.filter(x => x.parentId.substr(0,3) === "wrk");
        groups.forEach(requestGroup => {
            const r = requests.filter(x=> x.parentId === requestGroup._id);
            results.push({ group : requestGroup, requests: r });
        });
        
        unparentRequests.forEach(r => {
            results.push({ group : r as InsomniaGroup, requests: [ r ]});
        });

        return results;
    }

}

export default InsomniaParser;