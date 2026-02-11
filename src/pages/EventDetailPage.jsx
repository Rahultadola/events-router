import { redirect, useRouteLoaderData } from 'react-router-dom';

import hostURL from "../host.js";

import EventItem from '../components/EventItem.jsx'

export default function EventDetailPage() {
	const { event } = useRouteLoaderData('event-detail')
	return <EventItem event={event}/>
}


export async function eventLoader({request, params}) {
 return await fetch(hostURL + '/'+ params['event-id'])
}

export async function deleteEventAction({request, params}) {
	const response = await fetch(hostURL + '/' + params['event-id'], {
		method: request.method
	})

	if( response.ok ) {
		return redirect('/events')
	}

	throw new Error('Unable to delete event.')
}