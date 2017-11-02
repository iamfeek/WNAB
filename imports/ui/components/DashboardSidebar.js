import React from 'react';

class DashboardSidebar extends React.Component {
	_getClassName = elem => {
		const { active } = this.props;
		let baseClass = "flex-sm-fill text-sm-center nav-link";
		
		return active == elem ? baseClass.concat( " active" ) : baseClass;
	}
	
	render() {
		return (
				<nav className="nav nav-pills flex-column flex-sm-row">
					<a className={ this._getClassName( "dashboard" ) } href={ FlowRouter.path( "dashboard" ) }>Dashboard</a>
					<a className={ this._getClassName( "dashboard.categories" ) } href={ FlowRouter.path( "dashboard.categories" ) }>Categories</a>
					<a className={ this._getClassName( "dashboard.groups" ) } href={ FlowRouter.path( "dashboard.groups" ) }>Groups</a>
					<a className={ this._getClassName( "dashboard.transactions" ) } href={ FlowRouter.path( "dashboard.transactions" ) }>Transactions</a>
				</nav>
		)
	}
}

export default DashboardSidebar;