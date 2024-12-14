"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTimerContext } from "@/contexts/TimerContext";
import { useState, useEffect } from "react";
import { VisuallyHidden } from "@/components/visually-hidden";

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const { settings, updateSettings } = useTimerContext();
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleSave = () => {
    updateSettings(localSettings);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle asChild>
        <VisuallyHidden>Timer Settings</VisuallyHidden>
      </DialogTitle>
      <DialogContent className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg border-gray-700 text-gray-100 p-0 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-medium">Pomodoro Settings</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="focusTime">Focus Duration (minutes)</Label>
            <Input
              id="focusTime"
              type="number"
              value={localSettings.focusTime}
              onChange={(e) =>
                setLocalSettings({
                  ...localSettings,
                  focusTime: Number(e.target.value),
                })
              }
              className="bg-gray-700/50 border-gray-600 text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="shortBreakTime">
              Short Break Duration (minutes)
            </Label>
            <Input
              id="shortBreakTime"
              type="number"
              value={localSettings.shortBreakTime}
              onChange={(e) =>
                setLocalSettings({
                  ...localSettings,
                  shortBreakTime: Number(e.target.value),
                })
              }
              className="bg-gray-700/50 border-gray-600 text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="longBreakTime">Long Break Duration (minutes)</Label>
            <Input
              id="longBreakTime"
              type="number"
              value={localSettings.longBreakTime}
              onChange={(e) =>
                setLocalSettings({
                  ...localSettings,
                  longBreakTime: Number(e.target.value),
                })
              }
              className="bg-gray-700/50 border-gray-600 text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label>Break Type</Label>
            <RadioGroup
              value={localSettings.breakType}
              onValueChange={(value) =>
                setLocalSettings({
                  ...localSettings,
                  breakType: value as "short" | "long",
                })
              }
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="short" id="short-break" />
                <Label htmlFor="short-break">Short Breaks</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="long" id="long-break" />
                <Label htmlFor="long-break">Long Breaks</Label>
              </div>
            </RadioGroup>
          </div>
          <Button
            onClick={handleSave}
            className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100"
          >
            Save Settings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
