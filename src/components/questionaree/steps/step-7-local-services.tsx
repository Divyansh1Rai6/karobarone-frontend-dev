"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { Zap, Droplet, Wind, Sparkles, Bug, Truck } from "lucide-react"

const localServices = [
  {
    id: "electrician",
    title: "Electrician",
    description: "Electrical repairs, installations, and maintenance",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "plumber",
    title: "Plumber",
    description: "Plumbing services, repairs, and installations",
    icon: <Droplet className="w-5 h-5" />,
  },
  {
    id: "ac-repair",
    title: "AC Repair",
    description: "Air conditioning service and maintenance",
    icon: <Wind className="w-5 h-5" />,
  },
  {
    id: "cleaning-service",
    title: "Cleaning Service",
    description: "Professional cleaning for homes and offices",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: "pest-control",
    title: "Pest Control",
    description: "Pest management and extermination services",
    icon: <Bug className="w-5 h-5" />,
  },
  {
    id: "movers-packers",
    title: "Movers & Packers",
    description: "Relocation and moving services",
    icon: <Truck className="w-5 h-5" />,
  },
]

export function Step7LocalServices() {
  const { data, updateData } = useQuestionnaire()
  
  // Skip this step if not local services category
  const isRelevant = data.businessCategory === "local-services"
  
  return (
    <StepWrapper
      title="Local Service Options"
      description={isRelevant 
        ? "Select the specific type of local service you provide."
        : "This step is for local service businesses. You can skip to the next step."
      }
    >
      {isRelevant ? (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {localServices.map((service) => (
              <SelectableCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                selected={data.businessSubCategory === service.id}
                onClick={() => updateData({ businessSubCategory: service.id })}
              />
            ))}
          </div>
          
          {data.businessSubCategory && localServices.find(s => s.id === data.businessSubCategory) && (
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                Selected: <span className="font-medium text-foreground">
                  {localServices.find(s => s.id === data.businessSubCategory)?.title}
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
