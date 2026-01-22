import type { ReactNode } from 'react'
import { TopBar } from './TopBar'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      <TopBar />
      <main className="flex-1 min-h-0">
        <div className="h-full container mx-auto px-4 py-6 flex flex-col">
          {children}
        </div>
      </main>
    </div>
  )
}
