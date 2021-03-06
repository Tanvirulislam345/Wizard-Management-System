import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import EditLeave from "./pages/Leave/EditLeave";
import EditLeaveType from "./pages/Leave/EditLeaveType";
import Leave from "./pages/Leave/Leave";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import ContextProvieder from "./Context/ContextProvieder";
import LayoutChild from "./components/layout/LayoutChild";
import ClientInvoice from "./pages/ClientInvoice";
import Salary from "./pages/Salary";
import Invoice2 from "./pages/Invoice2";
import Points from "./pages/Points";
import AddPoint from "./pages/AddPoint";
import Dashbord from "./pages/Dashbord";
import CategoriExpenseForm from "./components/expense/CategoriExpenseForm";
import MakeInvoice from "./pages/MakeInvoice";
import MenualInvoiceForm from "./components/menualinvoice/MenualInvoiceForm";
import MenualInvoiceView from "./components/menualinvoice/MenualInvoiceView";
import Notice from "./pages/Notice";
import AddNotice from "./pages/AddNotice";
import Loan from "./pages/Loan";
import AddLoan from "./components/loan/AddLoan";
import AddAdjustment from "./components/loan/AddAdjustment";
import Lead from "./pages/Lead";
import AddLead from "./components/lead/AddLead";

import NoticeView from "./components/notice/NoticeView";
import AddMenualAttendence from "./components/attendence/AddMenualAttendence";

import "./App.css";
import { theme } from "./theme";
import CategoriEditForm from "./components/expense/CategoriEditForm";
import Transfer from "./pages/Transfer";
import ForgottenPassword from "./pages/ForgottenPassword";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvieder>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutChild>
                  <Login />
                </LayoutChild>
              }
            />
            <Route
              path="/forget"
              element={
                <LayoutChild>
                  <ForgottenPassword />
                </LayoutChild>
              }
            />

            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashbord />
                </Layout>
              }
            />

            <Route
              path="/notice"
              element={
                <Layout>
                  <Notice />
                </Layout>
              }
            />
            <Route
              path="/notice/view/:noticeId"
              element={
                <Layout>
                  <NoticeView />
                </Layout>
              }
            />
            <Route
              path="/loan"
              element={
                <Layout>
                  <Loan />
                </Layout>
              }
            />

            <Route
              path="/addloan"
              element={
                <Layout>
                  <AddLoan />
                </Layout>
              }
            />

            <Route
              path="/addadjustment"
              element={
                <Layout>
                  <AddAdjustment />
                </Layout>
              }
            />
            <Route
              path="/addNotice"
              element={
                <Layout>
                  <AddNotice />
                </Layout>
              }
            />

            <Route
              path="/makeinvoice"
              element={
                <Layout>
                  <MakeInvoice />
                </Layout>
              }
            />
            <Route
              path="/addmenualinvoice"
              element={
                <Layout>
                  <MenualInvoiceForm />
                </Layout>
              }
            />
            <Route
              path="/menual/invoice/:menualid"
              element={
                <Layout>
                  <MenualInvoiceView />
                </Layout>
              }
            />
            <Route
              path="/lead"
              element={
                <Layout>
                  <Lead />
                </Layout>
              }
            />
            <Route
              path="/addlead"
              element={
                <Layout>
                  <AddLead />
                </Layout>
              }
            />

            <Route
              path="/addCategori"
              element={
                <Layout>
                  <CategoriExpenseForm />
                </Layout>
              }
            />
            <Route
              path="/editCategori/:expenseId"
              element={
                <Layout>
                  <CategoriEditForm />
                </Layout>
              }
            />

            <Route
              path="/points"
              element={
                <Layout>
                  <Points />
                </Layout>
              }
            />
            <Route
              path="/addpoint"
              element={
                <Layout>
                  <AddPoint />
                </Layout>
              }
            />

            <Route
              path="/project"
              element={
                <Layout>
                  <Projects />
                </Layout>
              }
            />

            <Route
              path="/project/view/:projectDetailsId"
              element={
                <LayoutChild>
                  <ProjectDetails />
                </LayoutChild>
              }
            />

            <Route
              path="/projectinvoice/:projectId"
              element={
                <LayoutChild>
                  <ClientInvoice />
                </LayoutChild>
              }
            />

            <Route
              path="/addproject"
              element={
                <Layout>
                  <AddProject />
                </Layout>
              }
            />
            <Route
              path="/editproject/:projectId"
              element={
                <Layout>
                  <EditProject />
                </Layout>
              }
            />
            <Route
              path="/employee"
              element={
                <Layout>
                  <Employees />
                </Layout>
              }
            />

            <Route
              path="/employee/profile/:profileId"
              element={
                <LayoutChild>
                  <EmployeeProfile />
                </LayoutChild>
              }
            />
            <Route
              path="/addemployee"
              element={
                <Layout>
                  <AddEmployee />
                </Layout>
              }
            />
            <Route
              path="/editemployee/:employeetId"
              element={
                <Layout>
                  <EditEmployee />
                </Layout>
              }
            />

            <Route
              path="/client"
              element={
                <Layout>
                  <Clients />
                </Layout>
              }
            />

            <Route
              path="/attendence"
              element={
                <Layout>
                  <Attendence />
                </Layout>
              }
            />
            <Route
              path="/addattendence"
              element={
                <Layout>
                  <AddAttendence />
                </Layout>
              }
            />
            <Route
              path="/addmenualattendence"
              element={
                <Layout>
                  <AddMenualAttendence />
                </Layout>
              }
            />
            <Route
              path="/transfer"
              element={
                <Layout>
                  <Transfer />
                </Layout>
              }
            />

            <Route
              path="/client/profile/:clientId"
              element={
                <LayoutChild>
                  <ClientProfile />
                </LayoutChild>
              }
            />

            <Route
              path="/addclient"
              element={
                <Layout>
                  <AddClients />
                </Layout>
              }
            />
            <Route
              path="/editclient/:editclientId"
              element={
                <Layout>
                  <EditClients />
                </Layout>
              }
            />
            <Route
              path="/payment"
              element={
                <Layout>
                  <AllPayment />
                </Layout>
              }
            />
            <Route
              path="/payment/update/:paymentId"
              element={
                <Layout>
                  <EditPayment />
                </Layout>
              }
            />
            <Route
              path="/payment/invoice/:invoiceId"
              element={
                <LayoutChild>
                  <Invoice />
                </LayoutChild>
              }
            />
            <Route
              path="/salary/invoice/:invoice"
              element={
                <LayoutChild>
                  <Invoice2 />
                </LayoutChild>
              }
            />
            <Route
              path="/addpayment"
              element={
                <Layout>
                  <AddPayment />
                </Layout>
              }
            />

            <Route
              path="/expense"
              element={
                <Layout>
                  <AllExpense />
                </Layout>
              }
            />
            <Route
              path="/addexpense"
              element={
                <Layout>
                  <AddExpense />
                </Layout>
              }
            />
            <Route
              path="/expense/update/:expenseId"
              element={
                <Layout>
                  <EditExpense />
                </Layout>
              }
            />

            <Route
              path="/leave"
              element={
                <Layout>
                  <Leave />
                </Layout>
              }
            />
            <Route
              path="/addleavetype"
              element={
                <Layout>
                  <AddLeaveType />
                </Layout>
              }
            />

            <Route
              path="/addleave"
              element={
                <LayoutChild>
                  <AddLeave />
                </LayoutChild>
              }
            />

            <Route
              path="/leave/update/:leaveId"
              element={
                <Layout>
                  <EditLeave />
                </Layout>
              }
            />
            <Route
              path="/leavetype/update/:leavetypeId"
              element={
                <Layout>
                  <EditLeaveType />
                </Layout>
              }
            />

            <Route
              path="/salary"
              element={
                <Layout>
                  <Salary />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <LayoutChild>
                  <Login />
                </LayoutChild>
              }
            />
          </Routes>
        </Router>
      </ContextProvieder>
    </ThemeProvider>
  );
}

export default App;
