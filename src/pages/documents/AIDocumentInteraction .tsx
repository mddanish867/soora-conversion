import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, FileText, Upload } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

interface DocumentAnalysisItem {
  key: string;
  value: string;
}

const AIDocumentInteraction = () => {
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [documentContent, setDocumentContent] = useState("");
  const [documentAnalysis, setDocumentAnalysis] = useState<
    DocumentAnalysisItem[]
  >([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setDocumentContent(content);
        setDocumentAnalysis([
          { key: "Document Type", value: "Report" },
          { key: "Page Count", value: "5" },
          { key: "Main Topics", value: "AI, Machine Learning, Data Analysis" },
          { key: "Sentiment", value: "Positive" },
          { key: "Key Entities", value: "OpenAI, Google, Microsoft" },
        ]);
      };
      reader.readAsText(uploadedFile);
    }
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        text: input.trim(),
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInput("");
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          sender: "ai",
          text: `I've analyzed your question about "${input.trim()}". Based on the document, here's what I found...`,
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="w-full mx-auto px-2 lg:px-4">
      <motion.div
        className="bg-transparent py-10 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-3xl font-bold mb-10 text-blue-800">
          Start chatting with your document with AI.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <Card className="lg:col-span-2 w-full overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Document Viewer & Chat
              </CardTitle>
              <CardDescription className="text-blue-800">
                Upload a document and chat with AI about its contents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="viewer">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="viewer" className="text-blue-800">
                    Document Viewer
                  </TabsTrigger>
                  <TabsTrigger value="chat" className="text-blue-800">
                    AI Chat
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="viewer">
                  {file ? (
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                      <pre className="whitespace-pre-wrap">
                        {documentContent}
                      </pre>
                    </ScrollArea>
                  ) : (
                    <div className="flex items-center justify-center h-[400px] border-2 border-dashed rounded-md">
                      <p className="text-blue-800">No document uploaded</p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="chat">
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        } mb-4`}
                      >
                        <div
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.sender === "user"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {message.timestamp}
                          </p>
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
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </CardFooter>
          </Card>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-full overflow-hidden bg-white border-none transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-400 to-yellow-300 text-white">
                <CardTitle className="text-2xl font-bold flex items-center text-blue-800">
                  <FileText className="mr-2 h-6 w-6" />
                  Document Analysis
                </CardTitle>
                <CardDescription className="text-blue-800">
                  AI-powered insights about your document
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      type="file"
                      onChange={handleFileUpload}
                      className="file:mr-4 h-20 file:py-4 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors duration-200"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Upload className="h-5 w-5 text-blue-800" />
                    </div>
                  </div>
                  {file && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold mb-2 text-blue-700">
                          Uploaded File
                        </h4>
                        <p className="text-sm text-gray-600">{file.name}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-4 text-gray-700">
                          AI Analysis
                        </h4>
                        <ul className="space-y-3">
                          {documentAnalysis.map((item, index) => (
                            <motion.li
                              key={index}
                              className="flex justify-between text-sm bg-white p-3 rounded-md shadow-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <span className="font-medium text-gray-700">
                                {item.key}:
                              </span>
                              <span className="text-gray-600">
                                {item.value}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIDocumentInteraction;
