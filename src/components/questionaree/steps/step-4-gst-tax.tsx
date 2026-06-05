"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { FileUpload } from "../file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const businessTypes = [
  { value: "sole-proprietorship", label: "Sole Proprietorship" },
  { value: "partnership", label: "Partnership" },
  { value: "llp", label: "Limited Liability Partnership (LLP)" },
  { value: "private-limited", label: "Private Limited Company" },
  { value: "public-limited", label: "Public Limited Company" },
  { value: "one-person-company", label: "One Person Company (OPC)" },
  { value: "trust", label: "Trust" },
  { value: "ngo", label: "NGO / Non-Profit" },
]

export function Step4GSTTax() {
  const { data, updateData } = useQuestionnaire()
  
  return (
    <StepWrapper
      title="GST & Tax Details"
      description="Provide your business registration and tax information."
    >
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="gstNumber">GST Number</Label>
            <Input
              id="gstNumber"
              placeholder="e.g., 22AAAAA0000A1Z5"
              value={data.gstNumber}
              onChange={(e) => updateData({ gstNumber: e.target.value.toUpperCase() })}
              maxLength={15}
            />
            <p className="text-xs text-muted-foreground">
              15-character alphanumeric GST identification number
            </p>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="panNumber">PAN Number</Label>
            <Input
              id="panNumber"
              placeholder="e.g., AAAAA0000A"
              value={data.panNumber}
              onChange={(e) => updateData({ panNumber: e.target.value.toUpperCase() })}
              maxLength={10}
            />
            <p className="text-xs text-muted-foreground">
              10-character alphanumeric PAN
            </p>
          </div>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="businessType">Business Type</Label>
          <Select
            value={data.businessType}
            onValueChange={(value) => updateData({ businessType: value })}
          >
            <SelectTrigger id="businessType">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="pt-2">
          <FileUpload
            label="Business Registration Document"
            description="Upload your business registration certificate or GST certificate"
            value={data.taxDocument}
            onChange={(file) => updateData({ taxDocument: file })}
          />
        </div>
      </div>
      
      <NavigationButtons />
    </StepWrapper>
  )
}
