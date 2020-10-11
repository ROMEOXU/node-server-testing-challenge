const supertest = require('supertest');
const server = require('../server');

describe('test the router',()=>{
    test('GET /',async ()=>{
        const res = await supertest(server).get('/')
        expect(res.statusCode).toBe(200)
    })

    test('GET users/',async ()=>{
        const res = await supertest(server).get('/users')
        expect(res.statusCode).toBe(201)
        // expect(res.text[0]).toHaveProperty('username','chen')
    })
})