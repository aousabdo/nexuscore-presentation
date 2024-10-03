import { Lock, Key, FileCheck, Shield, UserCheck, Fingerprint, Brain } from 'lucide-react';

export const IroncladSecurity = {
  title: "Ironclad Security",
  subtitle: "Enterprise-Grade Protection",
  icon: <Lock className="w-24 h-24 text-gray-400 mb-6" />,
  content: "NexusCore prioritizes your data security with multi-layered, compliant protection.",
  bulletPoints: [
    { icon: <Key />, text: "End-to-end AES-256 encryption" },
    { icon: <FileCheck />, text: "Compliance with ISO 27001, GDPR, and HIPAA" },
    { icon: <Shield />, text: "Regular third-party security audits" },
    { icon: <UserCheck />, text: "Granular access controls and detailed activity logging" },
    { icon: <Fingerprint />, text: "Multi-factor authentication (MFA)" },
    { icon: <Brain />, text: "AI-powered threat detection and response" }
  ]
};