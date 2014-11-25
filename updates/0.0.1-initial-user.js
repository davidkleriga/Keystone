var keystone = require('keystone'),
    User = keystone.list('User');
 
exports = module.exports = function(done) {

	console.log('adding new user');
    
    var newUser = new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'admin@keystonejs.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);
    
};