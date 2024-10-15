import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star } from 'lucide-react'

const PremiumFeaturesShowcase = () => {
  const features = [
    { name: 'Unlimited Conversions', description: 'Convert as many files as you need without restrictions' },
    { name: 'Batch Processing', description: 'Convert multiple files at once to save time' },
    { name: 'Priority Conversion', description: 'Your files are processed first for faster results' },
    { name: 'Advanced File Comparison', description: 'Compare files with detailed analysis and visualization' },
    { name: 'Cloud Storage Integration', description: 'Connect and convert files directly from your cloud storage' },
    { name: 'API Access', description: 'Integrate our conversion tools into your own applications' },
  ]

  return (
    <div className="container w-full px-4 sm:py-10"> 
      <motion.div
        className="bg-white py-10 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Premium Features</h2>
        <p className="text-center text-gray-600 mb-8">Unlock advanced capabilities with our premium plan</p>
        
        {/* Adjust the grid for small devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="w-full"> {/* Ensure full width of the card */}
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-400" />
                  {feature.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing section */}
        <div className="mt-12 text-center w-full">
          <Card className="inline-block w-full max-w-md"> {/* Ensure full width on mobile, with max width */}
            <CardHeader>
              <CardTitle>
                <Badge variant="secondary" className="mb-2">Most Popular</Badge>
                <h3 className="text-2xl font-bold">Premium Plan</h3>
              </CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">$9.99</span> / month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upgrade to Premium</Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

export default PremiumFeaturesShowcase
