import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import AddClients from "./pages/AddClients";
import AddEmployee from "./pages/AddEmployee";
import AddExpense from "./pages/AddExpense";
import AddPayment from "./pages/AddPayment";
import AddProject from "./pages/AddProject";
import AllExpense from "./pages/AllExpense";
import AllPayment from "./pages/AllPayment";
import ClientProfile from "./pages/ClientProfile";
import Clients from "./pages/Clients";
import EditClients from "./pages/EditClients";
import EditEmployee from "./pages/EditEmployee";
import EditProject from "./pages/EditProject";
import EmployeeProfile from "./pages/EmployeeProfile";
import Employees from "./pages/Employees";
import Invoice from "./pages/Invoice";
import PaymentView from "./pages/PaymentView";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/project" element={<Projects />} />
            <Route
              path="/project/view/:projectDetailsId"
              element={<ProjectDetails />}
            />
            <Route path="/addproject" element={<AddProject />} />
            <Route path="/editproject/:projectId" element={<EditProject />} />
            <Route path="/employee" element={<Employees />} />
            <Route
              path="/employee/profile/:profileId"
              element={<EmployeeProfile />}
            />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route
              path="/editemployee/:employeetId"
              element={<EditEmployee />}
            />
            <Route path="/client" element={<Clients />} />
            <Route
              path="/client/profile/:clientId"
              element={<ClientProfile />}
            />
            <Route path="/addclient" element={<AddClients />} />
            <Route path="/editclient/:clientId" element={<EditClients />} />
            <Route path="/payment" element={<AllPayment />} />
            <Route path="/payment/view/:paymentId" element={<Invoice />} />
            <Route path="/addpayment" element={<AddPayment />} />
            <Route path="/expense" element={<AllExpense />} />
            <Route path="/addexpense" element={<AddExpense />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
