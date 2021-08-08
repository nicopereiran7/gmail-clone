import * as React from "react";
import { XGrid } from "@material-ui/x-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

export default function Table() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    editable: true,
  });

  return (
    <XGrid
      {...data}
      rowHeight={40}
      checkboxSelection
      disableSelectionOnClick
      pagination
    />
  );
}
