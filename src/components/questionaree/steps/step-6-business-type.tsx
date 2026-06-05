"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { 
  Wrench, 
  Heart, 
  Briefcase, 
  ShoppingBag, 
  UtensilsCrossed, 
  GraduationCap, 
  Building2 
} from "lucide-react"

const businessCategories = [
  {
    id: "local-services",
    title: "Local Service Businesses",
    description: "Electricians, plumbers, cleaning services, and more",
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    id: "healthcare-wellness",
    title: "Healthcare & Wellness",
    description: "Clinics, dentists, gyms, wellness centers",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: "professional-services",
    title: "Professional Services",
    description: "CA firms, law firms, consultants, insurance",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "retail-ecommerce",
    title: "Retail & eCommerce",
    description: "Fashion stores, electronics, grocery shops",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    id: "hospitality-food",
    title: "Hospitality & Food",
    description: "Restaurants, cafes, bakeries, hotels",
    icon: <UtensilsCrossed className="w-5 h-5" />,
  },
  {
    id: "education-training",
    title: "Education & Training",
    description: "Coaching institutes, schools, online courses",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "real-estate-industrial",
    title: "Real Estate & Industrial",
    description: "Manufacturing, logistics, warehouses, real estate",
    icon: <Building2 className="w-5 h-5" />,
  },
]

export function Step6BusinessType() {
  const { data, updateData } = useQuestionnaire()
  
  const selectCategory = (id: string) => {
    updateData({ 
      businessCategory: id,
      businessSubCategory: "" // Reset sub-category when category changes
    })
  }
  
  return (
    <StepWrapper
      title="Business Type Selection"
      description="Select the category that best describes your business."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {businessCategories.map((category) => (
          <SelectableCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            selected={data.businessCategory === category.id}
            onClick={() => selectCategory(category.id)}
          />
        ))}
      </div>
      
      {data.businessCategory && (
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-medium text-foreground">
              {businessCategories.find(c => c.id === data.businessCategory)?.title}
            </span>
          </p>
        </div>
      )}
      
      <NavigationButtons />
    </StepWrapper>
  )
}
