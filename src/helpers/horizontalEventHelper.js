import { createEventGroups } from "./groupsEventHelper";
import { getNbOverLappingInNextColumns } from "./overLappingHelper";


const defineHorizontalProperties = (events, windowWidth) => {
  const columns = createEventGroups(events, windowWidth);

  columns.forEach((currentColumn, indexCurrentColumn) => {
    for (let event of currentColumn) {
      event.width = defineWidth(
        event,
        indexCurrentColumn,
        columns,
        windowWidth
      );
      event.positionX = definePositionX(
        event.width,
        indexCurrentColumn
      );
    }
  });
};


const defineWidth = (event, indexCurrentColumn, columns, windowWidth) => {
  const nbOverLappingInNextColumns = getNbOverLappingInNextColumns(
    event,
    indexCurrentColumn,
    columns
  );

  // to find out the ratio between event width and total width, we count the total number of columns in the row
  // (next columns  + current column + previous columns)
  const ratioWidth =
    1 / (nbOverLappingInNextColumns + 1 + indexCurrentColumn);

  return windowWidth * ratioWidth;
};


const definePositionX = (width, indexCurrentColumn) => {

  return width * indexCurrentColumn;
};

export { defineHorizontalProperties, defineWidth, definePositionX };
