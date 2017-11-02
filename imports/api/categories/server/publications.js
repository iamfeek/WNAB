import Categories from '../categories';
import '../methods';

Meteor.publish("categories.all", function(){
	return Categories.find({ owner: this.userId });
});