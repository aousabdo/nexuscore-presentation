import { GitBranch, Share, Brain, MessageSquare, Zap, RefreshCw, Key } from 'lucide-react';

export const IntroducingNexusCore = {
  title: "Introducing NexusCore",
  subtitle: "The Cerebral Core of Your Organization",
  icon: <GitBranch className="w-24 h-24 text-blue-400 mb-6" />,
  content: "Revolutionize your information ecosystem with NexusCore - the AI-powered central nervous system for your enterprise.",
  bulletPoints: [
    { text: "Seamlessly integrates with SharePoint and existing infrastructure", icon: <Share /> },
    { text: "Harnesses RAG and LLM finetuning for unparalleled context awareness and tailored AI responses", icon: <Brain /> },
    { text: "Offers seamless, conversational interaction with your entire data ecosystem", icon: <MessageSquare /> },
    { text: "Enables natural language queries for effortless information retrieval and analysis", icon: <Zap /> },
    { text: "Evolves and adapts to your organization's unique needs", icon: <RefreshCw /> },
    { text: "Unlocks the full potential of your collective knowledge", icon: <Key /> }
  ]
};