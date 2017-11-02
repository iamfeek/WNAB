import React from 'react';
import Navbar from '../components/Navbar';
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = props => {
	return (
			<div>
				<header>
					<Navbar active={ props.active }/>
				</header>
				
				<main className="container" style={ { paddingTop: "24px" } }>
					<div className="row">
						
						<div className="col-sm col-md-3">
							<DashboardSidebar active={ props.active }/>
						</div>
						
						<div className="col-sm col-md-9">
							{ props.main }
						</div>
					</div>
				</main>
			</div>
	)
}

export default DashboardLayout;