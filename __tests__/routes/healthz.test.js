'use strict'

const request = require('supertest');

const app = require('../../src/app');

describe('GET /healthz', () => {
    it('should get health-check information', async () => {
        const response = await request(app).get("/healthz");
        expect(response.statusCode).toBe(200);
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/health+json'));
        expect(response.header['cache-control']).toBe('max-age=5');
        expect(response.body.status).toBe('pass');
    });
});