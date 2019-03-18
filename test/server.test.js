const expect = require('expect');
const request = require('supertest');

const {app} = require('../src/server');

describe('GET /health', () => {

    it('should get health-check information', (done) => {

        request(app)
            .get('/health')
            .set('Accept', 'application/health+json')
            .expect(200)
            .expect((res) => {
                expect(res.body.status).toBe('pass')
            })
            .end(done)
    })
});