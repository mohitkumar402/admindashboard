# Admin Dashboard

A fully-featured **Admin Dashboard** web application developed using **React.js**, **MUI (Material UI)**, and **custom CSS** for style enhancement. This project is designed for managing customers, orders, employees, tasks, settings, and more with additional tools like charts, calendar, color pickers, and notifications.

## 🌐 Live Demo

**Deployed at:** https://admindashboard-pi-tan.vercel.app/

---

## 📂 Folder Structure

```
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── Cards
│   │   │   └── WidgetCard.jsx
│   │   ├── charts
│   │   │   ├── AreaChart.jsx
│   │   │   ├── BarChart.jsx
│   │   │   ├── Heatmap.jsx
│   │   │   ├── LineChart.jsx
│   │   │   ├── PieChart.jsx
│   │   │   ├── PyramidChart.jsx
│   │   │   ├── RadarChart.jsx
│   │   │   ├── StackedCharts.jsx
│   │   │   └── Treemap.jsx
│   │   ├── Header.jsx
│   │   ├── Table.jsx
│   │   └── ThemeToggle.jsx
│   ├── Context
│   │   ├── SidebarContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data
│   │   └── chartData.js
│   ├── pages
│   │   ├── account.jsx
│   │   ├── Calendar.jsx
│   │   ├── Colormapping.jsx
│   │   ├── Colorpicker.jsx
│   │   ├── Customer.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Editorpage.jsx
│   │   ├── Employee.jsx
│   │   ├── FinancialPage.jsx
│   │   ├── Kanban.jsx
│   │   ├── Notification.jsx
│   │   ├── Order.jsx
│   │   ├── Profile.jsx
│   │   └── Setting.jsx
│   ├── styles
│   │   ├── app.css
│   │   └── (individual CSS files for pages/components)
│   ├── App.js
│   └── App.test.js
├── README.md
└── LICENSE
```

---

## 🗂️ Components Overview

### ✅ Components

* **WidgetCard.jsx** → Dashboard widgets for quick statistics.
* **charts/** → Multiple types of charts using libraries like Chart.js or Recharts.
* **Header.jsx** → Sticky page header with title and navigation links.
* **ThemeToggle.jsx** → Light/Dark mode toggle.
* **Table.jsx** → Data display tables used across multiple pages.

### 📚 Context

* **SidebarContext.jsx** → Controls sidebar open/close state globally.
* **ThemeContext.jsx** → Maintains theme state globally.

### 📁 Data

* **chartData.js** → Static or dynamic data for chart rendering.

---

## 📃 Pages Breakdown

* **Dashboard.jsx** → Overview with stats, quick access links, and charts.
* **Customer.jsx** → Customer management page.
* **Order.jsx** → Orders management and tracking.
* **Employee.jsx** → Manage employees, add/view details.
* **Kanban.jsx** → Interactive task board with drag-and-drop.
* **Notification.jsx** → Real-time and historical notifications with highlighting.
* **Calendar.jsx** → Interactive calendar view with events.
* **Editorpage.jsx** → Rich text editor with formatting (custom built).
* **Colorpicker.jsx** → Custom color selection tool.
* **Colormapping.jsx** → Visual color schemes used in charts or tasks.
* **FinancialPage.jsx** → Financial data visualization.
* **Profile.jsx** → User profile details.
* **Setting.jsx** → Settings including account info, privacy, and support.
* **account.jsx** → User account management page.

---

## ⚙️ Features

* Custom **Kanban** board with modals
* Charts (Pie, Bar, Line, Heatmap, etc.)
* Employee management with tabs, filters, CSV export
* Dynamic **Editor** page
* Color Pickers, Notifications, Calendar
* Responsive design for all devices

---

## 🚀 Installation & Development

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/mohitkumar402/admin-dashboard.git
cd admin-dashboard
```

2️⃣ **Install Dependencies**

```bash
npm install
```

3️⃣ **Start Development Server**

```bash
npm start
```

---

## 📜 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 📧 Contact / Help

For any queries, raise an issue on [GitHub](https://github.com/your-username/admin-dashboard/issues)
or contact: `your-email@example.com`

---

## 📂 Additional Files

* **WORKS.txt** → Contains detailed descriptions of each implemented page, module-wise progress, and pending work.

> *Made with ❤️ by Your Name*
