const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app'); // it also add two methods app.__set__ and app.__get__

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call spy', () => {
        var spy = expect.createSpy();
        spy('Naveen', 27);
        expect(spy).toHaveBeenCalledWith('Naveen', 27);
    })

    it('should call saveUser with object', () => {
        var email = 'nave@gmail.com';
        var password ='1234abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});