import React from 'react';
import ee from 'event-emitter';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddCategoryModal extends React.Component {
	state = {
		showModal: false,
		title: "",
		budget: ""
	}
	
	open = () => {
		this.setState( {
			showModal: true
		} );
	}
	
	close = () => {
		this.setState( {
			showModal: false
		} )
	}
	
	_toggle = () => {
		this.setState( {
			showModal: !this.state.showModal
		} )
	}
	
	_save = e => {
		e.preventDefault();
		
		const { title, budget } = this.state;
		const details = {
			title,
			budget
		}
		this.emit( "save", details );
	}
	
	_onChange = e => {
		const { name, value } = e.target;
		
		this.setState( {
			[ name ]: value
		} )
	}
	
	render() {
		return (
				<Modal isOpen={ this.state.showModal } toggle={ this._toggle }>
					<ModalHeader toggle={ this._toggle }>Add Category</ModalHeader>
					<form onSubmit={ this._save }>
						
						<ModalBody>
							<div className="form-group">
								<label htmlFor="title">Title</label>
								<input type="text" className="form-control" id="title" name="title" value={ this.state.title }
											 onChange={ this._onChange }
											 placeholder="E.g Internet, Groceries"/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Budget</label>
								<input type="number" className="form-control" id="exampleInputPassword1"
											 name="budget" value={ this.state.budget } onChange={ this._onChange }
											 placeholder="Budget for this category" aria-describedby="budgetHelp"/>
								<small id="budgetHelp" className="form-text text-muted">We'll never share your email with anyone else.
								</small>
							</div>
						</ModalBody>
						<ModalFooter>
							<button type="submit" className="btn btn-primary clickable">Add</button>
							<Button color="secondary" onClick={ this._toggle }>Cancel</Button>
						</ModalFooter>
					</form>
				
				</Modal>
		)
	}
}

ee( AddCategoryModal.prototype );
export default AddCategoryModal;