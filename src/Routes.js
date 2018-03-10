import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import login from './pages/login';
import main from './main';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={login} title="Login" initial={true}/>
			      <Scene key="main" component={main} title="main"/>
			    </Stack>
			 </Router>
			)
	}
}
