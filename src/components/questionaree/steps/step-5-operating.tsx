"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { SelectableCard } from "../selectable-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const daysOfWeek = [
  { id: "monday", title: "Monday", short: "Mon" },
  { id: "tuesday", title: "Tuesday", short: "Tue" },
  { id: "wednesday", title: "Wednesday", short: "Wed" },
  { id: "thursday", title: "Thursday", short: "Thu" },
  { id: "friday", title: "Friday", short: "Fri" },
  { id: "saturday", title: "Saturday", short: "Sat" },
  { id: "sunday", title: "Sunday", short: "Sun" },
]

export function Step5Operating() {
  const { data, updateData } = useQuestionnaire()
  
  const toggleDay = (id: string) => {
    const current = data.daysOpen || []
    const updated = current.includes(id)
      ? current.filter((d) => d !== id)
      : [...current, id]
    updateData({ daysOpen: updated })
  }
  
  return (
    <StepWrapper
      title="Business Operating Details"
      description="Let us know your business hours and days of operation."
    >
      <div className="grid gap-8">
        <div className="grid gap-4">
          <h3 className="font-medium text-foreground">Business Hours</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="businessHoursStart">Opening Time</Label>
              <Input
                id="businessHoursStart"
                type="time"
                value={data.businessHoursStart}
                onChange={(e) => updateData({ businessHoursStart: e.target.value })}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="businessHoursEnd">Closing Time</Label>
              <Input
                id="businessHoursEnd"
                type="time"
                value={data.businessHoursEnd}
                onChange={(e) => updateData({ businessHoursEnd: e.target.value })}
              />
            </div>
          </div>
        </div>
        
        <div className="grid gap-4">
          <h3 className="font-medium text-foreground">Days Open</h3>
          <p className="text-sm text-muted-foreground">Select all the days your business operates</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {daysOfWeek.map((day) => (
              <button
                key={day.id}
                type="button"
                onClick={() => toggleDay(day.id)}
                className={`
                  p-4 rounded-xl border-2 text-center transition-all duration-200
                  ${data.daysOpen?.includes(day.id)
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30"
                  }
                `}
              >
                <span className="block text-sm font-medium">{day.short}</span>
              </button>
            ))}
          </div>
          
          {data.daysOpen && data.daysOpen.length > 0 && (
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                Operating: <span className="font-medium text-foreground">{data.daysOpen.length} days per week</span>
              </p>
            </div>
          )}
        </div>
      </div>
      
      <NavigationButtons />
    </StepWrapper>
  )
}
