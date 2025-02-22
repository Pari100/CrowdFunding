import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// Lazy loading
const LandingPage = React.lazy(() => import("./Routes/landingPage"));
const Campaign = React.lazy(() => import("./Routes/campaign"));
const LoginAdmin = React.lazy(() => import("./Routes/loginAdmin"));
const RegisterAdmin = React.lazy(() => import("./Routes/registerAdmin"));
const AdminDashboard = React.lazy(() => import("./Routes/adminDashboard"));
const AboutUs = React.lazy(() => import("./Routes/aboutUs"));
const ContactUs = React.lazy(() => import("./Routes/contactUs"));
const PageNotFound = React.lazy(() => import("./Routes/PageNotFound"));
const NewCampaign = React.lazy(() => import("./Routes/newCampaign"));
const AllCampaigns = React.lazy(() => import("./Routes/allCampaigns"));
const EditCampaign = React.lazy(() => import("./Routes/editCampaign"));
const DonationSuccess = React.lazy(() => import("./Routes/donationSuccess"));
const DonationFailure = React.lazy(() => import("./Routes/donationFailure"));

// Protected Route for Admin Pages
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("adminToken"); // Example authentication check
  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <div id="page-container">
          <div id="content-wrap">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/all-campaigns" element={<AllCampaigns />} />
              <Route path="/campaign/:id" element={<Campaign />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/donation/success/:id" element={<DonationSuccess />} />
              <Route path="/donation/failure" element={<DonationFailure />} />

              {/* Admin Routes (Protected) */}
              <Route path="/admin/login" element={<LoginAdmin />} />
              <Route path="/admin/new" element={<RegisterAdmin />} />
              <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />} />} />
              <Route path="/admin/campaign/new" element={<ProtectedRoute element={<NewCampaign />} />} />
              <Route path="/admin/campaign/:id/edit" element={<ProtectedRoute element={<EditCampaign />} />} />

              {/* Page Not Found */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
