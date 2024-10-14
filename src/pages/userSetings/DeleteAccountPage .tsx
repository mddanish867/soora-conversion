import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DeleteAccountPage = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-sm w-full max-w-lg mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Delete Account</h2>
        <div className="space-y-6">
          <p className="text-red-600">
            Warning: This action is irreversible. All your data will be permanently deleted.
          </p>
          <div className="space-y-2">
            <Label htmlFor="confirm-email">Confirm your email</Label>
            <Input id="confirm-email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Enter your password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for leaving (optional)</Label>
            <textarea
              id="reason"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows={4}
              placeholder="Tell us why you're deleting your account"
            ></textarea>
          </div>
          <Button className="w-full bg-red-600 text-white hover:bg-red-700">
            Permanently Delete Account
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default DeleteAccountPage
