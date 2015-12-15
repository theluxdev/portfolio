Projects = new Mongo.Collection('projects');

Meteor.publish('projects', function (){
	return Projects.find();
});