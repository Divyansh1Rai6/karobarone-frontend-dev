"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export interface QuestionnaireData {
  // Page 2 - Business Basic Details
  businessName: string
  contactPerson: string
  designation: string
  phoneNumber: string
  email: string
  brandTagline: string
  
  // Page 3 - Website Purpose
  websitePurpose: string[]
  
  // Page 4 - GST & Tax Details
  gstNumber: string
  panNumber: string
  businessType: string
  taxDocument: File | null
  
  // Page 5 - Business Operating Details
  businessHoursStart: string
  businessHoursEnd: string
  daysOpen: string[]
  
  // Page 6-10 - Business Type Selection
  businessCategory: string
  businessSubCategory: string
  
  // Page 11 - Business USP
  businessUSP: string[]
  
  // Page 12 - About Us
  problemSolved: string
  uniqueSolution: string
  trustCredibility: string
  
  // Page 13 - Licenses & Certifications
  businessRegistration: File | null
  taxCompliance: File | null
  tradeAuthorization: File | null
  safetyCompliance: File | null
  qualityCertifications: File | null
  brandIdentity: File | null
  
  // Page 14 - Confirmation
  confirmed: boolean
}

const initialData: QuestionnaireData = {
  businessName: "",
  contactPerson: "",
  designation: "",
  phoneNumber: "",
  email: "",
  brandTagline: "",
  websitePurpose: [],
  gstNumber: "",
  panNumber: "",
  businessType: "",
  taxDocument: null,
  businessHoursStart: "09:00",
  businessHoursEnd: "18:00",
  daysOpen: [],
  businessCategory: "",
  businessSubCategory: "",
  businessUSP: [],
  problemSolved: "",
  uniqueSolution: "",
  trustCredibility: "",
  businessRegistration: null,
  taxCompliance: null,
  tradeAuthorization: null,
  safetyCompliance: null,
  qualityCertifications: null,
  brandIdentity: null,
  confirmed: false,
}

interface QuestionnaireContextType {
  data: QuestionnaireData
  updateData: (updates: Partial<QuestionnaireData>) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  totalSteps: number
  nextStep: () => void
  prevStep: () => void
  resetQuestionnaire: () => void
}

const QuestionnaireContext = createContext<QuestionnaireContextType | undefined>(undefined)

export function QuestionnaireProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<QuestionnaireData>(initialData)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 15
  
  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("questionnaireData")
    const savedStep = localStorage.getItem("questionnaireStep")
    
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        // Files cannot be stored in localStorage, so we exclude them
        setData({ ...initialData, ...parsed })
      } catch (e) {
        console.error("Failed to parse saved data:", e)
      }
    }
    
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10))
    }
  }, [])
  
  // Save to localStorage on change
  useEffect(() => {
    // Create a copy without File objects for localStorage
    const dataToSave = { ...data }
    Object.keys(dataToSave).forEach((key) => {
      const value = dataToSave[key as keyof QuestionnaireData]
      if (value instanceof File) {
        (dataToSave as Record<string, unknown>)[key] = null
      }
    })
    localStorage.setItem("questionnaireData", JSON.stringify(dataToSave))
    localStorage.setItem("questionnaireStep", currentStep.toString())
  }, [data, currentStep])
  
  const updateData = (updates: Partial<QuestionnaireData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  const resetQuestionnaire = () => {
    setData(initialData)
    setCurrentStep(1)
    localStorage.removeItem("questionnaireData")
    localStorage.removeItem("questionnaireStep")
  }
  
  return (
    <QuestionnaireContext.Provider
      value={{
        data,
        updateData,
        currentStep,
        setCurrentStep,
        totalSteps,
        nextStep,
        prevStep,
        resetQuestionnaire,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
}

export function useQuestionnaire() {
  const context = useContext(QuestionnaireContext)
  if (context === undefined) {
    throw new Error("useQuestionnaire must be used within a QuestionnaireProvider")
  }
  return context
}
