export interface Request {
    name: string,
    method: string,
    uri: string
    headers: [string,string],
    body: object
}

export interface RequestGroup {
    name: string,
}

export interface TemplateResult {
    group?: RequestGroup
    requests: Array<Request>
}