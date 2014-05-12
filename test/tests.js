singleModule('nothing more here', {

});

test("sqrt", function() {

  deepEqual(My.sqrt(4), 2, "square root of 4 is 2");

});

module('my module');

test('testing equality', function () {
  equal(1, 2, 'Not true');
});
