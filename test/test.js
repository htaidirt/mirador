/**
 * Mocha tests to check lib/test.js
 */

var assert = require('assert')
,   test = require('../lib/test')

describe('Testing ./lib/test.js >', function(){

    it('Should detect the test/ folder', function(){
        assert.ok(test.folderExists)
    })

    it('Should find test files', function(){
        assert.ok(test.list().length > 0)
    })

})
