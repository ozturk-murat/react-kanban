import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard"
import Task from "./pages/Task/Task";
import FeedBack from "./pages/Feedback/Feedback";
import RoadMap from "./pages/Roadmap/Roadmap";
import Changelog from "./pages/Changelog/Changelog";
import InvitePeople from "./pages/InvitePeople/InvitePeople";
import Notifications from "./pages/Notifications/Notifications";
import HC from "./pages/HC/HC";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <TopBar />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Task/>} />
            <Route path="/feedback" element={<FeedBack/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/roadmap" element={<RoadMap/>} />
            <Route path="/changelog" element={<Changelog/>} />
            <Route path="/invite-people" element={<InvitePeople/>} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/help-and-community" element={<HC/>} />
          </Routes>
          <ToastContainer/>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
