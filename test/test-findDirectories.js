'use strict';
var test = require('tape');
var path = require('path');

var fixtures = path.join(__dirname, 'fixtures');

var findDirectories = require('../lib/findDirectories');

test('findDirectories should work when required', function (t) {
  t.plan(1);
  t.ok(findDirectories, 'the returned value should exist');
});

test('findDirectories should return a list of directories in a folder', function(t) {
  t.plan(2);
  findDirectories(fixtures, function (err, list) {
    var expected = [
      path.join(fixtures, 'foo'),
      path.join(fixtures, 'foo/bar'),
      path.join(fixtures, 'foo/baz')
    ];
    t.notok(err, 'findDirectories should execute callback without an error');
    t.deepEqual(list, expected, 'It should return the expected list');
  });
});