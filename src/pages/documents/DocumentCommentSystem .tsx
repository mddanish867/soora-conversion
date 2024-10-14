import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Send, X } from 'lucide-react'

interface Comment {
  id: number
  user: string
  avatar: string
  text: string
  timestamp: string
}

const DocumentCommentSystem = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: 'Alice', avatar: '/placeholder.svg?height=40&width=40', text: 'Great document! I have a question about section 2.', timestamp: '2 hours ago' },
    { id: 2, user: 'Bob', avatar: '/placeholder.svg?height=40&width=40', text: 'I think we should revise the conclusion.', timestamp: '1 hour ago' },
  ])
  const [newComment, setNewComment] = useState('')
  const [selectedText, setSelectedText] = useState('')
  const [showCommentBox, setShowCommentBox] = useState(false)

  const handleTextSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) {
      setSelectedText(selection.toString())
      setShowCommentBox(true)
    }
  }

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        user: 'You',
        avatar: '/placeholder.svg?height=40&width=40',
        text: newComment,
        timestamp: 'Just now'
      }
      setComments([...comments, newCommentObj])
      setNewComment('')
      setShowCommentBox(false)
    }
  }

  return (
    <div className="container mx-auto px-4 ">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Document with Comments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div 
              className="bg-gray-100 p-4 rounded-lg min-h-[400px]" 
              onMouseUp={handleTextSelection}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur
                interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
                consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
              </p>
              <p className="mt-4">
                Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
                nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae
                tincidunt nisl nunc euismod nunc.
              </p>
            </div>
            {showCommentBox && (
              <motion.div 
                className="mt-4 p-4 bg-blue-100 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Add a comment</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowCommentBox(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-2">Selected text: "{selectedText}"</p>
                <Textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Type your comment here..."
                  className="mb-2"
                />
                <Button onClick={handleAddComment}>
                  <Send className="mr-2 h-4 w-4" /> Add Comment
                </Button>
              </motion.div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" /> Comments
            </h3>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              {comments.map((comment) => (
                <div key={comment.id} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={comment.avatar} alt={comment.user} />
                      <AvatarFallback>{comment.user[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{comment.user}</p>
                      <p className="text-sm text-gray-500">{comment.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default DocumentCommentSystem