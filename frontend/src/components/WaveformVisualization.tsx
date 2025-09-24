interface WaveformProps {
  label: string;
  type: 'music' | 'vocal' | 'acapt';
  isActive?: boolean;
}

function Waveform({ label, type, isActive = true }: WaveformProps) {
  const getWaveformColor = () => {
    switch (type) {
      case 'music':
        return 'bg-gradient-waveform-green';
      case 'vocal':
        return 'bg-gradient-waveform-purple';
      case 'acapt':
        return 'bg-audio-inactive';
      default:
        return 'bg-muted';
    }
  };

  const getOpacity = () => isActive ? 'opacity-100' : 'opacity-30';

  // Generate random waveform heights for visual effect
  const generateWaveform = () => {
    const bars = [];
    for (let i = 0; i < 120; i++) {
      const height = Math.random() * 60 + 20; // Height between 20-80px
      bars.push(
        <div
          key={i}
          className={`w-1 ${getWaveformColor()} ${getOpacity()}`}
          style={{ height: `${height}px` }}
        />
      );
    }
    return bars;
  };

  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-16 text-right">
        <span className={`text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
          {label}
        </span>
      </div>
      
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded border-2 ${
          isActive ? 'border-foreground bg-background' : 'border-muted-foreground bg-muted'
        } flex items-center justify-center mr-4`}>
          <div className={`w-3 h-3 rounded-full ${
            isActive ? 'bg-foreground' : 'bg-muted-foreground'
          }`} />
        </div>
        
        <div className="flex items-center space-x-px h-20 bg-card rounded-lg px-4 min-w-[600px]">
          {generateWaveform()}
        </div>
      </div>
    </div>
  );
}

export function WaveformVisualization() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Waveform label="Music" type="music" isActive={true} />
      <Waveform label="Vocal" type="vocal" isActive={true} />
      <Waveform label="Acapt" type="acapt" isActive={false} />
    </div>
  );
}