import { Cpu, MessageSquare, GitMerge, FileText, TrendingUp, Tags, Globe, Folder } from 'lucide-react';

export const CuttingEdgeCapabilities = {
  title: "Cutting-Edge Capabilities",
  subtitle: "Powered by Next-Gen AI",
  icon: <Cpu className="w-24 h-24 text-purple-500 mb-6" />,
  content: "Experience unparalleled performance with NexusCore's state-of-the-art features.",
  bulletPoints: [
    { icon: <MessageSquare />, text: "Advanced natural language processing for human-like interaction" },
    { icon: <GitMerge />, text: "Multi-source information fusion and synthesis" },
    { icon: <Folder />, text: "Create folders to organize your files and chat with multiple PDFs in one single conversation." },
    { icon: <Tags />, text: "Answers contain references to their source in the original PDF document. No more flipping pages." },
    { icon: <FileText />, text: "Intelligent document summarization and analysis" },
    { icon: <TrendingUp />, text: "Predictive analytics and proactive information delivery" }, 
  ]
};