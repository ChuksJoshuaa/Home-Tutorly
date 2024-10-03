import Navbar from "@/components/Navbar";
import Dashboard from "@/pages/Dashboard";
import Error from "@/pages/Error";
import FormPage from "@/pages/FormPage";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main className="bg-main-bg">
      <ToastContainer />
      <div className="main-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
