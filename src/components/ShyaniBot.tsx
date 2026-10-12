import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, User, Bot, Sparkles, ChevronRight, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const FAQS = [
  {
    question: "Know who is Shyani",
    answer: "Shyani is a digital architect who blends code with creativity! 🎨 She's a full-stack developer with a sharp eye for design, turning complex problems into elegant, user-centric experiences. When she's not coding, she's likely exploring the latest design trends or experimenting with new tech."
  },
  {
    question: "Hire Shyani",
    answer: "Ready to build something amazing? 🚀 Shyani is always on the lookout for innovative projects and teams. You can drop her a line at shyanipal06@gmail.com or use the contact form below. Let's turn your vision into reality!"
  },
  {
    question: "How Shyani made this portfolio",
    answer: "This isn't just a website; it's a playground! 🎡 Built with React and TypeScript for rock-solid logic, Tailwind CSS for sleek styling, and Framer Motion for those buttery-smooth animations. Every pixel was crafted to showcase the intersection of fun and functionality."
  }
];

export default function ShyaniBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showFaqs, setShowFaqs] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Digital Shyani ✨. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showFaqs]);

  const getGeminiResponse = async (userText: string) => {
    setIsTyping(true);
    setShowFaqs(false);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userText,
        config: {
          systemInstruction: "You are 'Digital Shyani', an AI assistant for Shyani Pal's portfolio. You are creative, professional, and friendly. You should answer questions about Shyani's work, skills, and experience. Shyani is a full-stack developer and designer. If asked about hiring, mention shyanipal06@gmail.com. Keep responses concise and engaging. Use emojis occasionally.",
        },
      });

      const botMsg: Message = {
        id: Date.now().toString(),
        text: response.text || "I'm not sure how to answer that, but I'd love to chat more about Shyani's work!",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Gemini Error:", error);
      const errorMsg: Message = {
        id: Date.now().toString(),
        text: "Oops, I hit a snag! But Shyani is still awesome. Try asking me something else!",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setShowFaqs(false);
    
    await getGeminiResponse(text);
  };

  const handleFAQClick = (faq: typeof FAQS[0]) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text: faq.question,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setShowFaqs(false);

    setIsTyping(true);
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: faq.answer,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-[32px] shadow-2xl border border-zinc-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zinc-900 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-accent tracking-tight">Digital Shyani ✨</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!showFaqs && messages.length > 1 && (
                  <button 
                    onClick={() => setShowFaqs(true)}
                    className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                  >
                    FAQs
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.sender === "user" 
                      ? "bg-brand-primary text-white rounded-tr-none" 
                      : "bg-zinc-50 text-zinc-900 rounded-tl-none border border-zinc-100"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-zinc-50 p-4 rounded-2xl rounded-tl-none border border-zinc-100">
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                  </div>
                </motion.div>
              )}
              
              {showFaqs && !isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4 space-y-2"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Quick Questions</p>
                    {messages.length > 1 && (
                      <button 
                        onClick={() => setShowFaqs(false)}
                        className="text-[8px] font-bold uppercase tracking-widest text-brand-primary font-accent lowercase"
                      >
                        Hide
                      </button>
                    )}
                  </div>
                  {FAQS.map((faq, i) => (
                    <button
                      key={i}
                      onClick={() => handleFAQClick(faq)}
                      className="w-full text-left p-3 rounded-xl border border-zinc-100 hover:border-brand-primary hover:bg-brand-primary/5 transition-all text-xs font-medium text-zinc-600 flex items-center justify-between group"
                    >
                      {faq.question}
                      <ChevronRight className="w-3 h-3 text-zinc-300 group-hover:text-brand-primary transition-colors" />
                    </button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-100 bg-zinc-50/50">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex gap-2"
              >
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className="flex-1 bg-white border border-zinc-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={isTyping}
                  className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center hover:bg-brand-primary transition-colors shadow-lg shadow-zinc-900/10 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? "bg-zinc-900 text-white rotate-90" : "bg-brand-primary text-white"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"
          />
        )}
      </motion.button>
    </div>
  );
}
