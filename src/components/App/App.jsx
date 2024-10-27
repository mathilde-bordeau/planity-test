import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import { useWindowContext } from "../../contexts/windowContext";
import eventsData from "../../data/events.json";
import { defineVerticalProperties } from "../../helpers/verticalEventHelper";
import { defineHorizontalProperties } from "../../helpers/horizontalEventHelper";

function App() {
  const { windowHeight, windowWidth } = useWindowContext();
  const [events, setEvents] = useState([]);

  const defineEventsProperties = (events, windowHeight, windowWidth) => {
    events.forEach((event) => {
      defineVerticalProperties(event, windowHeight);
    });
    defineHorizontalProperties(events, windowWidth);

    return events;
  };

  useEffect(() => {
    const updatedEvents = defineEventsProperties(
      eventsData,
      windowHeight,
      windowWidth
    );
    setEvents(updatedEvents);
  }, [windowHeight, windowWidth]);

  return (
    <div className="calendar">
      {events.map((event, index) => (
        <Event
          key={index}
          event={event}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
        />
      ))}
    </div>
  );
}

export default App;
