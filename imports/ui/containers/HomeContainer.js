import Home from '../pages/Home';
import { withTracker } from 'meteor/react-meteor-data';

export default HomeContainer = withTracker( () => {
	DocHead.setTitle("Home")
	return {}
} )( Home );