var expect = require('chai').expect;
var helper = require('./helper');
var levelgraphjsonld = require('../');

describe('jsonld.put', function() {

  var db;

  beforeEach(function() {
    db = helper.getDB();
  });

  afterEach(function(done) {
    db.close(done);
  });

  it('it should return db unchanged if it already has jsonld attached', function(done) {
    var old = db.jsonld;
    var newdb = levelgraphjsonld(db);
    expect(db.jsonld).to.equal(old);
    done();
  });
});

