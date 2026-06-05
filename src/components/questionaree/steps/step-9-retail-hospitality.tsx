"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { 
  Shirt, 
  Laptop, 
  ShoppingCart,
  Utensils,
  Coffee,
  Cake,
  Hotel
} from "lucide-react"

const retailOptions = [
  {
    id: "fashion-store",
    title: "Fashion Store",
    description: "Clothing, accessories, and apparel",
    icon: <Shirt className="w-5 h-5" />,
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Electronics and gadgets store",
    icon: <Laptop className="w-5 h-5" />,
  },
  {
    id: "grocery",
    title: "Grocery",
    description: "Grocery store or supermarket",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
]

const hospitalityOptions = [
  {
    id: "restaurant",
    title: "Restaurant",
    description: "Full-service restaurant or eatery",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    id: "cafe",
    title: "Cafe",
    description: "Coffee shop or casual cafe",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    id: "bakery",
    title: "Bakery",
    description: "Bakery and confectionery",
    icon: <Cake className="w-5 h-5" />,
  },
  {
    id: "hotel",
    title: "Hotel",
    description: "Hotel or accommodation services",
    icon: <Hotel className="w-5 h-5" />,
  },
]

export function Step9RetailHospitality() {
  const { data, updateData } = useQuestionnaire()
  
  const isRetail = data.businessCategory === "retail-ecommerce"
  const isHospitality = data.businessCategory === "hospitality-food"
  const isRelevant = isRetail || isHospitality
  
  return (
    <StepWrapper
      title="Retail & Hospitality Options"
      description={isRelevant 
        ? "Select the specific type of business you operate."
        : "This step is for retail or hospitality businesses. You can skip to the next step."
      }
    >
      {isRelevant ? (
        <>
          {isRetail && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Retail Options</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {retailOptions.map((option) => (
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
          
          {isHospitality && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Hospitality Options</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {hospitalityOptions.map((option) => (
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
                  {[...retailOptions, ...hospitalityOptions].find(s => s.id === data.businessSubCategory)?.title}
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
