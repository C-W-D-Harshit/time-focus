"use client";

import PomodoroTimer from "@/components/PomodoroTimer";
import KanbanBoard from "@/components/KanbanBoard";
import { TimerProvider } from "@/contexts/TimerContext";

export default function Home() {
  return (
    <TimerProvider>
      <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-medium text-gray-100 text-center">
            Pomodoro Task Manager
          </h1>
          <PomodoroTimer />
          <KanbanBoard />
        </div>
      </div>
    </TimerProvider>
  );
}
