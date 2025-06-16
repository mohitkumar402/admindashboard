import React, { useState } from 'react';
import {
  Box, Tabs, Tab, Typography, Paper, Button, Table, TableHead, TableRow, TableCell, TableBody,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem
} from '@mui/material';
import "../styles/Employee.css";

const dummyEmployees = [
  { id: 1, name: 'Ravi Sharma', department: 'Sales', workingOn: 'Client Acquisition' },
  { id: 2, name: 'Neha Gupta', department: 'Marketing', workingOn: 'Social Media Ads' },
  { id: 3, name: 'Amit Verma', department: 'Packaging', workingOn: 'Inventory Packing' },
  { id: 4, name: 'Sonal Patel', department: 'Data', workingOn: 'Database Management' },
  { id: 5, name: 'Karan Singh', department: 'Purchasing', workingOn: 'Supplier Negotiation' },
  { id: 6, name: 'Priya Chauhan', department: 'Supplier', workingOn: 'Vendor Relations' },
  { id: 7, name: 'Rajesh Kumar', department: 'Manager', workingOn: 'Team Management' },
];

const departments = ['All', 'Sales', 'Marketing', 'Packaging', 'Data', 'Purchasing', 'Supplier', 'Manager'];

const EmployeePage = () => {
  const [tab, setTab] = useState(0);
  const [employees, setEmployees] = useState(dummyEmployees);
  const [newEmployee, setNewEmployee] = useState({ name: '', department: 'Sales', workingOn: '' });
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const filteredEmployees = tab === 0
    ? employees
    : employees.filter(emp => emp.department === departments[tab]);

  const handleAddEmployee = () => {
    if (newEmployee.name.trim() === '' || newEmployee.workingOn.trim() === '') {
      alert("Please fill in all fields.");
      return;
    }
    const newId = employees.length + 1;
    setEmployees([...employees, { ...newEmployee, id: newId }]);
    setNewEmployee({ name: '', department: 'Sales', workingOn: '' });
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Department', 'Working On'];
    const rows = filteredEmployees.map(emp => [emp.name, emp.department, emp.workingOn]);
    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'employees.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box className="employee-page" p={2}>
      <Typography variant="h4" className="page-title">Employee Management</Typography>

      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} variant="scrollable" scrollButtons="auto" className="tabs">
        {departments.map((dept, index) => (
          <Tab key={index} label={dept} />
        ))}
      </Tabs>

      <Paper className="form-card">
        <Typography variant="h6" mb={1}>Add New Employee</Typography>
        <Box className="form-fields">
          <TextField
            label="Employee Name"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            size="small"
          />
          <TextField
            select
            label="Department"
            value={newEmployee.department}
            onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
            size="small"
          >
            {departments.slice(1).map((dept, index) => (
              <MenuItem key={index} value={dept}>{dept}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Working On"
            value={newEmployee.workingOn}
            onChange={(e) => setNewEmployee({ ...newEmployee, workingOn: e.target.value })}
            size="small"
          />
          <Button variant="contained" onClick={handleAddEmployee}>Add</Button>
        </Box>
      </Paper>

      <Button variant="outlined" onClick={exportToCSV} className="export-btn">Export CSV</Button>

      <Paper className="employee-table">
        <Typography variant="h6" mb={1}>Employee List</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Department</strong></TableCell>
              <TableCell><strong>Working On</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map(emp => (
              <TableRow
                key={emp.id}
                hover
                onClick={() => setSelectedEmployee(emp)}
                className="table-row"
              >
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.workingOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Employee Profile Modal */}
      <Dialog open={Boolean(selectedEmployee)} onClose={() => setSelectedEmployee(null)}>
        <DialogTitle>Employee Profile</DialogTitle>
        <DialogContent dividers>
          {selectedEmployee && (
            <Box className="profile-details">
              <Typography><strong>Name:</strong> {selectedEmployee.name}</Typography>
              <Typography><strong>Department:</strong> {selectedEmployee.department}</Typography>
              <Typography><strong>Working On:</strong> {selectedEmployee.workingOn}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedEmployee(null)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmployeePage;
