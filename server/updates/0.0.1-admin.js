const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'admin',
		email: 'ola',
		password: 'ola',
		canAccessKeystone: true,
	}).save(done);
};
