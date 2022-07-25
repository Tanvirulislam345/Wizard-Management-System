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
import PrivateRoute from "./components/login/PrivateRoute";

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
                <PrivateRoute>
                  <LayoutChild>
                    <ForgottenPassword />
                  </LayoutChild>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Layout>
                    <Dashbord />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/notice"
              element={
                <PrivateRoute>
                  <Layout>
                    <Notice />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/notice/view/:noticeId"
              element={
                <PrivateRoute>
                  <Layout>
                    <NoticeView />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/loan"
              element={
                <PrivateRoute>
                  <Layout>
                    <Loan />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/addloan"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddLoan />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/addadjustment"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddAdjustment />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addNotice"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddNotice />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/makeinvoice"
              element={
                <PrivateRoute>
                  <Layout>
                    <MakeInvoice />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addmenualinvoice"
              element={
                <PrivateRoute>
                  <Layout>
                    <MenualInvoiceForm />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/menual/invoice/:menualid"
              element={
                <PrivateRoute>
                  <Layout>
                    <MenualInvoiceView />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/lead"
              element={
                <PrivateRoute>
                  <Layout>
                    <Lead />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addlead"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddLead />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/addCategori"
              element={
                <PrivateRoute>
                  <Layout>
                    <CategoriExpenseForm />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/editCategori/:expenseId"
              element={
                <PrivateRoute>
                  <Layout>
                    <CategoriEditForm />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/points"
              element={
                <PrivateRoute>
                  <Layout>
                    <Points />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addpoint"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddPoint />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/project"
              element={
                <PrivateRoute>
                  <Layout>
                    <Projects />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/project/view/:projectDetailsId"
              element={
                <PrivateRoute>
                  <LayoutChild>
                    <ProjectDetails />
                  </LayoutChild>
                </PrivateRoute>
              }
            />

            <Route
              path="/projectinvoice/:projectId"
              element={
                <PrivateRoute>
                  <LayoutChild>
                    <ClientInvoice />
                  </LayoutChild>
                </PrivateRoute>
              }
            />

            <Route
              path="/addproject"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddProject />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/editproject/:projectId"
              element={
                <PrivateRoute>
                  <Layout>
                    <EditProject />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/employee"
              element={
                <PrivateRoute>
                  <Layout>
                    <Employees />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/employee/profile/:profileId"
              element={
                <PrivateRoute>
                  <LayoutChild>
                    <EmployeeProfile />
                  </LayoutChild>
                </PrivateRoute>
              }
            />
            <Route
              path="/addemployee"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddEmployee />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/editemployee/:employeetId"
              element={
                <PrivateRoute>
                  <Layout>
                    <EditEmployee />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/client"
              element={
                <PrivateRoute>
                  <Layout>
                    <Clients />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/attendence"
              element={
                <PrivateRoute>
                  <Layout>
                    <Attendence />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addattendence"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddAttendence />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addmenualattendence"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddMenualAttendence />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/transfer"
              element={
                <PrivateRoute>
                  <Layout>
                    <Transfer />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/client/profile/:clientId"
              element={
                <PrivateRoute>
                  <LayoutChild>
                    <ClientProfile />
                  </LayoutChild>
                </PrivateRoute>
              }
            />

            <Route
              path="/addclient"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddClients />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/editclient/:editclientId"
              element={
                <PrivateRoute>
                  <Layout>
                    <EditClients />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <PrivateRoute>
                  <Layout>
                    <AllPayment />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/payment/update/:paymentId"
              element={
                <PrivateRoute>
                  <Layout>
                    <EditPayment />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/payment/invoice/:invoiceId"
              element={
                <PrivateRoute>
                  <LayoutChild>
                    <Invoice />
                  </LayoutChild>
                </PrivateRoute>
              }
            />
            <Route
              path="/salary/invoice/:invoice"
              element={
                <PrivateRoute>
                  <LayoutChild>
                    <Invoice2 />
                  </LayoutChild>
                </PrivateRoute>
              }
            />
            <Route
              path="/addpayment"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddPayment />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/expense"
              element={
                <PrivateRoute>
                  <Layout>
                    <AllExpense />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addexpense"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddExpense />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/expense/update/:expenseId"
              element={
                <PrivateRoute>
                  <Layout>
                    <EditExpense />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/leave"
              element={
                <PrivateRoute>
                  <Layout>
                    <Leave />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/addleavetype"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddLeaveType />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/addleave"
              element={
                <PrivateRoute>
                  <LayoutChild>
                    <AddLeave />
                  </LayoutChild>
                </PrivateRoute>
              }
            />

            <Route
              path="/leave/update/:leaveId"
              element={
                <PrivateRoute>
                  <Layout>
                    <EditLeave />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/leavetype/update/:leavetypeId"
              element={
                <PrivateRoute>
                  <Layout>
                    <EditLeaveType />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route
              path="/salary"
              element={
                <PrivateRoute>
                  <Layout>
                    <Salary />
                  </Layout>
                </PrivateRoute>
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
