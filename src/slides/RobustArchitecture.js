import { Layers, Database, Server, RefreshCw, Plug, HardDrive } from 'lucide-react';

export const RobustArchitecture = {
  title: "Robust Architecture",
  subtitle: "Built for Enterprise Performance",
  icon: <Layers className="w-24 h-24 text-red-500 mb-6" />,
  content: "NexusCore's architecture ensures seamless integration, scalability, and security.",
  bulletPoints: [
    { icon: <Database />, text: "State-of-the-art data ingestion and preprocessing" },
    { icon: <Server />, text: "Vector database for lightning-fast information retrieval" },
    { icon: <Layers />, text: "Scalable microservices architecture" },
    { icon: <RefreshCw />, text: "Real-time indexing and content updating" },
    { icon: <Plug />, text: "Comprehensive API ecosystem for seamless integrations" },
    { icon: <HardDrive />, text: "Enterprise-grade backup and disaster recovery" }
  ]
};