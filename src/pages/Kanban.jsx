import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


const initialTasks = {
  todo: [
    { id: '1', content: 'Design UI' },
    { id: '2', content: 'Set up backend' },
  ],
  inProgress: [],
  done: [],
};

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = [...tasks[source.droppableId]];
    const destCol = [...tasks[destination.droppableId]];
    const [moved] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, moved);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    });
  };

  const addTask = (column) => {
    const content = prompt('Enter task:');
    if (content) {
      const newTask = { id: Date.now().toString(), content };
      setTasks({ ...tasks, [column]: [...tasks[column], newTask] });
    }
  };

  return (
    <div className="card">
      <h3>Kanban Board</h3>
      <button onClick={() => addTask('todo')}>+ Add to Todo</button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', gap: '20px' }}>
          {Object.entries(tasks).map(([columnId, items]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ background: '#eee', padding: '10px', width: '250px', borderRadius: '8px' }}
                >
                  <h4>{columnId}</h4>
                  {items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            padding: '10px',
                            margin: '10px 0',
                            background: 'white',
                            borderRadius: '4px',
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
