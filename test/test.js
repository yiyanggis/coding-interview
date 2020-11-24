var bundle = require('../dist/bundle')
var assert = require('assert');
var _ = require('underscore');

console.log(bundle);
bundle.test();
var _ds = new bundle.DataStructure();
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('underscore is equal', function () {
      assert.equal(_.isEqual({'a':1,'b':2},{'b':1,'c':2}), false);
    });
  });
});

describe('data structure', function(){
	describe('1.1 is unique', function(){
		it('abc123! should be unique', function(){
			
			assert.equal(_ds.IsUnique_1_1('abc123!'), true);
		});

		it('asdasdasdqq should not be unique', function(){
			
			assert.equal(_ds.IsUnique_1_1('asdasdasdqq'), false);
		});
	});

	describe('1.2 check permutation', function(){
		it('123 and a3b2b1 should be permutation', function(){
			assert.equal(_ds.CheckPermutation_1_2('123abb','a3b2b1'),true);
		});

		it('123acb and a3b2b1 should not be permutation', function(){
			assert.equal(_ds.CheckPermutation_1_2('123abc','a3b2b1'),true);
		})
	});
});