import React from "react";
import EventImg1 from "../../assets/images.jfif";
import EventImg2 from "../../assets/101.png";
import EventImg3 from "../../assets/download.jfif"
import "./Event.css";

const Event = () => {
  const events = [
    {
      title: "Event 1",
      image: EventImg1,
      coordinator: "Coordinator Name",
      description: "Description for Event 1.",
    },
    {
      title: "Event 2",
      image: EventImg2,
      coordinator: "Coordinator Name",
      description: "Description for Event 2.",
    },
    {
      title: "Event 3",
      image: EventImg3,
      coordinator: "Coordinator Name",
      description: "Description for Event 2.",
    },
    // Add more events as needed
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Upcoming Events</h1>
      <div className="row">
        {events.map((event, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={event.image} className="card-img-top" style={{height:"300px"}} alt={event.title} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.coordinator}</p>
                <p className="card-text">{event.description}</p>
                <a href="#http" className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Event;
