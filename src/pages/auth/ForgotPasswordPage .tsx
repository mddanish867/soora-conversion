import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {Link} from 'react-router-dom'
const ForgotPasswordPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Forgot Password</h2>
        <p className="text-center mb-6 text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
            <Input type="email" id="email" placeholder="Enter your email" className="bg-gray-50" />
          </div>
          <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">Send Reset Link</Button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ForgotPasswordPage