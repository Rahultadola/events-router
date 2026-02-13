import classes from './EventItem.module.css';

import { Link, useSubmit } from 'react-router-dom';

import { formatter } from './EventsList.jsx';

function EventItem({ event }) {

  const submitAction = useSubmit();

  const d = new Date(event.date)

  function startDeleteHandler() {
    const confirm = window.confirm("Are you sure?")

    if( confirm ) {
      submitAction(null, { method: 'delete' })
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{formatter.format(d)}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
