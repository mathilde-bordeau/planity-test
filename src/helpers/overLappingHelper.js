import moment from "moment";


const checkIsOverLapping = (event1, event2) => {
  const startTime1 = moment(event1.start, "HH:mm");
  const endTime1 = moment(event1.start, "HH:mm").add(
    event1.duration,
    "minutes"
  );

  const startTime2 = moment(event2.start, "HH:mm");
  const endTime2 = moment(event2.start, "HH:mm").add(
    event2.duration,
    "minutes"
  );

  const overLapping =
    (moment(endTime2).isAfter(moment(startTime1)) &&
      moment(startTime2).isBefore(moment(endTime1))) ||
    moment(startTime1).isSame(moment(startTime2)) ||
    moment(endTime1).isSame(moment(endTime2));

  return overLapping;
};


const findOverLapped = (event, column) => {

  return column.find((comparedEvent) =>
    checkIsOverLapping(event, comparedEvent)
  );
};


const getNbOverLappingInNextColumns = (
  event,
  indexCurrentColumn,
  columns
) => {
  let nbOfOverLappingInNextColumns = 0;
  let currentEvent = event;

  for (let i = indexCurrentColumn + 1; i < columns.length; i++) {
    let newEventSelected = findOverLapped(currentEvent, columns[i]);
    if(newEventSelected) {
      nbOfOverLappingInNextColumns++;
      currentEvent = newEventSelected;
    }
  }
  
  return nbOfOverLappingInNextColumns;
};

export {
  checkIsOverLapping,
  findOverLapped,
  getNbOverLappingInNextColumns,
};
