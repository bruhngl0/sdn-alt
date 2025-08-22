import React from "react";
import "../styles/eventlist.scss";
import { Link } from "react-router-dom";

const events = [
  {
    id: "1",
    posterUrl: "sdn-event.png",
    date: "Wednesday, 3th September, 2025.",
    time: "7:00 PM onwards.",
    title: "Vegetarian Omakase Club.",
    price: "₹2500/- per person.",
    venue: "Phurr, Bengaluru.",
    badge: "3rd Sept, 2025.",
  },
];

const EventCard = ({ data }) => {
  return (
    <div className="event-card">
      <div className="poster">
        <img src={data.posterUrl} alt={data.title} />
        <div className="poster__fade" />
        {data.badge && <span className="chip chip--accent">{data.badge}</span>}
      </div>

      <div className="meta">
        <h3 className="meta__title">{data.title}</h3>
        {data.presenters && (
          <div className="meta__presenters">{data.presenters}</div>
        )}
        <div className="meta__when">Date: {data.date}</div>
        <div className="meta__venue">Time: {data.time}</div>

        <div className="meta__venue">Venue: {data.venue}</div>
        <div className="meta__price">Price: {data.price}</div>
        {data.priceLabel && (
          <div className="meta__price">{data.priceLabel}</div>
        )}

        <div className="div-card-btn">
          <Link
            to="/userDetail"
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn"
          >
            Join The Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
};

const EventList = () => {
  return (
    <div className="event-screen">
      <header className="topbar">
        <h1>UPCOMING EVENTS</h1>
      </header>

      <section className="event-list">
        {events.map((evt) => (
          <EventCard key={evt.id} data={evt} />
        ))}
      </section>
    </div>
  );
};

export default EventList;
