import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';


const Navbar = props => {
	const { active, user } = props;
	
	const getClassName = element => {
		const baseClass = "nav-item";
		let className = baseClass;
		if ( element == active ) className = baseClass.concat( " active" );
		
		return className;
	}
	
	const UnauthedLinks = () => {
		return [
			<li key="1" className={ getClassName( "login" ) }>
				<a className="nav-link" href={ FlowRouter.path( "login" ) }>Login</a>
			</li>,
			<li key="2" className={ getClassName( "register" ) }>
				<a className="nav-link" href={ FlowRouter.path( "register" ) }>Register</a>
			</li>
		]
	}
	
	const AuthedLinks = () => {
		return [
			<li key="1" className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
					 aria-haspopup="true" aria-expanded="false">
					{ user.username }
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#">Profile</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" href={ FlowRouter.path( "logout" ) }>Logout</a>
				</div>
			</li>
		]
	}
	
	const AuthedActions = () => [
		<li key="1" className={ getClassName( "dashboard" ) }>
			<a className="nav-link" href={ FlowRouter.path( "dashboard" ) }>Dashboard</a>
		</li>
	]
	
	
	return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href={ FlowRouter.path( "home" ) }>WNAB</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{
							user && <AuthedActions/>
						}
					</ul>
					
					<ul className="navbar-nav ml-auto">
						{
							user ? <AuthedLinks/> : <UnauthedLinks/>
						}
					</ul>
				</div>
			</nav>
	)
}


export default withTracker( props => {
	return {
		user: Meteor.user(),
		...props
	}
} )( Navbar );