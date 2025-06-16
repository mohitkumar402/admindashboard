import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import '../styles/Colorpicker.css'; // Assuming you have a CSS file for styles

const SortableItem = ({ color, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="color-swatch"
      style={style}
    >
      <span className="color-code">{color}</span>
    </div>
  );
};

const AdvancedColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#ff6a00');
  const [colors, setColors] = useState([]);
  const [input, setInput] = useState(selectedColor);

  const handleAddColor = () => {
    if (input && /^#([0-9A-F]{3}){1,2}$/i.test(input)) {
      setColors([...colors, input]);
      setInput('');
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = colors.indexOf(active.id);
      const newIndex = colors.indexOf(over.id);
      setColors(arrayMove(colors, oldIndex, newIndex));
    }
  };

  return (
    <div className="advanced-color-picker">
      <h2>Interactive Color Palette Builder 🎨</h2>

      <div className="picker-container">
        <ChromePicker
          color={selectedColor}
          onChangeComplete={(color) => {
            setSelectedColor(color.hex);
            setInput(color.hex);
          }}
          disableAlpha
        />
      </div>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="#FFFFFF"
        />
        <button onClick={handleAddColor}>Add to Palette</button>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={colors} strategy={verticalListSortingStrategy}>
          <div className="swatch-list">
            {colors.map((color) => (
              <SortableItem key={color} id={color} color={color} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default AdvancedColorPicker;
