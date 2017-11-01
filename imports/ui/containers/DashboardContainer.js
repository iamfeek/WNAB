import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Dashboard from '../pages/Dashboard';

export default withTracker( () => {
	return {
		user: Meteor.user()
	}
})( Dashboard )