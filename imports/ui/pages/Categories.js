import React from 'react';
import { boolean, array } from 'prop-types';
import AddCategoryModal from "../components/categories/AddCategoryModal";
import CategoryCard from '../components/categories/CategoryCard'

class Categories extends React.Component {
	_refModal = i => {
		if ( !i ) return;
		
		this.addModal = i;
		this.addModal.on( "save", this._onAddModalSave )
	}
	
	_onAddModalSave = details => {
		const { title, budget } = details;
		
		Meteor.call( "categories.add", title, budget, ( err, res ) => {
			if ( err ) {
				Bert.alert( err.reason, "danger", "growl-bottom-left" );
			} else {
				Bert.alert( "Category added!", "info", "growl-bottom-left" );
				this.addModal.close();
			}
		} );
	}
	
	_openAddModal = () => {
		this.addModal.open();
	}
	
	_renderCategories = () => {
		const { categories } = this.props;
		
		return _.map( categories, cat => <div className="col-12 col-md-4 m-b-8" key={ cat._id }><CategoryCard cat={ cat }/>
		</div> )
	}
	
	
	render() {
		const { subsReady } = this.props;
		return (
				<div>
					
					<AddCategoryModal ref={ this._refModal }/>
					<h1>Categories <span onClick={ this._openAddModal } className="badge badge-primary ml-auto clickable"><i
							className="fa fa-plus"/> New</span></h1>
					
					
					<div className="row">
						{ subsReady && this._renderCategories() }
					</div>
				</div>
		)
	}
}

export default Categories;