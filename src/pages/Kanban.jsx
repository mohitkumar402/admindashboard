import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
 // Assuming you have a CSS file for styling
import '../styles/kanban.css'; // Importing the Kanban specific styles

const initialColumns = {
  todo: { name: 'To Do', items: [] },
  inProgress: { name: 'In Progress', items: [] },
  done: { name: 'Completed', items: [] },
  plan: { name: 'Monthly Plan', items: [] },
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [targetColumn, setTargetColumn] = useState('');

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = [...columns[source.droppableId].items];
    const destCol = [...columns[destination.droppableId].items];
    const [removed] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: { ...columns[source.droppableId], items: sourceCol },
      [destination.droppableId]: { ...columns[destination.droppableId], items: destCol },
    });
  };

  const openAddTaskModal = (colId) => {
    setTargetColumn(colId);
    setNewTask('');
    setShowModal(true);
  };

  const addTask = () => {
    if (newTask.trim()) {
      const newItem = { id: Date.now().toString(), content: newTask };
      const updated = [...columns[targetColumn].items, newItem];
      setColumns({
        ...columns,
        [targetColumn]: { ...columns[targetColumn], items: updated },
      });
      setShowModal(false);
    }
  };

  return (
    <div className="kanban-container">
      <h1 className="kanban-title">Kanban Board</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {Object.entries(columns).map(([colId, col]) => (
            <Droppable droppableId={colId} key={colId}>
              {(provided) => (
                <div className="kanban-column" {...provided.droppableProps} ref={provided.innerRef}>
                  <div className="column-header">
                    <h3>{col.name}</h3>
                    <button className="add-task-btn" onClick={() => openAddTaskModal(colId)}>+ Add Task</button>
                  </div>
                  <div className="tasks-list">
                    {col.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            className="task-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Task</h2>
            <textarea
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task details..."
            />
            <div className="modal-actions">
              <button onClick={addTask} className="btn-primary">Add</button>
              <button onClick={() => setShowModal(false)} className="btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kanban;
