/*****************************************************************************/
/* DisplayReferals: Event Handlers */
/*****************************************************************************/
Template.DisplayReferals.events({
});

/*****************************************************************************/
/* DisplayReferals: Helpers */
/*****************************************************************************/
Template.DisplayReferals.helpers({
	referals: function(){
		return Referals.find()
	}
});

/*****************************************************************************/
/* DisplayReferals: Lifecycle Hooks */
/*****************************************************************************/
Template.DisplayReferals.onCreated(function () {
});

Template.DisplayReferals.onRendered(function () {
});

Template.DisplayReferals.onDestroyed(function () {
});
