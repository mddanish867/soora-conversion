import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitCompare } from 'lucide-react'

// Define the type for the comparison result
interface ComparisonResult {
  similarityPercentage: number
  differences: {
    line: number
    file1Content: string
    file2Content: string
  }[]
}

const FileComparisonTool = () => {
  const [file1, setFile1] = useState<File | null>(null)
  const [file2, setFile2] = useState<File | null>(null)
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null)

  const handleFileChange = (e: any, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    const file = e.target.files[0]
    setFile(file)
  }

  const handleCompare = () => {
    // Implement file comparison logic here
    setComparisonResult({
      similarityPercentage: 85,
      differences: [
        { line: 10, file1Content: 'Content in file 1', file2Content: 'Different content in file 2' },
        { line: 25, file1Content: 'Another difference', file2Content: 'Changed content here' },
      ]
    })
  }

  return (
    <div className="w-full min-h-screen px-2 sm:px-4 sm:py-10">
      <motion.div
        className="bg-transparent  sm:p-8 rounded-lg w-full min-h-screen"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">File Comparison Tool</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="file1">File 1</Label>
              <Input
                id="file1"
                type="file"
                onChange={(e) => handleFileChange(e, setFile1)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="file2">File 2</Label>
              <Input
                id="file2"
                type="file"
                onChange={(e) => handleFileChange(e, setFile2)}
                className="mt-1"
              />
            </div>
          </div>
          <Button onClick={handleCompare} disabled={!file1 || !file2}>
            <GitCompare className="mr-2 h-4 w-4" /> Compare Files
          </Button>
          {comparisonResult && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Comparison Result</h3>
              <p className="mb-4">Similarity: {comparisonResult.similarityPercentage}%</p>
              <Tabs defaultValue="differences">
                <TabsList>
                  <TabsTrigger value="differences">Differences</TabsTrigger>
                  <TabsTrigger value="file1">File 1</TabsTrigger>
                  <TabsTrigger value="file2">File 2</TabsTrigger>
                </TabsList>
                <TabsContent value="differences">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    {comparisonResult.differences.map((diff, index) => (
                      <div key={index} className="mb-4">
                        <p className="font-semibold">Line {diff.line}:</p>
                        <p className="text-red-500">- {diff.file1Content}</p>
                        <p className="text-green-500">+ {diff.file2Content}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="file1">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p>Content of File 1 would be displayed here</p>
                  </div>
                </TabsContent>
                <TabsContent value="file2">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p>Content of File 2 would be displayed here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default FileComparisonTool