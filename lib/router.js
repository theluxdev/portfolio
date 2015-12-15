Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('homePage');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/projects', function () {
  this.render('projects');
});

Router.route('/contact', function () {
  this.render('contact');
});