import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import Account from "./components/Account";

const queryClient = new QueryClient();

const App = () => {
  // Global state to share between pages
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  // Function to add new scans to history
  const addHistoryItem = (newItem) => {
    setHistory((prev) => [newItem, ...prev]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          
          {/* Dashboard needs the function to add history */}
          <Route 
            path="/dashboard" 
            element={<Dashboard onAddHistory={addHistoryItem} />} 
          />
          
          {/* History and Account need to read the shared data */}
          <Route 
            path="/history" 
            element={<History history={history} />} 
          />
          <Route 
            path="/account" 
            element={<Account user={user} history={history} setUser={setUser} />} 
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;