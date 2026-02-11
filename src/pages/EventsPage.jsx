import { Suspense } from 'react';
import { useNavigation, useLoaderData, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

import hostURL from "../host.js";


function EventsPage() {
  const error = false;

  const { events } = useLoaderData();

  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  
  if( isLoading ) {
  	return (
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    )
  }

  if( error ) {
  	return (
  	  <div style={{ textAlign: 'center' }}>
        {error && <p>{error}</p>}
      </div>
    )
  }

  return <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
    <Await resolve={events}>
      { (loadedEvents) => <EventsList events={loadedEvents} /> }
    </Await>
  </Suspense>;
}




export default EventsPage;




export async function getEvents() {
	const response = await fetch(hostURL);

	if( !response.ok ) {
		return new Response({
			message: 'Error occured dunring events fetch.'
		}, { status: 405 });
	}
	const res = await response.json()
	return res.events;

}


export function getEventsLoader() {
  return {
    events: getEvents()
  }
}