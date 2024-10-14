import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";

interface FileDetails {
  name: string;
  size: number;
  type: string;
  preview: string; // for the preview URL
}

const FileUploadPage = () => {
  // Define the type of the files state as an array of FileDetails
  const [files, setFiles] = useState<FileDetails[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="bg-white p-8 rounded-lg  w-full max-w-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-lg opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-lg opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Upload Files
        </h2>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Drop the files here ...</p>
          ) : (
            <p className="text-gray-600">
              Drag 'n' drop some files here, or click to select files
            </p>
          )}
        </div>
        {files.length > 0 && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Selected Files:
            </h3>
            <ul className="space-y-2">
              {files.map((file) => (
                <motion.li
                  key={file.name}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-700">{file.name}</span>
                  <span className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </motion.li>
              ))}
            </ul>
            <Button className="w-full mt-4 bg-gray-900 text-white hover:bg-gray-800">
              Convert Files
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default FileUploadPage;
