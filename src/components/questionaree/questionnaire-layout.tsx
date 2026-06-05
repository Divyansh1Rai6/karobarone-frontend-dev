"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { ProgressBar } from "./progress-bar"
import { SidebarNavigation } from "./sidebar-navigation"
import { Step1Welcome } from "./steps/step-1-welcome"
import { Step2BasicDetails } from "./steps/step-2-basic-details"
import { Step3WebsitePurpose } from "./steps/step-3-website-purpose"
import { Step4GSTTax } from "./steps/step-4-gst-tax"
import { Step5Operating } from "./steps/step-5-operating"
import { Step6BusinessType } from "./steps/step-6-business-type"
import { Step7LocalServices } from "./steps/step-7-local-services"
import { Step8HealthcareProfessional } from "./steps/step-8-healthcare-professional"
import { Step9RetailHospitality } from "./steps/step-9-retail-hospitality"
import { Step10EducationIndustrial } from "./steps/step-10-education-industrial"
import { Step11BusinessUSP } from "./steps/step-11-business-usp"
import { Step12AboutUs } from "./steps/step-12-about-us"
import { Step13Licenses } from "./steps/step-13-licenses"
import { Step14Review } from "./steps/step-14-review"
import { Step15Success } from "./steps/step-15-success"

const steps: { [key: number]: React.ComponentType } = {
  1: Step1Welcome,
  2: Step2BasicDetails,
  3: Step3WebsitePurpose,
  4: Step4GSTTax,
  5: Step5Operating,
  6: Step6BusinessType,
  7: Step7LocalServices,
  8: Step8HealthcareProfessional,
  9: Step9RetailHospitality,
  10: Step10EducationIndustrial,
  11: Step11BusinessUSP,
  12: Step12AboutUs,
  13: Step13Licenses,
  14: Step14Review,
  15: Step15Success,
}

export function QuestionnaireLayout() {
  const { currentStep } = useQuestionnaire()
  
  const CurrentStepComponent = steps[currentStep] || Step1Welcome
  const showSidebar = currentStep > 1 && currentStep < 15
  const showProgress = currentStep > 1 && currentStep < 15
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">W</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:inline">
                Website Requirement Questionnaire
              </span>
            </div>
            {showProgress && (
              <div className="flex-1 max-w-xs ml-4 hidden md:block">
                <ProgressBar />
              </div>
            )}
          </div>
          {showProgress && (
            <div className="mt-3 md:hidden">
              <ProgressBar />
            </div>
          )}
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {showSidebar && <SidebarNavigation />}
          
          <div className={`flex-1 ${showSidebar ? "max-w-3xl" : "max-w-4xl mx-auto"}`}>
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
              <CurrentStepComponent />
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-6 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Your information is secure and will only be used for website development purposes.
          </p>
        </div>
      </footer>
    </div>
  )
}
