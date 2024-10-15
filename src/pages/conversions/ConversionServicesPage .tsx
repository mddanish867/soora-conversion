import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, FileSpreadsheet, ArrowRight, Image } from 'lucide-react'
import {Link} from 'react-router-dom'

const conversionServices = [
  { 
    title: 'Word to PDF', 
    description: 'Convert your Word documents to PDF format',
    icon: <FileText className="h-6 w-6" />,
    fromIcon: <FileText className="h-4 w-4 text-blue-500" />,
    toIcon: <FileText className="h-4 w-4 text-red-500" />,
    path: '/upload'
  },
  { 
    title: 'PDF to Word', 
    description: 'Convert your PDF files to editable Word documents',
    icon: <FileText className="h-6 w-6" />,
    fromIcon: <FileText className="h-4 w-4 text-red-500" />,
    toIcon: <FileText className="h-4 w-4 text-blue-500" />,
    path: '/upload'
  },
  { 
    title: 'Excel to Word', 
    description: 'Convert your Excel spreadsheets to Word documents',
    icon: <FileSpreadsheet className="h-6 w-6" />,
    fromIcon: <FileSpreadsheet className="h-4 w-4 text-green-500" />,
    toIcon: <FileText className="h-4 w-4 text-blue-500" />,
    path: '/upload'
  },
  { 
    title: 'Word to Excel', 
    description: 'Convert your Word documents to Excel spreadsheets',
    icon: <FileSpreadsheet className="h-6 w-6" />,
    fromIcon: <FileText className="h-4 w-4 text-blue-500" />,
    toIcon: <FileSpreadsheet className="h-4 w-4 text-green-500" />,
    path: '/upload'
  },
  { 
    title: 'PDF to Images', 
    description: 'Convert your PDF files to image formats (JPG, PNG)',
    icon: <Image className="h-6 w-6" />,
    fromIcon: <FileText className="h-4 w-4 text-red-500" />,
    toIcon: <Image className="h-4 w-4 text-purple-500" />,
    path: '/upload'
  },
  { 
    title: 'Images to PDF', 
    description: 'Combine multiple images into a single PDF file',
    icon: <FileText className="h-6 w-6" />,
    fromIcon: <Image className="h-4 w-4 text-purple-500" />,
    toIcon: <FileText className="h-4 w-4 text-red-500" />,
    path: '/upload'
  },
]

const ConversionServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-10 text-blue-800 text-center">Conversion Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversionServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {service.icon}
                    <span>{service.title}</span>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {service.fromIcon}
                      <ArrowRight className="h-4 w-4" />
                      {service.toIcon}
                    </div>
                    <Button asChild>
                      <Link to={service.path}>Convert Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ConversionServicesPage