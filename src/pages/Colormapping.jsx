import React, { useState } from 'react';
import {
  Box, Typography, Paper, TextField, IconButton, Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import "../styles/Colormapping.css";

const initialColors = [
  { id: 1, name: 'Sales', color: '#f44336' },
  { id: 2, name: 'Marketing', color: '#2196f3' },
  { id: 3, name: 'Packaging', color: '#ff9800' },
  { id: 4, name: 'Data', color: '#4caf50' },
  { id: 5, name: 'Purchasing', color: '#9c27b0' },
  { id: 6, name: 'Supplier', color: '#3f51b5' },
  { id: 7, name: 'Manager', color: '#009688' }
];

const ColorMappingPage = () => {
  const [colorMappings, setColorMappings] = useState(initialColors);
  const [newMapping, setNewMapping] = useState({ name: '', color: '#000000' });

  const handleColorChange = (id, newColor) => {
    setColorMappings(colorMappings.map(item => item.id === id ? { ...item, color: newColor } : item));
  };

  const handleAddMapping = () => {
    if (newMapping.name.trim() === '') {
      alert("Please enter a name for the new mapping.");
      return;
    }
    const newId = colorMappings.length ? Math.max(...colorMappings.map(i => i.id)) + 1 : 1;
    setColorMappings([...colorMappings, { id: newId, ...newMapping }]);
    setNewMapping({ name: '', color: '#000000' });
  };

  const handleRemoveMapping = (id) => {
    setColorMappings(colorMappings.filter(item => item.id !== id));
  };

  return (
    <Box className="color-mapping-page">
      <Typography variant="h4" className="page-title">Color Mapping</Typography>

      <Paper className="add-mapping-card">
        <TextField
          label="Department / Status Name"
          value={newMapping.name}
          onChange={(e) => setNewMapping({ ...newMapping, name: e.target.value })}
          size="small"
        />
        <input
          type="color"
          value={newMapping.color}
          onChange={(e) => setNewMapping({ ...newMapping, color: e.target.value })}
          className="color-picker"
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddMapping}
        >
          Add
        </Button>
      </Paper>

      {colorMappings.map(item => (
        <Paper key={item.id} className="color-card">
          <Box className="color-preview" style={{ backgroundColor: item.color }} />
          <Typography className="color-name">{item.name}</Typography>
          <input
            type="color"
            value={item.color}
            onChange={(e) => handleColorChange(item.id, e.target.value)}
            className="color-picker"
          />
          <IconButton onClick={() => handleRemoveMapping(item.id)} className="delete-btn" color="error">
            <DeleteIcon />
          </IconButton>
        </Paper>
      ))}

      <Button
        variant="contained"
        startIcon={<ColorLensIcon />}
        className="save-btn"
        onClick={() => alert("Colors saved! (Implement saving logic if needed)")}
      >
        Save Colors
      </Button>
    </Box>
  );
};

export default ColorMappingPage;
