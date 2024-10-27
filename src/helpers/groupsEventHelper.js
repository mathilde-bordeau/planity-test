import { checkIsOverLapping } from "./overLappingHelper";

// createEventGroups creates columns corresponding to the different groups of events according to their position
// for each event, we check if the event can be in the first column (is it overLapping ?)
// if yes, we put in, else we check in the next column. if we can in next column, we put in, else we check in the next column, and so on...

const createEventGroups = (events) => {
  const columns = [[]];

  events.map((currentEvent) => {
    let isAddedInColumn = false;
    for (let column of columns) {
      let isOverLapping = false;
      isOverLapping = column.some((event) =>
        checkIsOverLapping(currentEvent, event)
      );
      if (!isOverLapping) {
        column.push(currentEvent);
        isAddedInColumn = true;
        break;
      }
    }
    if (!isAddedInColumn) {
      columns.push([currentEvent]);
    }
  });

  return columns;
};

export { createEventGroups, checkIsOverLapping };
