import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // 👈 NEW
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/Calendar.css';
import { motion } from 'framer-motion'; // 👈 NEW

const Calendar = () => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Team Meeting', start: '2025-06-08T10:00:00' },
    { id: '2', title: 'Client Call', start: '2025-06-09T14:00:00' }
  ]);

  const handleDateClick = (info) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = {
        id: Date.now().toString(),
        title,
        start: info.dateStr
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (info) => {
    const confirmDelete = window.confirm(`Delete event "${info.event.title}"?`);
    if (confirmDelete) {
      setEvents(events.filter(event => event.id !== info.event.id));
    }
  };

  const handleEventChange = (changeInfo) => {
    const updatedEvents = events.map(ev =>
      ev.id === changeInfo.event.id
        ? { ...ev, start: changeInfo.event.startStr }
        : ev
    );
    setEvents(updatedEvents);
  };

  return (
    <motion.div
      className="main-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Editable Calendar</h1>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventDrop={handleEventChange} // 👈 for drag-drop
          editable={true}
          selectable={true}
          events={events}
          height="auto"
        />
      </div>
    </motion.div>
  );
};

export default Calendar;
