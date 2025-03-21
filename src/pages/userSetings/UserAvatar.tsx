import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from "../../context/AuthContext";

// Define interface for user object based on your auth context
interface User {
  profile?: string;
  name?: string;
}

const UserAvatar: React.FC = () => {
  const { user } = useAuth() as { user?: User };
  console.log(user?.profile)
  const triggerFileInput = (): void => {
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // This is where you would handle the image upload
    // and update the user profile in your auth context
    if (event.target.files && event.target.files.length > 0) {
      console.log("Image selected:", event.target.files[0]);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Avatar className="w-20 h-20">
        <AvatarImage src={user?.profile || "/placeholder.svg?height=80&width=80"} alt={`${user?.name || "User"} avatar`} />
        <AvatarFallback className='text-black font-bold text-4xl'>
          {user?.profile ? (
            <img src={user.profile} alt={user?.name || "User"} />
          ) : (
            user?.name?.[0] || "U"
          )}
        </AvatarFallback>
      </Avatar>
      
      <div>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <Button onClick={triggerFileInput}>Change Avatar</Button>
      </div>
    </div>
  );
};

export default UserAvatar;