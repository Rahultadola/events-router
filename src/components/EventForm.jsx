import { Form, useNavigate, useNavigation, redirect } from 'react-router-dom';

import hostURL from "../host.js";
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting';

  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  if( navigation.state === 'loading') {
    return <p style={{ textAlign: 'center'}}>Loading...</p>
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting ? true : undefined}>
          Cancel
        </button>
        <button disabled={isSubmitting ? true : undefined}>{isSubmitting ? 'Submitting' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;



export async function formAction({request, params}) {
  const data = await request.formData()
  let url = hostURL ;
  let error = 'Error adding a new event.'

  console.log("request method in action", request.method)

  if ( request.method === 'PATCH') {
    url = `${hostURL}/${params['event-id']}`
    error = 'Error upding an event.'
  }

  const response = await fetch(url, {
    method: request.method,
    body: JSON.stringify({
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description'),
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if( ! response.ok ) {
    throw new Error(error)
  }

  return redirect('/events')
}