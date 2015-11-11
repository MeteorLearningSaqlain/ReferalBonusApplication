Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/addEmployee', {
	name: 'AddEmployees'
});

Router.route('/addReferals', {
	name: 'AddReferals'
});

Router.route('/displayAllEmployees', {
	name: 'DisplayEmployees'
});

Router.route('/displayAllReferals', {
	name: 'DisplayReferals'
});

Router.route('/editEmployee/:_id', {
  name: 'EditEmployee',
  data: function(){
    return Employees.findOne({_id: this.params._id})
  }
});

Router.route('/editReferal/:_id', {
  name: 'EditReferal',
  data: function(){
    return Referals.findOne({_id: this.params._id})
  }
});

Router.route('/viewReferal/:_id', {
  name: 'ViewReferal',
  data: function(){
    return Referals.findOne({_id: this.params._id})
  }
});