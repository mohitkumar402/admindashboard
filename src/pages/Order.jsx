import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, IconButton, Drawer, Divider, Chip, Modal, Grid
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Visibility, Edit, Delete, Download, Add } from '@mui/icons-material';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import "../styles/Order.css";

const initialOrders = [
  { id: 1, customer: 'Rajesh Kumar', amount: 1200, status: 'Delivered', date: '2025-04-25' },
  { id: 2, customer: 'Priya Sharma', amount: 2500, status: 'Pending', date: '2025-05-05' },
  { id: 3, customer: 'Amit Singh', amount: 1800, status: 'Cancelled', date: '2025-05-15' },
  { id: 4, customer: 'Sunita Rani', amount: 3200, status: 'Delivered', date: '2025-06-01' },
  { id: 5, customer: 'Rahul Verma', amount: 1500, status: 'Pending', date: '2025-06-10' },    
  { id: 6, customer: 'Neha Gupta', amount: 2000, status: 'Delivered', date: '2025-06-20' },
  { id: 7, customer: 'Vikram Yadav', amount: 3000, status: 'Pending', date: '2025-07-01' },
  { id: 8, customer: 'Anjali Mehta', amount: 2200, status: 'Cancelled', date: '2025-07-15' },
  { id: 9, customer: 'Suresh Patel', amount: 2700, status: 'Delivered', date: '2025-08-05' },
  { id: 10, customer: 'Kavita Singh', amount: 1600, status: 'Pending', date: '2025-08-20' },
  { id: 11, customer: 'Rohit Choudhary', amount: 2900, status: 'Delivered', date: '2025-09-01' },
  { id: 12, customer: 'Geeta Sharma', amount: 2100, status: 'Pending', date: '2025-09-10' },
  { id: 13, customer: 'Arun Kumar', amount: 2300, status: 'Cancelled', date: '2025-09-20' },
  { id: 14, customer: 'Pooja Verma', amount: 2800, status: 'Delivered', date: '2025-10-01' },
  { id: 15, customer: 'Sanjay Gupta', amount: 1900, status: 'Pending', date: '2025-10-15' },

];

const getStatusColor = (status) => {
  if (status === 'Delivered') return 'success';
  if (status === 'Pending') return 'warning';
  if (status === 'Cancelled') return 'error';
  return 'default';
};

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [addOrderOpen, setAddOrderOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customer: '',
    amount: '',
    status: 'Pending',
    date: '',
  });

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.date.includes(searchQuery)
  );

  const handleView = (order) => {
    setSelectedOrder(order);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedOrder(null);
  };

  const exportCSV = () => {
    const csv = Papa.unparse(filteredOrders);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'orders.csv');
  };

  const handleAddOrder = () => {
    if (!newOrder.customer || !newOrder.amount || !newOrder.date) {
      alert('Please fill all fields');
      return;
    }
    const nextId = orders.length ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    setOrders([...orders, { ...newOrder, id: nextId }]);
    setNewOrder({ customer: '', amount: '', status: 'Pending', date: '' });
    setAddOrderOpen(false);
  };

  const handleDeleteOrder = (id) => {
    if (window.confirm("Are you sure to delete this order?")) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 100 },
    { field: 'customer', headerName: 'Customer', width: 180 },
    { field: 'amount', headerName: 'Amount (₹)', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => (
        <Chip label={params.value} color={getStatusColor(params.value)} size="small" />
      ),
    },
    { field: 'date', headerName: 'Date', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 160,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <IconButton onClick={() => handleView(params.row)} color="primary"><Visibility /></IconButton>
          <IconButton color="warning"><Edit /></IconButton>
          <IconButton onClick={() => handleDeleteOrder(params.row.id)} color="error"><Delete /></IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box className="order-page">
      <Box className="order-header">
        <Typography variant="h4">Orders Management</Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<Add />}
          onClick={() => setAddOrderOpen(true)}
          className="add-order-btn"
        >
          Add Order
        </Button>
      </Box>

      <Box className="order-actions">
        <TextField
          variant="outlined"
          placeholder="Search (Customer, Status, Date)"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="order-search"
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Download />}
          onClick={exportCSV}
          className="export-btn"
        >
          Export CSV
        </Button>
      </Box>

      <DataGrid
        rows={filteredOrders}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        className="order-table"
      />

      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <Box sx={{ width: 350, p: 3 }}>
          <Typography variant="h5" mb={2}>Order Details</Typography>
          <Divider />
          {selectedOrder && (
            <Box mt={2}>
              <Typography><strong>Order ID:</strong> {selectedOrder.id}</Typography>
              <Typography><strong>Customer:</strong> {selectedOrder.customer}</Typography>
              <Typography><strong>Amount:</strong> ₹{selectedOrder.amount}</Typography>
              <Typography><strong>Status:</strong> {selectedOrder.status}</Typography>
              <Typography><strong>Date:</strong> {selectedOrder.date}</Typography>
            </Box>
          )}
        </Box>
      </Drawer>

      <Modal open={addOrderOpen} onClose={() => setAddOrderOpen(false)}>
        <Box className="add-order-modal">
          <Typography variant="h6" mb={2}>Add New Order</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Customer Name"
                fullWidth
                value={newOrder.customer}
                onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Amount (₹)"
                type="number"
                fullWidth
                value={newOrder.amount}
                onChange={(e) => setNewOrder({ ...newOrder, amount: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={newOrder.date}
                onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleAddOrder}
          >
            Save Order
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Orders;
