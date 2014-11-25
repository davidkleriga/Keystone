var keystone = require('keystone');

keystone.init({
  
  'name': 'Test Project',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'auto update': true,
  'mongo': 'mongodb://localhost/my-project',
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'L0nGK3yB08RdS3cR3t'
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();