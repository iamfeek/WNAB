import React from 'react';
import _ from 'lodash';

class Register extends React.Component {
	state = {
		username: "",
		email: "",
		password: "",
		cpassword: "",
		passwordNotMatch: false
	}
	
	onChange = e => {
		const { name, value } = e.target;
		
		this.setState( {
			[name]: value
		}, () => {
			const { password, cpassword } = this.state;
			this.setState( {
				passwordNotMatch: !_.isEqual( password, cpassword )
			} )
		} )
	}
	
	_register = e => {
		e.preventDefault();
		const { username, email, password } = this.state;
		
		const options = {
			username,
			email,
			password
		}
		
		Accounts.createUser( options, err => {
			if ( err ) {
				this.setState( {
					errorMessage: err.reason
				}, () => {
					Bert.alert( err.reason, "danger", "growl-bottom-left" );
				} );
			} else {
				Bert.alert( "Welcome to WNAB!", "info", "growl-fixed-top" );
				FlowRouter.go( "dashboard" );
			}
		} );
	}
	
	render() {
		return (
				<div className="row">
					<div className="col-lg-12 mt-10 text-center">
						<h1 className="title--sm-display">Register</h1>
					</div>
					<div className="col-lg-6 ml-auto mr-auto mt-4 height-sm-100">
						<form onSubmit={ this._register }>
							<div className="card">
								<div className="card-body">
									<div className="form-group">
										<label htmlFor="username-field">
											Username
										</label>
										<input name="username" value={ this.state.username } onChange={ this.onChange }
													 className="form-control" type="text" id="username-field" placeholder="Your username"/>
									</div>
									<div className="form-group">
										<label htmlFor="email-address-field">
											Email Address
										</label>
										<input name="email" value={ this.state.email } onChange={ this.onChange }
													 className="form-control" type="email" id="email-address-field"
													 placeholder="Your email address"/>
									</div>
									<div className="form-group">
										<label htmlFor="password-field">
											Password
										</label>
										<input name="password" value={ this.state.password } onChange={ this.onChange }
													 className={ `form-control` } type="password" id="password-field"
													 placeholder="Your password"/>
									
									</div>
									<div className="form-group">
										<label htmlFor="password-field-confirm">
											Retype Password
										</label>
										<input name="cpassword" value={ this.state.cpassword } onChange={ this.onChange }
													 className={ `form-control ${ this.state.passwordNotMatch ? "is-invalid" : ""}` }
													 type="password" id="password-field-confirm"
													 placeholder="Retype your password"/>
										<div className="invalid-feedback">
											Please provide a valid state.
										</div>
									</div>
								</div>
								<div className="card-footer">
									{
										this.state.errorMessage &&
										<p className="text-danger bold text-center"><i class="fa fa-exclamation-circle"
																																	 aria-hidden="true"></i> { this.state.errorMessage }
										</p>
									}
									<button className="btn btn-primary btn-block float-right clickable"
													disabled={ this.state.passwordNotMatch }
													onClick={ this._register }>Confirm registration
									</button>
								</div>
							</div>
						</form>
					
					</div>
				</div>
		)
	}
}

export default Register;