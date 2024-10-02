import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <div>
        <Navbar />
        <Form />
      </div>
    </React.Fragment>
  );
};

export default App;
