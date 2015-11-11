/*****************************************************************************/
/* DisplayEmployees: Event Handlers */
/*****************************************************************************/
Template.DisplayEmployees.events({
});

/*****************************************************************************/
/* DisplayEmployees: Helpers */
/*****************************************************************************/
Template.DisplayEmployees.helpers({
	employees: function(){
		return Employees.find();
	},
	referals: function(){
		var employeeEmail = this.email;
		return Referals.find({referredByEmail: employeeEmail});
	}
});

/*****************************************************************************/
/* DisplayEmployees: Lifecycle Hooks */
/*****************************************************************************/
Template.DisplayEmployees.onCreated(function () {
});

Template.DisplayEmployees.onRendered(function () {
});

Template.DisplayEmployees.onDestroyed(function () {
});
