const sum = require('../assets/scripts/sum');


// basic test with no called function
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});


//basic test with sum funcion
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});