import React from 'react'
import { motion } from 'framer-motion'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, RotateCw } from 'lucide-react'

const ConversionStatusPage = () => {
  const [progress, setProgress] = React.useState(0)
  const [status, setStatus] = React.useState('converting') // 'converting', 'completed', 'failed'

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setStatus('completed')
          return 100
        }
        return prevProgress + 10
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRetry = () => {
    setProgress(0)
    setStatus('converting')
  }

  return (
    <div className="container mx-auto px-4 ">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Conversion Status</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Converting: document.docx to PDF</span>
              <span className="text-sm font-medium text-gray-700">{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
          {status === 'converting' && (
            <div className="flex items-center text-blue-500">
              <RotateCw className="animate-spin mr-2" />
              <span>Converting your file...</span>
            </div>
          )}
          {status === 'completed' && (
            <div className="flex items-center text-green-500">
              <CheckCircle className="mr-2" />
              <span>Conversion completed successfully!</span>
            </div>
          )}
          {status === 'failed' && (
            <div className="flex items-center text-red-500">
              <XCircle className="mr-2" />
              <span>Conversion failed. Please try again.</span>
            </div>
          )}
          <div className="flex justify-between">
            <Button variant="outline" onClick={handleRetry}>
              Convert Another File
            </Button>
            {status === 'completed' && (
              <Button>
                Download Converted File
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ConversionStatusPage