"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Step2BasicDetails() {
  const { data, updateData } = useQuestionnaire()
  
  return (
    <StepWrapper
      title="Business Basic Details"
      description="Tell us about your business and how we can contact you."
    >
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="businessName">Business Name *</Label>
          <Input
            id="businessName"
            placeholder="Enter your business name"
            value={data.businessName}
            onChange={(e) => updateData({ businessName: e.target.value })}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="contactPerson">Contact Person Name *</Label>
            <Input
              id="contactPerson"
              placeholder="Enter contact person name"
              value={data.contactPerson}
              onChange={(e) => updateData({ contactPerson: e.target.value })}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              placeholder="e.g., Owner, Manager, Director"
              value={data.designation}
              onChange={(e) => updateData({ designation: e.target.value })}
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={data.phoneNumber}
              onChange={(e) => updateData({ phoneNumber: e.target.value })}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@business.com"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
            />
          </div>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="brandTagline">Brand Tagline</Label>
          <Input
            id="brandTagline"
            placeholder="Your catchy brand tagline or slogan"
            value={data.brandTagline}
            onChange={(e) => updateData({ brandTagline: e.target.value })}
          />
          <p className="text-xs text-muted-foreground">
            A short phrase that captures your brand essence
          </p>
        </div>
      </div>
      
      <NavigationButtons />
    </StepWrapper>
  )
}
