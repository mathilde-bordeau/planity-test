import React from "react";

const Event = (props) => {
  const { event } = props;

  return (
    <div
      className="event-box"
      style={{
        position: "absolute",
        height: `${event.height}px`,
        width: `${event.width}px`,
        top: `${event.positionY}px`,
        left: `${event.positionX}px`,
      }}
    >
      <div>{event.id}</div>
    </div>
  );
};

export default Event;
