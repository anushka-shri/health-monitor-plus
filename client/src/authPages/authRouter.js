import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function LoginRouter() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default LoginRouter;
