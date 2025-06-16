import React, { useState } from 'react';
import {
  Box, Typography, Paper, Button, IconButton, Badge, Chip
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoneIcon from '@mui/icons-material/Done';
import "../styles/Notifications.css";

const initialNotifications = [
  { id: 1, title: 'Server Backup Completed', type: 'info', important: false, read: false },
  { id: 2, title: 'New Employee Added to Marketing', type: 'task', important: false, read: false },
  { id: 3, title: '⚠️ Work on Database - Urgent!', type: 'alert', important: true, read: false },
  { id: 4, title: 'Supplier Data Updated', type: 'info', important: false, read: false },
  { id: 5, title: 'Packaging delay reported', type: 'alert', important: false, read: false },
];

const typeColors = {
  info: 'primary',
  alert: 'error',
  task: 'success'
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(notifications.map((n) => n.id === id ? { ...n, read: true } : n));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Box className="notifications-page">
      <Box className="header-row">
        <Typography variant="h4" className="page-title">Notifications</Typography>
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon fontSize="large" />
        </Badge>
      </Box>

      {notifications.map((notif) => (
        <Paper
          key={notif.id}
          className={`notification-card ${notif.read ? 'read' : ''} ${notif.important ? 'important-blink' : ''}`}
          elevation={notif.important ? 6 : 2}
        >
          <Box className="notification-content">
            <Chip
              label={notif.type.toUpperCase()}
              color={typeColors[notif.type]}
              size="small"
              className="chip"
            />
            <Typography className="notification-text">{notif.title}</Typography>
          </Box>
          {!notif.read && (
            <IconButton onClick={() => markAsRead(notif.id)} color="success">
              <DoneIcon />
            </IconButton>
          )}
        </Paper>
      ))}

      <Button
        variant="outlined"
        color="primary"
        className="mark-all"
        onClick={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
      >
        Mark All as Read
      </Button>
    </Box>
  );
};

export default NotificationsPage;
