import classes from './EventsList.module.css';

import { Link } from 'react-router-dom';

export const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
});


function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => {
          const d = new Date(event.date)
          return (
            <li key={event._id} className={classes.item}>
              <Link to={event._id}>
                <img src={event.image} alt={event.title} style={{maxHeight: '9rem'}}/>
                <div className={classes.content}>
                  <h2>{event.title}</h2>
                  <time>{formatter.format(d)}</time>
                </div>
              </Link>
            </li>
          )
        })}

        {events && events.length === 0 && <p>No events found</p>}
      </ul>
    </div>
  );
}


export default EventsList;
