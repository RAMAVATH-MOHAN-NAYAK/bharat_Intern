import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store/store.js'; // We'll need to create this
import Layout from './components/Layout.jsx';
import LandingPage from './components/LandingPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import EventList from './components/EventList.jsx';
import CreateEvent from './components/CreateEvent.jsx';
import EventDetails from './components/EventDetails.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Analytics from './components/Analytics.jsx';
// import Settings from './components/Settings';
import { AnimatePresence } from 'framer-motion';

function App() {
  const isAuthenticated = useStore(state => state.isAuthenticated);

  return (
    <Router>
      <AnimatePresence mode='wait'>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route element={<Layout />}>
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/events"
              element={
                isAuthenticated ? <EventList /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/events/create"
              element={
                isAuthenticated ? <CreateEvent /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/events/:id"
              element={
                isAuthenticated ? <EventDetails /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/analytics"
              element={
                isAuthenticated ? <Analytics /> : <Navigate to="/login" />
              }
            />
            /* <Route
              path="/settings"
              element={
                isAuthenticated ? <Settings /> : <Navigate to="/login" />
              }
            />
          </Route> */
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;