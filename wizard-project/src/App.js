import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import AddAttendence from "./pages/AddAttendence";
import AddClients from "./pages/AddClients";
import AddEmployee from "./pages/AddEmployee";
import AddExpense from "./pages/AddExpense";
import AddPayment from "./pages/AddPayment";
import AddProject from "./pages/AddProject";
import AllExpense from "./pages/AllExpense";
import AllPayment from "./pages/AllPayment";
import Attendence from "./pages/Attendence";
import ClientProfile from "./pages/ClientProfile";
import Clients from "./pages/Clients";
import EditClients from "./pages/EditClients";
import EditEmployee from "./pages/EditEmployee";
import EditExpense from "./pages/EditExpense";
import EditPayment from "./pages/EditPayment";
import EditProject from "./pages/EditProject";
import EmployeeProfile from "./pages/EmployeeProfile";
import Employees from "./pages/Employees";
import Invoice from "./pages/Invoice";
import AddLeave from "./pages/Leave/AddLeave";
import AddLeaveType from "./pages/Leave/AddLeaveType";
import Leave from "./pages/Leave/Leave";
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

            <Route path="/attendence" element={<Attendence />} />
            <Route path="/addattendence" element={<AddAttendence />} />

            <Route
              path="/client/profile/:clientId"
              element={<ClientProfile />}
            />

            <Route path="/addclient" element={<AddClients />} />
            <Route path="/editclient/:clientId" element={<EditClients />} />
            <Route path="/payment" element={<AllPayment />} />
            <Route
              path="/payment/update/:paymentId"
              element={<EditPayment />}
            />
            <Route path="/payment/invoice/:invoiceId" element={<Invoice />} />
            <Route path="/addpayment" element={<AddPayment />} />

            <Route path="/expense" element={<AllExpense />} />
            <Route path="/addexpense" element={<AddExpense />} />
            <Route
              path="/expense/update/:expenseId"
              element={<EditExpense />}
            />

            <Route path="/leave" element={<Leave />} />
            <Route path="/addleavetype" element={<AddLeaveType />} />
            <Route path="/addleave" element={<AddLeave />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
