"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Step12AboutUs() {
  const { data, updateData } = useQuestionnaire()
  
  return (
    <StepWrapper
      title="About Us Information"
      description="Tell us your story. This information will help us craft compelling content for your website."
    >
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="problemSolved">What problem does your business solve?</Label>
          <Textarea
            id="problemSolved"
            placeholder="Describe the main problem or pain point that your business addresses for customers..."
            value={data.problemSolved}
            onChange={(e) => updateData({ problemSolved: e.target.value })}
            rows={4}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground">
            Example: We help busy professionals save time by providing quick and reliable home cleaning services.
          </p>
        </div>
        
        <div className="grid gap-3">
          <Label htmlFor="uniqueSolution">What makes your solution unique?</Label>
          <Textarea
            id="uniqueSolution"
            placeholder="Explain what sets your business apart from competitors..."
            value={data.uniqueSolution}
            onChange={(e) => updateData({ uniqueSolution: e.target.value })}
            rows={4}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground">
            Example: We use eco-friendly products and our trained staff follows a 50-point checklist for every cleaning.
          </p>
        </div>
        
        <div className="grid gap-3">
          <Label htmlFor="trustCredibility">Why should customers trust you?</Label>
          <Textarea
            id="trustCredibility"
            placeholder="Share your credentials, experience, achievements, or customer testimonials..."
            value={data.trustCredibility}
            onChange={(e) => updateData({ trustCredibility: e.target.value })}
            rows={4}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground">
            Example: With 10+ years of experience and 5000+ satisfied customers, we have built a reputation for excellence.
          </p>
        </div>
      </div>
      
      <NavigationButtons />
    </StepWrapper>
  )
}
