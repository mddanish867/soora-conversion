import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const UserHistoryPage = () => {
  const conversionHistory = [
    { id: 1, fileName: 'document.docx', convertedTo: 'PDF', date: '2023-05-15' },
    { id: 2, fileName: 'spreadsheet.xlsx', convertedTo: 'PDF', date: '2023-05-14' },
    { id: 3, fileName: 'presentation.pptx', convertedTo: 'PDF', date: '2023-05-13' },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Conversion History</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Converted To</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversionHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fileName}</TableCell>
                <TableCell>{item.convertedTo}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  )
}

export default UserHistoryPage