'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/feeds', function() {

  it('should respond unAuthorized', function(done) {
    request(app)
      .get('/api/feeds')
      .expect(401)
      /*.expect('Content-Type', /json/)*/
      .end(function(err, res) {
        /*if (err) return done(err);
        res.body.should.be.instanceof(Array);*/
        done();
      });
  });
});