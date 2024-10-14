import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, } from 'lucide-react'

interface Message {
  id: number
  sender: 'user' | 'ai'
  text: string
  timestamp: string
}

const AIDocumentInteraction = () => {
  const [file, setFile] = useState<File | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [documentContent, setDocumentContent] = useState('')
  const [documentAnalysis, setDocumentAnalysis] = useState<{ key: string; value: string }[]>([])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      // Simulating document content extraction
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setDocumentContent(content)
        // Simulating AI analysis
        setDocumentAnalysis([
          { key: 'Document Type', value: 'Report' },
          { key: 'Page Count', value: '5' },
          { key: 'Main Topics', value: 'AI, Machine Learning, Data Analysis' },
          { key: 'Sentiment', value: 'Positive' },
          { key: 'Key Entities', value: 'OpenAI, Google, Microsoft' },
        ])
      }
      reader.readAsText(uploadedFile)
    }
  }

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'user',
        text: input.trim(),
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages([...messages, newMessage])
      setInput('')
      // Simulating AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          sender: 'ai',
          text: `I've analyzed your question about "${input.trim()}". Based on the document, here's what I found...`,
          timestamp: new Date().toLocaleTimeString(),
        }
        setMessages((prevMessages) => [...prevMessages, aiResponse])
      }, 1000)
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">AI Document Interaction</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Document Viewer & Chat</CardTitle>
              <CardDescription>Upload a document and chat with AI about its contents</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="viewer">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="viewer">Document Viewer</TabsTrigger>
                  <TabsTrigger value="chat">AI Chat</TabsTrigger>
                </TabsList>
                <TabsContent value="viewer">
                  {file ? (
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                      <pre className="whitespace-pre-wrap">{documentContent}</pre>
                    </ScrollArea>
                  ) : (
                    <div className="flex items-center justify-center h-[400px] border-2 border-dashed rounded-md">
                      <p className="text-gray-500">No document uploaded</p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="chat">
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <div className="flex w-full space-x-2">
                <Input
                  type="text"
                  placeholder="Ask a question about the document..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Document Analysis</CardTitle>
              <CardDescription>AI-powered insights about your document</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Input
                    type="file"
                    onChange={handleFileUpload}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {file && (
                  <>
                    <div>
                      <h4 className="font-semibold mb-2">Uploaded File</h4>
                      <p className="text-sm text-gray-600">{file.name}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">AI Analysis</h4>
                      <ul className="space-y-2">
                        {documentAnalysis.map((item, index) => (
                          <li key={index} className="flex justify-between text-sm">
                            <span className="font-medium">{item.key}:</span>
                            <span className="text-gray-600">{item.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

export default AIDocumentInteraction