import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const NotificationSettingsPage = () => {
  return (
    <div className="w-full px-4 ">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-sm w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notification Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="text-lg">Email Notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="conversion-updates" className="text-lg">Conversion Updates</Label>
            <Switch id="conversion-updates" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="new-features" className="text-lg">New Features</Label>
            <Switch id="new-features" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing-emails" className="text-lg">Marketing Emails</Label>
            <Switch id="marketing-emails" />
          </div>
          <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
            Save Preferences
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotificationSettingsPage