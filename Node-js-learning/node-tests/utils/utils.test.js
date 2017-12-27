const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add',() => {
        it('adds two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number'); //See doc of mjackson expect
            
            if(res !== 44 ){
                throw new Error(`Expected 44, Add value ${res}`)
            }
        });
        
        it('should async add', (done) => {  //it notify test that it is async function done is used
            utils.aSyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });
    
    it('should square number', (done) => {
        utils.aSyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
    
    
    it('square a number', () => {
        var sq = utils.square(5);
    
        expect(sq).toBe(25).toBeA('number'); // expect with toBe as return value and toBeA expected type
    })
});

// it should verify first and last names are set

it('should set firstName and lastName', () => {
    var user = {location: 'Chesterfield', age: 27};
    var res = utils.setName(user, 'Naveen Reddy');

    expect(user).toEqual(res);

    expect(res).toInclude({
        firstName: 'Naveen',
        lastName: 'Reddy'
    });
} );

/* it('should expect some value', () => {
    // expect(12).toNotBe(12); // toNotBe (!==)
    // expect({name: "Naveen"}).toEqual({name: "Naveen"}); // when comparing objects toBe does not work instead use toEqual
    // expect([2,3,4]).toInclude(5); // to check if expected values have included works with objects, arrays and properties 
    expect({
        name: 'Naveen',
        age: 27,
        location: 'Chesterfield'
    }).toExclude({
        age:25
    })

})
 */
