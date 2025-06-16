import React, { useState } from 'react';
import {
  Box, Tabs, Tab, Typography, Paper, Button, Table, TableHead, TableRow, TableCell, TableBody, Collapse
} from '@mui/material';
import "../styles/Customer.css";

const dummyCustomersData = [
    { id: 1, name: 'Rajesh Kumar', type: 'Retail', orders: 5, complaints: 2, failures: 1 },
    { id: 2, name: 'Priya Sharma', type: 'Online', orders: 3, complaints: 0, failures: 0 },
    { id: 3, name: 'Amit Singh', type: 'Local', orders: 8, complaints: 1, failures: 2 },
    { id: 4, name: 'Sunita Rani', type: 'Retail', orders: 6, complaints: 3, failures: 0 },
    { id: 5, name: 'Rahul Verma', type: 'Online', orders: 4, complaints: 0, failures: 1 },
    { id: 6, name: 'Neha Gupta', type: 'Local', orders: 7, complaints: 2, failures: 1 },
    { id: 7, name: 'Vikram Yadav', type: 'Retail', orders: 2, complaints: 0, failures: 0 },
    { id: 8, name: 'Anjali Mehta', type: 'Online', orders: 5, complaints: 1, failures: 3 },
    { id: 9, name: 'Suresh Patel', type: 'Local', orders: 9, complaints: 0, failures: 2 },
    { id: 10, name: 'Kavita Singh', type: 'Retail', orders: 1, complaints: 4, failures: 0 },
    { id: 11, name: 'Rohit Choudhary', type: 'Online', orders: 3, complaints: 2, failures: 1 },
    { id: 12, name: 'Geeta Sharma', type: 'Local', orders: 6, complaints: 0, failures: 0 },
    { id: 13, name: 'Arun Kumar', type: 'Retail', orders: 4, complaints: 1, failures: 2 },
    { id: 14, name: 'Pooja Verma', type: 'Online', orders: 8, complaints: 3, failures: 0 },
    { id: 15, name: 'Sanjay Gupta', type: 'Local', orders: 5, complaints: 0, failures: 1 },
    { id: 16, name: 'Rina Patel', type: 'Retail', orders: 2, complaints: 2, failures: 0 },
    { id: 17, name: 'Karan Mehta', type: 'Online', orders: 7, complaints: 1, failures: 3 },
    { id: 18, name: 'Nisha Yadav', type: 'Local', orders: 3, complaints: 0, failures: 2 },
    { id: 19, name: 'Deepak Singh', type: 'Retail', orders: 6, complaints: 4, failures: 1 },
    { id: 20, name: 'Sonia Sharma', type: 'Online', orders: 5, complaints: 0, failures: 0 },
    { id: 21, name: 'Vikas Kumar', type: 'Local', orders: 4, complaints: 2, failures: 1 },
    { id: 22, name: 'Meera Verma', type: 'Retail', orders: 8, complaints: 3, failures: 0 },
    { id: 23, name: 'Anil Patel', type: 'Online', orders: 2, complaints: 0, failures: 2 },
    { id: 24, name: 'Rita Gupta', type: 'Local', orders: 9, complaints: 1, failures: 1 },
    { id: 25, name: 'Ajay Choudhary', type: 'Retail', orders: 1, complaints: 0, failures: 0 },
    { id: 26, name: 'Sita Mehta', type: 'Online', orders: 3, complaints: 2, failures: 1 },
    { id: 27, name: 'Raj Kumar', type: 'Local', orders: 6, complaints: 0, failures: 3 },
    { id: 28, name: 'Priti Singh', type: 'Retail', orders: 4, complaints: 1, failures: 0 },
    { id: 29, name: 'Kishore Yadav', type: 'Online', orders: 5, complaints: 3, failures: 2 },
    { id: 30, name: 'Lata Sharma', type: 'Local', orders: 7, complaints: 0, failures: 1 }
];
const dummyOrders = [
    { id: 1, customer: 'Rajesh Kumar', frequency: 'Weekly', totalOrders: 5, lastOrder: '2025-04-25' },  
    { id: 2, customer: 'Priya Sharma', frequency: 'Monthly', totalOrders: 3, lastOrder: '2025-05-05' },
    { id: 3, customer: 'Amit Singh', frequency: 'Bi-Weekly', totalOrders: 8, lastOrder: '2025-05-15' },
    { id: 4, customer: 'Sunita Rani', frequency: 'Weekly', totalOrders: 6, lastOrder: '2025-06-01' },
    { id: 5, customer: 'Rahul Verma', frequency: 'Monthly', totalOrders: 4, lastOrder: '2025-06-10' },
    { id: 6, customer: 'Neha Gupta', frequency: 'Bi-Weekly', totalOrders: 7, lastOrder: '2025-06-20' },
    { id: 7, customer: 'Vikram Yadav', frequency: 'Weekly', totalOrders: 2, lastOrder: '2025-07-01' },
    { id: 8, customer: 'Anjali Mehta', frequency: 'Monthly', totalOrders: 5, lastOrder: '2025-07-15' },
    { id: 9, customer: 'Suresh Patel', frequency: 'Bi-Weekly', totalOrders: 9, lastOrder: '2025-08-05' },
    { id: 10, customer: 'Kavita Singh', frequency: 'Weekly', totalOrders: 1, lastOrder: '2025-08-20' },
    { id: 11, customer: 'Rohit Choudhary', frequency: 'Monthly', totalOrders: 3, lastOrder: '2025-09-01' },
    { id: 12, customer: 'Geeta Sharma', frequency: 'Bi-Weekly', totalOrders: 6, lastOrder: '2025-09-10' },
    { id: 13, customer: 'Arun Kumar', frequency: 'Weekly', totalOrders: 4, lastOrder: '2025-09-20' },
    { id: 14, customer: 'Pooja Verma', frequency: 'Monthly', totalOrders: 8, lastOrder: '2025-10-01' },
    { id: 15, customer: 'Sanjay Gupta', frequency: 'Bi-Weekly', totalOrders: 5, lastOrder: '2025-10-15' }
];
const dummyMissing = [
    { id: 1, customer: 'Rajesh Kumar', missingOrders: 2, lastMissed: '2025-04-20' },
    { id: 2, customer: 'Priya Sharma', missingOrders: 1, lastMissed: '2025-05-01' },
    { id: 3, customer: 'Amit Singh', missingOrders: 3, lastMissed: '2025-05-10' },
    { id: 4, customer: 'Sunita Rani', missingOrders: 1, lastMissed: '2025-05-25' },
    { id: 5, customer: 'Rahul Verma', missingOrders: 0, lastMissed: '2025-06-05' },
    { id: 6, customer: 'Neha Gupta', missingOrders: 2, lastMissed: '2025-06-15' },
    { id: 7, customer : 'Vikram Yadav', missingOrders: 0, lastMissed: '2025-07-05' },
    { id: 8, customer: 'Anjali Mehta', missingOrders: 1, lastMissed: '2025-07-20' },
    { id: 9, customer: 'Suresh Patel', missingOrders: 3, lastMissed: '2025-08-10' },
    { id: 10, customer: 'Kavita Singh', missingOrders: 0, lastMissed: '2025-08-25' },
    { id: 11, customer: 'Rohit Choudhary', missingOrders: 2, lastMissed: '2025-09-05' },
    { id: 12, customer: 'Geeta Sharma', missingOrders: 1, lastMissed: '2025-09-15' },
    { id: 13, customer: 'Arun Kumar', missingOrders: 0, lastMissed: '2025-09-25' },
    { id: 14, customer: 'Pooja Verma', missingOrders: 2, lastMissed: '2025-10-05' },
    { id: 15, customer: 'Sanjay Gupta', missingOrders: 1, lastMissed: '2025-10-20' }
];
const dummyComplaints = [   
    { id: 1, customer: 'Rajesh Kumar', complaint: 'Late delivery', date: '2025-04-22' },
    { id: 2, customer: 'Priya Sharma', complaint: 'Damaged product', date: '2025-05-02' },
    { id: 3, customer: 'Amit Singh', complaint: 'Wrong item received', date: '2025-05-12' },    
    { id: 4, customer: 'Sunita Rani', complaint: 'Poor customer service', date: '2025-05-27' },
    { id: 5, customer: 'Rahul Verma', complaint: 'Product not as described', date: '2025-06-07' },
    { id: 6, customer: 'Neha Gupta', complaint: 'Late delivery', date: '2025-06-17' },
    { id: 7, customer : 'Vikram Yadav', complaint: 'Damaged product', date: '2025-07-07' },
    { id: 8, customer: 'Anjali Mehta', complaint: 'Wrong item received', date: '2025-07-22' },
    { id: 9, customer: 'Suresh Patel', complaint: 'Poor customer service', date: '2025-08-12' },
    { id: 10, customer: 'Kavita Singh', complaint: 'Product not as described', date: '2025-08-27' },
    { id: 11, customer: 'Rohit Choudhary', complaint: 'Late delivery', date: '2025-09-07' },
    { id: 12, customer: 'Geeta Sharma', complaint: 'Damaged product', date: '2025-09-17' },
    { id: 13, customer: 'Arun Kumar', complaint: 'Wrong item received', date: '2025-09-27' },
    { id: 14, customer: 'Pooja Verma', complaint: 'Poor customer service', date: '2025-10-07' },
    { id: 15, customer : 'Sanjay Gupta', complaint : 'Product not as described', date : '2025-10-22' },
    { id: 16, customer: 'Rina Patel', complaint: 'Late delivery', date: '2025-10-25' },
    { id: 17, customer: 'Karan Mehta', complaint: 'Damaged product', date: '2025-10-30' },
    { id: 18, customer: 'Nisha Yadav', complaint: 'Wrong item received', date: '2025-11-05' },
    { id: 19, customer: 'Deepak Singh', complaint: 'Poor customer service', date: '2025-11-10' },
    { id: 20, customer: 'Sonia Sharma', complaint: 'Product not as described', date: '2025-11-15' } ,
];
const dummyFailures = [
    { id: 1, customer: 'Rajesh Kumar', failureReason: 'Payment failed', date: '2025-04-23' },
    { id: 2, customer: 'Priya Sharma', failureReason: 'Out of stock', date: '2025-05-03' },
    { id: 3, customer: 'Amit    Singh', failureReason: 'Payment failed', date: '2025-05-13' },  
    { id: 4, customer: 'Sunita Rani', failureReason: 'Out of stock', date: '2025-05-28' },
    { id: 5, customer: 'Rahul Verma', failureReason: 'Payment failed', date: '2025-06-08' },
    { id: 6, customer: 'Neha Gupta', failureReason: 'Out of stock', date: '2025-06-18' },
    { id: 7, customer : 'Vikram Yadav', failureReason: 'Payment failed', date: '2025-07-08' },
    { id: 8, customer: 'Anjali Mehta', failureReason: 'Out of stock', date: '2025-07-23' },
    { id: 9, customer: 'Suresh Patel', failureReason: 'Payment failed', date: '2025-08-13' },
    { id: 10, customer: 'Kavita Singh', failureReason: 'Out of stock', date: '2025-08-28' },
    { id: 11, customer: 'Rohit Choudhary', failureReason: 'Payment failed', date: '2025-09-08' },
    { id: 12, customer : 'Geeta Sharma', failureReason : 'Out of stock', date : '2025-09-18' },
    { id: 13, customer : 'Arun Kumar', failureReason : 'Payment failed', date : '2025-09-28' },
    { id: 14, customer : 'Pooja Verma', failureReason : 'Out of stock', date : '2025-10-08' },
    { id: 15, customer : 'Sanjay Gupta', failureReason : 'Payment failed', date : '2025-10-23' },
    { id: 16, customer: 'Rina Patel', failureReason: 'Out of stock', date: '2025-10-26' },
    { id: 17, customer: 'Karan Mehta', failureReason: 'Payment failed', date: '2025-10-31' },
    { id: 18, customer: 'Nisha Yadav', failureReason: 'Out of stock', date: '2025-11-06' },
    { id: 19, customer: 'Deepak Singh', failureReason: 'Payment failed', date: '2025-11-11' },
    { id: 20, customer: 'Sonia Sharma', failureReason: 'Out of stock', date: '2025-11-16' }
];
const  customerlist= [
    { id: 1, name: 'Rajesh Kumar', type: 'Retail', orders: 5, complaints: 2, failures: 1 },     
    { id: 2, name: 'Priya Sharma', type: 'Online', orders: 3, complaints: 0, failures: 0 },
    { id: 3, name: 'Amit Singh', type: 'Local', orders: 8, complaints: 1, failures: 2 },
    { id: 4, name: 'Sunita Rani', type: 'Retail', orders: 6, complaints: 3, failures: 0 },
    { id: 5, name: 'Rahul Verma', type: 'Online', orders: 4, complaints: 0, failures: 1 },
    { id: 6, name: 'Neha Gupta', type: 'Local', orders: 7, complaints: 2, failures: 1 },
    { id: 7, name: 'Vikram Yadav', type: 'Retail', orders: 2, complaints: 0, failures: 0 },
    { id: 8, name: 'Anjali Mehta', type: 'Online', orders: 5, complaints: 1, failures: 3 },
    { id: 9, name: 'Suresh Patel', type: 'Local', orders: 9, complaints: 0, failures: 2 },
    { id: 10, name: 'Kavita Singh', type: 'Retail', orders: 1, complaints: 4, failures: 0 }
];
const CustomerPage = () => {
  const [tab, setTab] = useState(0);
  const [customers, setCustomers] = useState(dummyCustomersData);
  const [newCustomer, setNewCustomer] = useState({ name: '', type: 'Retail', orders: 0, complaints: 0, failures: 0 });
  const [showMissing, setShowMissing] = useState(false);
  const [showComplaints, setShowComplaints] = useState(false);
  const [showFailures, setShowFailures] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customers.filter(c =>
    ((tab === 0 && c.type === 'Retail') ||
      (tab === 1 && c.type === 'Online') ||
      (tab === 2 && c.type === 'Local')) &&
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ['Customer', 'Type', 'Orders', 'Complaints', 'Failures'];
    const rows = filteredCustomers.map(c => [c.name, c.type, c.orders, c.complaints, c.failures]);
    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'customers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddCustomer = () => {
    if (newCustomer.name.trim() === '') {
      alert("Customer name cannot be empty.");
      return;
    }
    const newId = customers.length + 1;
    setCustomers([...customers, { ...newCustomer, id: newId }]);
    setNewCustomer({ name: '', type: 'Retail', orders: 0, complaints: 0, failures: 0 });
  };

  return (
    <Box className="customer-page">
      <Typography variant="h4" mb={2} textAlign="center">Customer Details</Typography>

      {/* ✅ Search bar and Export in single row */}
      <Box className="export-add-container">
        <input
          type="text"
          placeholder="Search by Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <Button variant="outlined" color="primary" onClick={exportToCSV}>
          Export CSV
        </Button>
      </Box>

      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
        <Tab label="Retail Customers" />
        <Tab label="Online Customers" />
        <Tab label="Local Customers" />
      </Tabs>

      {/* ✅ Add Customer form */}
      <Box className="add-customer-form">
        <input
          type="text"
          placeholder="Customer Name"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
        />
        <select
          value={newCustomer.type}
          onChange={(e) => setNewCustomer({ ...newCustomer, type: e.target.value })}
        >
          <option value="Retail">Retail</option>
          <option value="Online">Online</option>
          <option value="Local">Local</option>
        </select>
        <Button variant="contained" onClick={handleAddCustomer}>
          Add Customer
        </Button>
      </Box>

      {/* ✅ Customer Table */}
      <Paper className="customer-table">
        <Typography variant="h6" mb={1}>Customer List</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Orders</TableCell>
              <TableCell>Complaints</TableCell>
              <TableCell>Failures</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map(customer => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.type}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>{customer.complaints}</TableCell>
                <TableCell>{customer.failures}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* ✅ Order Frequency Table */}
      <Paper className="orders-table">
        <Typography variant="h6" mb={1}>Order Frequency</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Frequency</TableCell>
              <TableCell>Total Orders</TableCell>
              <TableCell>Last Order Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.frequency}</TableCell>
                <TableCell>{order.totalOrders}</TableCell>
                <TableCell>{order.lastOrder}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* ✅ Toggle Buttons */}
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <Button variant="contained" color="error" onClick={() => setShowMissing(!showMissing)}>
          {showMissing ? "Hide Missing" : "Show Missing Orders"}
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setShowComplaints(!showComplaints)}>
          {showComplaints ? "Hide Complaints" : "Show Complaints"}
        </Button>
        <Button variant="contained" color="warning" onClick={() => setShowFailures(!showFailures)}>
          {showFailures ? "Hide Failures" : "Show Failures"}
        </Button>
      </Box>

      {/* ✅ Collapsible Tables */}
      <Collapse in={showMissing}>
        <Paper className="extra-table" sx={{ borderColor: '#f44336' }}>
          <Typography variant="h6" mb={1} color="error">Missing Orders</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Missing Count</TableCell>
                <TableCell>Last Missed Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyMissing.map(miss => (
                <TableRow key={miss.id}>
                  <TableCell>{miss.customer}</TableCell>
                  <TableCell>{miss.missingOrders}</TableCell>
                  <TableCell>{miss.lastMissed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Collapse>

      <Collapse in={showComplaints}>
        <Paper className="extra-table" sx={{ borderColor: '#9c27b0' }}>
          <Typography variant="h6" mb={1} color="secondary">Complaints</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Complaint</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyComplaints.map(comp => (
                <TableRow key={comp.id}>
                  <TableCell>{comp.customer}</TableCell>
                  <TableCell>{comp.complaint}</TableCell>
                  <TableCell>{comp.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Collapse>

      <Collapse in={showFailures}>
        <Paper className="extra-table" sx={{ borderColor: '#ff9800' }}>
          <Typography variant="h6" mb={1} color="warning.main">Failures</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyFailures.map(fail => (
                <TableRow key={fail.id}>
                  <TableCell>{fail.customer}</TableCell>
                  <TableCell>{fail.failureReason}</TableCell>
                  <TableCell>{fail.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default CustomerPage;
