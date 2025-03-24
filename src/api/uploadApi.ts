// import axios from "axios";

// export const uploadDocument = async (file: File, token: string | null) => {
//   // Create a new FormData instance
//   const formData = new FormData();
  
//   // Append the file with field name "document"
//   formData.append("document", file);
  
//   // Let axios handle the Content-Type header and boundary automatically
//   return axios.post("http://localhost:3000/api/document/upload", formData, {
//     headers: {
//       // Remove manual Content-Type setting to let axios handle it properly
//       // "Content-Type": "multipart/form-data", 
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// // In your component, use it like this:
// const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//   const uploadedFile = event.target.files?.[0];
//   if (!uploadedFile) return;

//   setFile(uploadedFile);
//   setIsUploading(true);
//   setUploadError(null);
  
//   // Reading file for preview...
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     const content = e.target?.result as string;
//     setDocumentContent(content);
//   };
//   reader.readAsText(uploadedFile);
  
//   // Get token
//   const token = localStorage.getItem("authToken");
  
//   try {
//     const response = await uploadDocument(uploadedFile, token);
//     console.log("Upload successful:", response.data);
    
//     // Rest of your success handling code...
    
//   } catch (error: any) {
//     console.error("Upload error:", error);
//     // Enhanced error handling with more details
//     const errorMsg = error.response?.data?.message || error.message || "Upload failed";
//     setUploadError(`Error: ${errorMsg}`);
//   } finally {
//     setIsUploading(false);
//   }
// };