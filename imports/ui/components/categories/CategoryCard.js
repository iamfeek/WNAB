import React from 'react';

const CategoryCard = props => {
	const { cat } = props;
	return(
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">{ cat.title }</h4>
					<h6 className="card-subtitle mb-2 text-muted">${ cat.budget }</h6>
					<a href="#" className="card-link">Transactions</a>
				</div>
			</div>
	)
}

export default CategoryCard;