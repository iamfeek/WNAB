import Categories from './categories';

Meteor.methods( {
	"categories.add": function ( title, budget ) {
		const category = {
			title,
			budget,
			owner: this.userId
		}
		
		return Categories.insert( category );
	}
} )