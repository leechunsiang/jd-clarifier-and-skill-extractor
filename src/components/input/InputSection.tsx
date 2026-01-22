import { useState } from 'react'
import { Upload, Sparkles, Loader2 } from 'lucide-react'
import type { JobData } from '../../pages/JobEditor'
import { parseFile } from '../../lib/fileParser'

interface InputSectionProps {
  jobData: JobData
  setJobData: (data: JobData | ((prev: JobData) => JobData)) => void
  onAnalyze: () => void
  isAnalyzing: boolean
}

export function InputSection({ jobData, setJobData, onAnalyze, isAnalyzing }: InputSectionProps) {
  const [isParsing, setIsParsing] = useState(false)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsParsing(true)
    try {
      const text = await parseFile(file)
      setJobData((prev) => ({ ...prev, originalText: text }))
    } catch (error) {
      console.error('File parsing error:', error)
      alert('Failed to parse file. Please ensure it is a valid PDF or DOCX file.')
    } finally {
      setIsParsing(false)
      // Reset the input value so the same file can be selected again if needed
      e.target.value = ''
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-6 h-full flex flex-col min-h-0">
      <h2 className="text-xl font-bold text-slate-800 mb-4 shrink-0">Original Notes</h2>

      <div className="flex-1 overflow-y-auto pr-2 min-h-0 space-y-4">
        {/* Upload / Content Area */}
        {jobData.originalText ? (
          <div className="relative w-full h-64 border border-slate-300 rounded-lg p-4 bg-slate-50 shrink-0">
            <div className="absolute top-2 right-2 z-10">
               <label className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-md cursor-pointer hover:bg-slate-50 transition-all">
                 <Upload className="h-4 w-4 text-slate-600" />
                 <span className="text-xs font-medium text-slate-600">Re-upload</span>
                 <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} className="hidden" disabled={isParsing} />
               </label>
            </div>
            <div className="h-full overflow-y-auto text-sm text-slate-700 whitespace-pre-wrap">
              {jobData.originalText}
            </div>
          </div>
        ) : (
          <label className={`w-full h-64 flex flex-col items-center justify-center gap-4 bg-slate-50 hover:bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer transition-all shrink-0 ${isParsing ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isParsing ? (
              <Loader2 className="h-8 w-8 text-slate-600 animate-spin" />
            ) : (
              <Upload className="h-8 w-8 text-slate-600" />
            )}
            <div className="text-center">
              <span className="text-base font-medium text-slate-700 block mb-1">{isParsing ? 'Parsing file...' : 'Upload PDF/DOCX'}</span>
              <span className="text-xs text-slate-500">Click to browse or drag file here</span>
            </div>
            <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} className="hidden" disabled={isParsing} />
          </label>
        )}

        {/* Configuration */}
        <div className="space-y-4 shrink-0">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tone</label>
            <select
              value={jobData.tone}
              onChange={(e) => setJobData((prev) => ({ ...prev, tone: e.target.value as JobData['tone'] }))}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="corporate">Corporate</option>
              <option value="startup">Startup/Casual</option>
              <option value="academic">Academic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Length</label>
            <select
              value={jobData.length}
              onChange={(e) => setJobData((prev) => ({ ...prev, length: e.target.value as JobData['length'] }))}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="concise">Concise</option>
              <option value="detailed">Detailed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Analyze Button */}
      <div className="shrink-0 mt-6 pt-4 border-t border-slate-100">
        <button
          onClick={onAnalyze}
          disabled={!jobData.originalText || isAnalyzing}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Analyze & Refine
            </>
          )}
        </button>
      </div>
    </div>
  )
}
