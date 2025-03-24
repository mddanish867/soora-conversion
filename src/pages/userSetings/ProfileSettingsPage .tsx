import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "../../context/AuthContext";
import UserAvatar from "./UserAvatar";
import { useState, useEffect } from 'react'; // Import useState and useEffect

const ProfileSettingsPage = () => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(""); // Initialize with empty string
  const [email, setEmail] = useState(""); // Initialize with empty string

  useEffect(() => {
    if (user) {
      setFullName(user.name || ""); // Ensure default value if user.name is null/undefined
      setEmail(user.email || ""); // Ensure default value if user.email is null/undefined
    }
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Manage your account details and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <UserAvatar />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProfileSettingsPage;