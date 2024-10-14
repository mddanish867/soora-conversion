import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SecuritySettingsPage = () => {
  return (
    <div className="container mx-auto px-4 ">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-sm w-full mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Security Settings</h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Change Password</h3>
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
              Update Password
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor" className="text-lg">Enable Two-Factor Authentication</Label>
              <Switch id="two-factor" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Session Management</h3>
            <Button variant="outline" className="w-full">
              Log Out of All Devices
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SecuritySettingsPage