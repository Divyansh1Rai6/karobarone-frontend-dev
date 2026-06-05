"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { 
  BookOpen, 
  School, 
  Monitor,
  Factory,
  Truck,
  Warehouse,
  Building
} from "lucide-react"

const educationOptions = [
  {
    id: "coaching-institute",
    title: "Coaching Institute",
    description: "Coaching classes and tutoring services",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: "school",
    title: "School",
    description: "Educational institution or academy",
    icon: <School className="w-5 h-5" />,
  },
  {
    id: "online-courses",
    title: "Online Courses",
    description: "E-learning and online education",
    icon: <Monitor className="w-5 h-5" />,
  },
]

const industrialOptions = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Manufacturing and production facility",
    icon: <Factory className="w-5 h-5" />,
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Logistics and transportation services",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    id: "warehouse",
    title: "Warehouse",
    description: "Warehousing and storage services",
    icon: <Warehouse className="w-5 h-5" />,
  },
  {
    id: "real-estate-agency",
    title: "Real Estate Agency",
    description: "Property dealing and real estate services",
    icon: <Building className="w-5 h-5" />,
  },
]

export function Step10EducationIndustrial() {
  const { data, updateData } = useQuestionnaire()
  
  const isEducation = data.businessCategory === "education-training"
  const isIndustrial = data.businessCategory === "real-estate-industrial"
  const isRelevant = isEducation || isIndustrial
  
  return (
    <StepWrapper
      title="Education & Industrial Options"
      description={isRelevant 
        ? "Select the specific type of business you operate."
        : "This step is for education or industrial businesses. You can skip to the next step."
      }
    >
      {isRelevant ? (
        <>
          {isEducation && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Education Options</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {educationOptions.map((option) => (
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
            </div>
          )}
          
          {isIndustrial && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Industrial Options</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {industrialOptions.map((option) => (
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
            </div>
          )}
          
          {data.businessSubCategory && (
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                Selected: <span className="font-medium text-foreground">
                  {[...educationOptions, ...industrialOptions].find(s => s.id === data.businessSubCategory)?.title}
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
