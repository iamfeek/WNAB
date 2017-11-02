import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Categories from '../pages/Categories';
import CategoriesDB from '../../api/categories/categories';

export default withTracker( () => {
	const handle = Meteor.subscribe("categories.all")
	const categories = CategoriesDB.find().fetch();
	
	return {
		subsReady: handle.ready(),
		categories
	}
} )( Categories )