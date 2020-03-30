---
to: tests/integration/<%= group.name %>.spec.js
---

const request = require('supertest');
const app = require('../../src/app');

const connection = require('../../src/database/connection');

describe('<%= group.name %>', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(true);
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    <%_ for(var i = 0; i < requests.length; i++) { _%>
    it('<%= requests[i].name %>', async () => {
        <%- include(`${actionfolder}/component/${requests[i].method}`, { request: requests[i] }); %>

        //Add your expects here
        //Sample:
        //expect(response.body).toHaveProperty('{some-property}');
    });

    <%_ } _%>
});