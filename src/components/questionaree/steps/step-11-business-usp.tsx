"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { 
  Zap, 
  BadgeDollarSign, 
  UserCheck,
  Crown,
  Users,
  Clock,
  BadgeCheck
} from "lucide-react"

const uspOptions = [
  {
    id: "fast-service",
    title: "Fast Service",
    description: "Quick turnaround and efficient delivery",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "affordable-pricing",
    title: "Affordable Pricing",
    description: "Competitive rates and value for money",
    icon: <BadgeDollarSign className="w-5 h-5" />,
  },
  {
    id: "trusted-professionals",
    title: "Trusted Professionals",
    description: "Experienced and reliable team members",
    icon: <UserCheck className="w-5 h-5" />,
  },
  {
    id: "premium-quality",
    title: "Premium Quality",
    description: "Top-tier products and services",
    icon: <Crown className="w-5 h-5" />,
  },
  {
    id: "expert-team",
    title: "Expert Team",
    description: "Skilled specialists in their domain",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "24-7-support",
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: "certified-business",
    title: "Certified Business",
    description: "Industry-certified and compliant",
    icon: <BadgeCheck className="w-5 h-5" />,
  },
]

export function Step11BusinessUSP() {
  const { data, updateData } = useQuestionnaire()
  
  const toggleUSP = (id: string) => {
    const current = data.businessUSP || []
    const updated = current.includes(id)
      ? current.filter((u) => u !== id)
      : [...current, id]
    updateData({ businessUSP: updated })
  }
  
  return (
    <StepWrapper
      title="Business USP Selection"
      description="Select all the unique selling points that apply to your business."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {uspOptions.map((usp) => (
          <SelectableCard
            key={usp.id}
            title={usp.title}
            description={usp.description}
            icon={usp.icon}
            selected={data.businessUSP?.includes(usp.id) || false}
            onClick={() => toggleUSP(usp.id)}
          />
        ))}
      </div>
      
      {data.businessUSP && data.businessUSP.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-medium text-foreground">{data.businessUSP.length} USP(s)</span>
          </p>
        </div>
      )}
      
      <NavigationButtons />
    </StepWrapper>
  )
}
