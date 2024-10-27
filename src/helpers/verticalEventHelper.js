import moment from "moment";
import {
  MINUTES_IN_ONE_HOUR,
  START_TIME_CALENDAR,
  HOURLY_RANGE,
} from "../constants";


const defineVerticalProperties = (event, windowHeight) => {
  event.height = defineHeight(event, windowHeight);
  event.positionY = definePositionY(event, windowHeight);
};


const defineHeight = (event, windowHeight) => {
  const hourHeight = windowHeight / HOURLY_RANGE;

  return (hourHeight * Number(event.duration)) / MINUTES_IN_ONE_HOUR;
};


const definePositionY = (event, windowHeight) => {
  const startTimeCalendar = moment(START_TIME_CALENDAR, "hh:mm A");
  const startTimeEvent = moment(event.start, "HH:mm");

  const durationBeforeEventStart = startTimeEvent.diff(
    startTimeCalendar,
    "minutes"
  );

  const ratio = durationBeforeEventStart / MINUTES_IN_ONE_HOUR;
  const hourHeight = windowHeight / HOURLY_RANGE;

  return ratio * hourHeight;
};

export { defineVerticalProperties, defineHeight, definePositionY };
