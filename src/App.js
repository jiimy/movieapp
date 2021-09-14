import React, { Component } from "react";

import {DndContext} from "./common";
import Column from "./Column";

const Container = ({ children }) => (
  <div
    style={{
      display: "flex",
      height: "calc(100vh - 16px)", // height minus padding
      userSelect: "none"
    }}
  >
    {children}
  </div>
);

const getItems = (dragGroup, columnId) => {
  console.log({ dragGroup });
  console.log({ columnId });
  return dragGroup?.columns[columnId].itemIds?.map(
    (id) => dragGroup.itemsObject[id]
  );
};

export default class App extends Component {
  render() {
    return (
      <DndContext>
        {({
          draggingItemId,
          dragGroupBreakdowns,
          dragGroupManagerList,
          selectedBreakdownIds,
          selectedManagerListIds,
          toggleSelection,
          toggleSelectionInGroup,
          multiSelectTo
        }) => (
          <Container>
            <Column
              type="dragGroupBreakdowns"
              columnId="todo"
              items={getItems(dragGroupBreakdowns, "todo")}
              selectedIds={selectedBreakdownIds}
              draggingItemId={draggingItemId}
              toggleSelection={toggleSelection}
              toggleSelectionInGroup={toggleSelectionInGroup}
              multiSelectTo={multiSelectTo}
            />
            <Column
              type="dragGroupBreakdowns"
              columnId="inprogress"
              items={getItems(dragGroupBreakdowns, "inprogress")}
              selectedIds={selectedBreakdownIds}
              draggingItemId={draggingItemId}
              toggleSelection={toggleSelection}
              toggleSelectionInGroup={toggleSelectionInGroup}
              multiSelectTo={multiSelectTo}
            />
            <Column
              type="dragGroupBreakdowns"
              columnId="completed"
              items={getItems(dragGroupBreakdowns, "completed")}
              selectedIds={selectedBreakdownIds}
              draggingItemId={draggingItemId}
              toggleSelection={toggleSelection}
              toggleSelectionInGroup={toggleSelectionInGroup}
              multiSelectTo={multiSelectTo}
            />
            <Column
              type="dragGroupBreakdowns"
              columnId="verified"
              items={getItems(dragGroupBreakdowns, "verified")}
              selectedIds={selectedBreakdownIds}
              draggingItemId={draggingItemId}
              toggleSelection={toggleSelection}
              toggleSelectionInGroup={toggleSelectionInGroup}
              multiSelectTo={multiSelectTo}
            />
          </Container>
        )}
      </DndContext>
    );
  }
}

// import React from 'react';
// import { Tester }  from './income';

// const App = () => {
//   return (
//     <div>
//       테스터 불러오기
//       <Tester/>
//     </div>
//   );
// };

// export default App;
