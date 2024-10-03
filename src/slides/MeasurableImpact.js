import { BarChart, Clock, UserPlus, TicketCheck, CheckSquare, ThumbsUp, ShieldCheck } from 'lucide-react';

export const MeasurableImpact = {
  title: "Measurable Impact",
  subtitle: "Driving Tangible Results",
  icon: <BarChart className="w-24 h-24 text-yellow-500 mb-6" />,
  content: "NexusCore delivers clear, quantifiable benefits across your organization.",
  bulletPoints: [
    { icon: <Clock />, text: "5-10 hours saved per employee per week" },
    { icon: <UserPlus />, text: "50% reduction in new employee onboarding time" },
    { icon: <TicketCheck />, text: "30% decrease in information-related support tickets" },
    { icon: <CheckSquare />, text: "20% boost in project completion rates" },
    { icon: <ThumbsUp />, text: "90%+ user satisfaction rate" },
    { icon: <ShieldCheck />, text: "Significant reduction in compliance-related incidents" }
  ]
};