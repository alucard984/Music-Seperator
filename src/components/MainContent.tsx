import { Button } from '@/components/ui/button';
import { WaveformVisualization } from './WaveformVisualization';

export function MainContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-background">
      <div className="text-center max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase mb-6">
            HOW IT WORKS
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Vocal Remover and Isolation
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Separate voice from music out of a song free with powerful AI algorithms
          </p>
        </div>

        {/* Waveform Visualization */}
        <div className="mb-12">
          <WaveformVisualization />
        </div>

        {/* Upload Button */}
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
        >
          Browse my files
        </Button>
      </div>
    </div>
  );
}