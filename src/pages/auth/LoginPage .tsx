import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link} from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import GithubLogin from './GithubLogin'

const LoginPage = () => {

  // const handleGoogleLogin = () => {
  //   window.location.href = 'http://localhost:3000/api/auth/google';
  // };

  
  
  
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-lg opacity-50"
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
          className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-lg opacity-50"
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

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
            <Input type="email" id="email" placeholder="Enter your email" className="bg-gray-50" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-gray-700">Password</label>
            <Input type="password" id="password" placeholder="Enter your password" className="bg-gray-50" />
          </div>
          <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">Login</Button>
        </form>
        <div className="mt-6">
          <p className="text-center mb-4 text-gray-600">Or login with</p>
          <div className="flex justify-center space-x-4">          
            <GoogleLogin/>
            <GithubLogin/>           
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage