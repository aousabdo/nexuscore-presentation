import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Lock, TrendingUp, BarChart, Layers, Cpu, GitBranch, Share, Brain, MessageSquare, Search, RefreshCw, Key } from 'lucide-react';

const slides = [
  {
    title: "Introducing NexusCore",
    subtitle: "The Cerebral Core of Your Organization",
    icon: <GitBranch className="w-24 h-24 text-blue-400 mb-6" />,
    content: "Revolutionize your information ecosystem with NexusCore - the AI-powered central nervous system for your enterprise.",
    bulletPoints: [
      { text: "Seamlessly integrates with SharePoint and existing infrastructure", icon: <Share className="w-8 h-8 text-blue-400 mr-3" /> },
      { text: "Harnesses state-of-the-art Retrieval Augmented Generation (RAG) for unparalleled context awareness", icon: <Brain className="w-8 h-8 text-blue-400 mr-3" /> },
      { text: "Employs advanced LLM finetuning techniques to tailor AI responses to your organization", icon: <Cpu className="w-8 h-8 text-blue-400 mr-3" /> },
      { text: "Offers seamless, conversational interaction with your entire data ecosystem", icon: <MessageSquare className="w-8 h-8 text-blue-400 mr-3" /> },
      { text: "Enables natural language queries for effortless information retrieval and analysis", icon: <Zap className="w-8 h-8 text-blue-400 mr-3" /> },
      { text: "Evolves and adapts to your organization's unique needs", icon: <RefreshCw className="w-8 h-8 text-blue-400 mr-3" /> },
      { text: "Unlocks the full potential of your collective knowledge", icon: <Key className="w-8 h-8 text-blue-400 mr-3" /> }
    ]
  },
  {
    title: "Transforming Business Challenges",
    subtitle: "From Information Chaos to Clarity",
    icon: <TrendingUp className="w-24 h-24 text-green-500 mb-6" />,
    content: "NexusCore turns your biggest information challenges into your greatest strengths.",
    bulletPoints: [
      "Slashes information retrieval time by up to 80%",
      "Demolishes knowledge silos, fostering innovation",
      "Ensures real-time consistency across all procedures",
      "Accelerates onboarding and continuous learning",
      "Minimizes errors and boosts compliance",
      "Supercharges decision-making with contextual insights"
    ]
  },
  {
    title: "Cutting-Edge Capabilities",
    subtitle: "Powered by Next-Gen AI",
    icon: <Cpu className="w-24 h-24 text-purple-500 mb-6" />,
    content: "Experience unparalleled performance with NexusCore's state-of-the-art features.",
    bulletPoints: [
      "Advanced natural language processing for human-like interaction",
      "Multi-source information fusion and synthesis",
      "Intelligent document summarization and analysis",
      "Predictive analytics and proactive information delivery",
      "Automated content tagging and categorization",
      "Expansive multilingual support for global operations"
    ]
  },
  {
    title: "Robust Architecture",
    subtitle: "Built for Enterprise Performance",
    icon: <Layers className="w-24 h-24 text-red-500 mb-6" />,
    content: "NexusCore's architecture ensures seamless integration, scalability, and security.",
    bulletPoints: [
      "State-of-the-art data ingestion and preprocessing",
      "Vector database for lightning-fast information retrieval",
      "Scalable microservices architecture",
      "Real-time indexing and content updating",
      "Comprehensive API ecosystem for seamless integrations",
      "Enterprise-grade backup and disaster recovery"
    ]
  },
  {
    title: "Measurable Impact",
    subtitle: "Driving Tangible Results",
    icon: <BarChart className="w-24 h-24 text-yellow-500 mb-6" />,
    content: "NexusCore delivers clear, quantifiable benefits across your organization.",
    bulletPoints: [
      "5-10 hours saved per employee per week",
      "50% reduction in new employee onboarding time",
      "30% decrease in information-related support tickets",
      "20% boost in project completion rates",
      "90%+ user satisfaction rate",
      "Significant reduction in compliance-related incidents"
    ]
  },
  {
    title: "Ironclad Security",
    subtitle: "Enterprise-Grade Protection",
    icon: <Lock className="w-24 h-24 text-gray-400 mb-6" />,
    content: "NexusCore prioritizes your data security with multi-layered, compliant protection.",
    bulletPoints: [
      "End-to-end AES-256 encryption",
      "Compliance with ISO 27001, GDPR, and HIPAA",
      "Regular third-party security audits",
      "Granular access controls and detailed activity logging",
      "Multi-factor authentication (MFA)",
      "AI-powered threat detection and response"
    ]
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen w-full flex items-center justify-center p-8">
      <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-6xl p-12 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-center mb-8">
          {slides[currentSlide].icon}
          <h1 className="text-6xl font-bold mb-4 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">{slides[currentSlide].subtitle}</h2>
        </div>
        <p className="text-2xl mb-8 text-gray-100 text-center italic">{slides[currentSlide].content}</p>
        <ul className="space-y-4 mb-12">
          {slides[currentSlide].bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start text-xl text-gray-200">
              {point.icon ? (
                point.icon
              ) : (
                <span className="mr-4 text-green-400 text-3xl leading-none">•</span>
              )}
              {point.text || point}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <button onClick={prevSlide} className="p-4 bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-110">
            <ChevronLeft size={32} />
          </button>
          <span className="text-gray-300 text-2xl">
            {currentSlide + 1} / {slides.length}
          </span>
          <button onClick={nextSlide} className="p-4 bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-110">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;