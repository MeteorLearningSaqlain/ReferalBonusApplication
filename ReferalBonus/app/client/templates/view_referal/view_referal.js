/*****************************************************************************/
/* ViewReferal: Event Handlers */
/*****************************************************************************/
Template.ViewReferal.events({
});

/*****************************************************************************/
/* ViewReferal: Helpers */
/*****************************************************************************/
Template.ViewReferal.helpers({
	interviewDate: function(){
		return moment(this.interViewSchedule).tz("Asia/Kolkata").format("dddd MMM Do YYYY");
	}
});

/*****************************************************************************/
/* ViewReferal: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewReferal.onCreated(function () {
});

Template.ViewReferal.onRendered(function () {
});

Template.ViewReferal.onDestroyed(function () {
});
