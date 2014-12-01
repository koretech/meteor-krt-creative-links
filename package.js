var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:creative-links',
	summary: 'Creative Links Package',
	version: '0.1.1',
	git: 'https://github.com/koretech/meteor-krt-creative-links.git'
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.0');

	api.addFiles([
		'lib/creative-links.css'
	], client);

});
