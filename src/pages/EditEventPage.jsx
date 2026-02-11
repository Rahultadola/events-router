import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm.jsx';

export default function EditEventPage() {
	const { event } = useRouteLoaderData('event-detail')
	return <EventForm method="patch" event={event} />
}