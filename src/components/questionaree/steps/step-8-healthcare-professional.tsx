"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { 
  Stethoscope, 
  SmilePlus, 
  Dumbbell, 
  Flower2,
  Calculator,
  Scale,
  Users,
  Shield
} from "lucide-react"

const healthcareOptions = [
  {
    id: "clinic",
    title: "Clinic",
    description: "Medical clinic or healthcare facility",
    icon: <Stethoscope className="w-5 h-5" />,
  },
  {
    id: "dentist",
    title: "Dentist",
    description: "Dental practice and oral care",
    icon: <SmilePlus className="w-5 h-5" />,
  },
  {
    id: "gym",
    title: "Gym",
    description: "Fitness center and gym facility",
    icon: <Dumbbell className="w-5 h-5" />,
  },
  {
    id: "wellness-center",
    title: "Wellness Center",
    description: "Spa, yoga, or wellness services",
    icon: <Flower2 className="w-5 h-5" />,
  },
]

const professionalOptions = [
  {
    id: "ca-firm",
    title: "CA Firm",
    description: "Chartered accountancy services",
    icon: <Calculator className="w-5 h-5" />,
  },
  {
    id: "law-firm",
    title: "Law Firm",
    description: "Legal services and consultancy",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    id: "consultant",
    title: "Consultant",
    description: "Business or management consulting",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Insurance services and brokerage",
    icon: <Shield className="w-5 h-5" />,
  },
]

export function Step8HealthcareProfessional() {
  const { data, updateData } = useQuestionnaire()
  
  const isHealthcare = data.businessCategory === "healthcare-wellness"
  const isProfessional = data.businessCategory === "professional-services"
  const isRelevant = isHealthcare || isProfessional
  
  const options = isHealthcare ? healthcareOptions : professionalOptions
  const title = isHealthcare ? "Healthcare & Wellness" : "Professional Services"
  
  return (
    <StepWrapper
      title={`${title} Options`}
      description={isRelevant 
        ? `Select the specific type of ${title.toLowerCase()} you provide.`
        : "This step is for healthcare or professional services. You can skip to the next step."
      }
    >
      {isRelevant ? (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {options.map((option) => (
              <SelectableCard
                key={option.id}
                title={option.title}
                description={option.description}
                icon={option.icon}
                selected={data.businessSubCategory === option.id}
                onClick={() => updateData({ businessSubCategory: option.id })}
              />
            ))}
          </div>
          
          {data.businessSubCategory && options.find(s => s.id === data.businessSubCategory) && (
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                Selected: <span className="font-medium text-foreground">
                  {options.find(s => s.id === data.businessSubCategory)?.title}
                </span>
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="bg-muted/50 rounded-lg p-6 border border-border text-center">
          <p className="text-muted-foreground">
            Based on your selection, this step doesn&apos;t apply to your business type.
            <br />Click Next to continue.
          </p>
        </div>
      )}
      
      <NavigationButtons />
    </StepWrapper>
  )
}
