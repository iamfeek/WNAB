import React from 'react';
import Navbar from '../components/Navbar'
const MainLayout = props => {
	return(
			<div>
				<header>
					<Navbar active={ props.active } />
				</header>
				
				<main className="container" style={{ paddingTop: "24px"}}>
					{ props.main }
				</main>
			</div>
	)
}

export default MainLayout;