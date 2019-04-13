import React from 'react'
import {PageLogin} from './pages'
import {Route, Switch } from 'react-router-dom'

const routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={() => <PageLogin />} />
		</Switch>
	)	
}

export default routes