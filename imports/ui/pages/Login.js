import React from 'react';

class Login extends React.Component {
	state = {
		username: "",
		password: "",
		errorStatus: null
	}
	
	onChange = e => {
		const { name, value } = e.target;
		
		this.setState( {
			[ name ]: value
		} );
	}
	
	_login = e => {
		e.preventDefault();
		const { username, password } = this.state;
		
		Meteor.loginWithPassword( username, password, err => {
			if ( err ) {
				this.setState( {
					errorMessage: err.reason
				}, () => {
					Bert.alert( err.reason, "danger", "growl-bottom-left" );
					
				} );
			} else {
				Bert.alert( "Welcome back!", "info", "growl-bottom-left" )
				FlowRouter.go( "dashboard" );
			}
		} )
	}
	
	render() {
		return (
				<div className="row">
					<div className="col-lg-12 mt-10 text-center">
						<h1 className="title--sm-display">Welcome!</h1>
					</div>
					<div className="col-lg-6 ml-auto mr-auto mt-4">
						<form onSubmit={ this._login }>
							
							<div className="card">
								<div className="card-body">
									<div className="form-group">
										<label htmlFor="email-address-field">
											Username
										</label>
										<input className="form-control"
													 type="text"
													 value={ this.state.username }
													 name="username"
													 onChange={ this.onChange }
													 placeholder="Your username"/>
									</div>
									<div className="form-group">
										<label htmlFor="password-field">
											Password
										</label>
										<input className="form-control"
													 type="password"
													 value={ this.state.password }
													 name="password"
													 onChange={ this.onChange }
													 placeholder="Your password"/>
									</div>
								</div>
								<div className="card-footer">
									{
										this.state.errorMessage &&
										<p className="text-danger bold text-center"><i class="fa fa-exclamation-circle"
																																	 aria-hidden="true"></i> { this.state.errorMessage }
										</p>
									}
									<button className="btn btn-primary btn-block float-right clickable loginButton--click"
													onClick={ this._login }>Log in
									</button>
									
									<p className="text-center">
										<a href={ FlowRouter.path( "register" ) }>
											Create an account
										</a>
									</p>
								</div>
							
							</div>
						</form>
					
					</div>
				</div>
		)
	}
}

export default Login;