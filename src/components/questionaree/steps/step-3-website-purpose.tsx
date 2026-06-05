"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { Target, Award, Globe, Package, Calendar, Briefcase } from "lucide-react"

const purposes = [
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Capture potential customers and grow your client base",
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: "branding",
    title: "Branding",
    description: "Establish and strengthen your brand identity online",
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: "online-presence",
    title: "Online Presence",
    description: "Create visibility and credibility for your business",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: "product-showcase",
    title: "Product Showcase",
    description: "Display your products with detailed information",
    icon: <Package className="w-5 h-5" />,
  },
  {
    id: "online-booking",
    title: "Online Booking",
    description: "Allow customers to book appointments or services",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Showcase your work, projects, and achievements",
    icon: <Briefcase className="w-5 h-5" />,
  },
]

export function Step3WebsitePurpose() {
  const { data, updateData } = useQuestionnaire()
  
  const togglePurpose = (id: string) => {
    const current = data.websitePurpose || []
    const updated = current.includes(id)
      ? current.filter((p) => p !== id)
      : [...current, id]
    updateData({ websitePurpose: updated })
  }
  
  return (
    <StepWrapper
      title="Website Purpose"
      description="Select all the goals you want your website to achieve. You can choose multiple options."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {purposes.map((purpose) => (
          <SelectableCard
            key={purpose.id}
            title={purpose.title}
            description={purpose.description}
            icon={purpose.icon}
            selected={data.websitePurpose?.includes(purpose.id) || false}
            onClick={() => togglePurpose(purpose.id)}
          />
        ))}
      </div>
      
      {data.websitePurpose && data.websitePurpose.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-medium text-foreground">{data.websitePurpose.length} purpose(s)</span>
          </p>
        </div>
      )}
      
      <NavigationButtons />
    </StepWrapper>
  )
}
