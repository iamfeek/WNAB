import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from "../../ui/containers/MainLayout";
import DashboardLayout from "../../ui/containers/DashboardLayout";

import HomeContainer from '../../ui/containers/HomeContainer';
import DashboardContainer from '../../ui/containers/DashboardContainer'
import CategoriesContainer from '../../ui/containers/CategoriesContainer'

import Login from "../../ui/pages/Login";
import Register from "../../ui/pages/Register";


FlowRouter.route( '/', {
	name: 'home',
	action() {
		mount( MainLayout, {
			main: <HomeContainer/>,
			active: "home"
		} );
	},
} );

FlowRouter.route( '/logout', {
	name: 'logout',
	action() {
		Meteor.logout( () => {
			FlowRouter.go( "login" )
		} );
	},
} );

FlowRouter.route( '/login', {
	name: 'login',
	action() {
		mount( MainLayout, {
			main: <Login/>,
			active: "login"
		} );
	},
} );

FlowRouter.route( '/register', {
	name: 'register',
	action() {
		mount( MainLayout, {
			main: <Register/>,
			active: "register"
		} );
	},
} );

var dashboardRoutes = FlowRouter.group( {
	prefix: '/d',
	name: 'dashboard'
} );

dashboardRoutes.route( '/', {
	name: 'dashboard',
	action() {
		mount( DashboardLayout, {
			main: <DashboardContainer/>,
			active: "dashboard"
		} );
	},
} );

dashboardRoutes.route( '/categories', {
	name: "dashboard.categories",
	action() {
		mount( DashboardLayout, {
			main: <CategoriesContainer/>,
			active: "dashboard.categories"
		} )
	}
} )

function becauseAuthenticated( context, redirect ) {
	if ( Meteor.userId() ) {
		Bert.alert( "You are already logged in!", "info", "growl-bottom-left" );
		redirect( "/dashboard" );
	}
}

function isAuthenticated( context, redirect ) {
	if ( !Meteor.userId() ) {
		Bert.alert( "Please login to view this content.", "info", "growl-bottom-left" )
		redirect( "login", { url: context.pathName } );
	}
}

FlowRouter.triggers.enter( [ becauseAuthenticated ], { only: [ "login", "register" ] } )
FlowRouter.triggers.enter( [ isAuthenticated ], { only: [ "dashboard" ] } )