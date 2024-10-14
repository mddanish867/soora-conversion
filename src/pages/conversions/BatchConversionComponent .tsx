import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, Upload } from 'lucide-react';

interface FileDetails {
  name: string;
  size: number;
  type: string;
}

const BatchConversionComponent = () => {
  const [files, setFiles] = useState<FileDetails[]>([]);
  const [outputFormat, setOutputFormat] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleConvert = () => {
    // Implement batch conversion logic here
    console.log('Converting files to', outputFormat);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Batch Conversion</h2>
        <div className="space-y-6">
          <div>
            <Label htmlFor="file-upload">Upload Files</Label>
            <Input
              id="file-upload"
              type="file"
              multiple
              onChange={handleFileChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="output-format">Output Format</Label>
            <Select onValueChange={setOutputFormat}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select output format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="docx">DOCX</SelectItem>
                <SelectItem value="jpg">JPG</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{(file.size / 1024 / 1024).toFixed(2)} MB</TableCell>
                  <TableCell>{file.type}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={handleConvert} disabled={files.length === 0 || !outputFormat}>
            <Upload className="mr-2 h-4 w-4" /> Convert Files
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default BatchConversionComponent;
