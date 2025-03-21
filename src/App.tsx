import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/home/LandingPage ';
import Layout from './layout/Layout';
import LoginPage from './pages/auth/LoginPage ';
import RegisterPage from './pages/auth/RegisterPage ';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage ';
import ResetPasswordPage from './pages/auth/ResetPasswordPage ';
import FileUploadPage from './pages/upload/FileUploadPage ';
import Dashboard from './pages/userSetings/Dashboard ';
import UserHistoryPage from './pages/userSetings/UserHistoryPage ';
import SecuritySettingsPage from './pages/userSetings/SecuritySettingsPage ';
import ProfileSettingsPage from './pages/userSetings/ProfileSettingsPage ';
import NotificationSettingsPage from './pages/userSetings/NotificationSettingsPage ';
import DeleteAccountPage from './pages/userSetings/DeleteAccountPage ';
import BatchConversionComponent from './pages/conversions/BatchConversionComponent ';
import ConversionStatusPage from './pages/conversions/ConversionStatusPage';
import FileComparisonTool from './pages/conversions/FileComparisonTool ';
import PremiumFeaturesShowcase from './pages/conversions/PremiumFeaturesShowcase ';
import AIDocumentInteraction from './pages/documents/AIDocumentInteraction ';
import DocumentCommentSystem from './pages/documents/DocumentCommentSystem ';
import ConversionServicesPage from './pages/conversions/ConversionServicesPage ';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        {/* Define a route for the layout and nest the about route */}
        <Route element={<Layout/>}>
          {/* Define nested routes here */}
          <Route path="/" element={<LandingPage />} />        
          <Route path="/upload" element={<FileUploadPage />} />   
          <Route path="/batch-conversion" element={<BatchConversionComponent />} />        
          <Route path="/file-comparison" element={<FileComparisonTool />} />        
          <Route path="/premium-features" element={<PremiumFeaturesShowcase />} />        
          <Route path="/document-interaction" element={<AIDocumentInteraction />} />        
          <Route path="/conversion-service" element={<ConversionServicesPage />} />        

          <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/history" element={<UserHistoryPage />} />        
          <Route path="/dashboard/security" element={<SecuritySettingsPage />} />        
          <Route path="/dashboard/profile" element={<ProfileSettingsPage />} /> 
          <Route path="/dashboard/notifications" element={<NotificationSettingsPage />} />        
          <Route path="/dashboard/delete-account" element={<DeleteAccountPage />} />        
          <Route path="/dashboard/conversion-status" element={<ConversionStatusPage />} />        
          <Route path="/dashboard/document-comment" element={<DocumentCommentSystem />} />        
        </Route>
                 
         

        </Route>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
