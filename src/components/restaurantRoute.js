import React from 'react';
import {
	BrowserRouter as Router,
	Route, Switch
} from 'react-router-dom'
import PageTransition from "react-router-page-transition";
import './RestaurantRoute.css';

import Header from './header/header';
import Home from './home/home';
import RestaurantDetails from './restaurantDetails/restaurantDetails';

const RestaurantRoute = () => {
	return (
		<Router>
			<div>
				<Header />
				<Route
					render={({ location }) => (
						<PageTransition timeout={500}>
							<Switch location={location}>
								<Route exact path="/" component={Home} />
								<Route path="/detail/:id" component={RestaurantDetails} />
							</Switch>
						</PageTransition>
					)}
				/>
			</div>
		</Router>
	);
}

export default RestaurantRoute;

