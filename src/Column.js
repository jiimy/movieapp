import React from "react";

import  DndDroppable from "./common/DndDroppable";
import { Item } from "./Item";
import { getDragGroupByColumn, getSelectedMap } from "./common";

export default function Column({
  columnId,
  items = [],
  selectedIds = [],
  draggingItemId,
  multiSelectTo,
  toggleSelection,
  toggleSelectionInGroup,
  type
}) {
  return (
    <DndDroppable droppableId={columnId} type={type}>
      {(provided, snapshot) =>
        items.map((item, index) => {
          const isSelected = Boolean(getSelectedMap(selectedIds)[item.id]);
          const dragGroup = getDragGroupByColumn(
            provided.droppableProps["data-rbd-droppable-id"]
          );
          const isGhosting =
            isSelected &&
            Boolean(draggingItemId) &&
            draggingItemId !== item.id &&
            dragGroup?.name === type;
          return (
            <Item
              item={item}
              index={index}
              key={item.id}
              isSelected={isSelected}
              isGhosting={isGhosting}
              selectionCount={selectedIds.length}
              toggleSelection={toggleSelection}
              toggleSelectionInGroup={toggleSelectionInGroup}
              multiSelectTo={multiSelectTo}
            />
          );
        })
      }
    </DndDroppable>
  );
}
