import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation.jsx';

export default function EventsLayout() {
	return (<>
		<EventsNavigation />
		<Outlet />
	</>)
}