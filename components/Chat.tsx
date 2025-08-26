"use client"
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, User, Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hey there! I'm Sunnith Kumar Chinthapally, a Full Stack Developer from Toronto. I'd love to tell you about my work, projects, or anything else you're curious about! What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      } else {
        // Fallback to direct scrolling
        scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!isLoading) {
      // Small delay to ensure the message is rendered before scrolling
      setTimeout(() => scrollToBottom(), 100)
    }
  }, [isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    // Scroll to bottom immediately after adding user message
    setTimeout(() => scrollToBottom(), 50)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        // Handle API errors with specific messages
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.error || data.details || "Sorry, I'm having trouble responding right now. Please try again later!",
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
        return
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      
      // Scroll to bottom after assistant message is added
      setTimeout(() => scrollToBottom(), 100)
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, I'm having trouble responding right now. Please try again later!",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
      
      // Scroll to bottom after error message is added
      setTimeout(() => scrollToBottom(), 100)
    } finally {
      setIsLoading(false)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
            <div className="bg-black border border-gray-800 rounded-2xl p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-gray-300" />
          </div>
          <div>
            <h3 className="text-base text-left font-medium text-white">Chat with Sunnith</h3>
            <p className="text-xs text-gray-500 text-left">Ask me anything about my work, projects, or experience!</p>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea ref={scrollAreaRef} className="h-96 mb-4" type="always">
          <div className="space-y-4 pr-4" id="messages-container">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-3 h-3 text-gray-300" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-2xl px-3 py-2 ${
                      message.role === 'user' 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-900 text-white'
                    }`}>
                      <p className="text-sm leading-relaxed text-left">{message.content}</p>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 ${
                      message.role === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 justify-start"
              >
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-gray-300" />
                </div>
                <div className="bg-gray-900 rounded-2xl px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin text-gray-400" />
                    <span className="text-sm text-gray-300">Sunnith is typing...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </ScrollArea>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about my projects, skills, or experience..."
            className="flex-1 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-2xl"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-2xl"
          >
            <Send className="w-3 h-3" />
          </Button>
        </form>

        {/* Quick Questions */}
        <div className="mt-3 pt-3 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "What projects are you working on?",
              "Tell me about your tech stack"
            ].map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="text-xs bg-gray-800 hover:bg-gray-700 rounded-full px-3 py-1 text-gray-300 hover:text-white transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Chat 