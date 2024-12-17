import React from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';
import type { Podcast } from '../../types/podcast';

interface PodcastPlayerProps {
  podcast: Podcast;
  isPlaying: boolean;
  onPlayPause: () => void;
  onClose: () => void;
}

export function PodcastPlayer({ podcast, isPlaying, onPlayPause, onClose }: PodcastPlayerProps) {
  const [progress, setProgress] = React.useState(0);
  const [volume, setVolume] = React.useState(80);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg transform transition-transform">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={podcast.image}
            alt={podcast.title}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div>
            <h4 className="font-medium text-gray-900 line-clamp-1">{podcast.title}</h4>
            <p className="text-sm text-gray-600">{podcast.host}</p>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center justify-center space-x-6">
            <button className="text-gray-400 hover:text-purple-600 transition">
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              onClick={onPlayPause}
              className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>
            <button className="text-gray-400 hover:text-purple-600 transition">
              <SkipForward className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2">
            <input
              type="range"
              value={progress}
              onChange={(e) => setProgress(parseInt(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Volume2 className="h-5 w-5 text-gray-400" />
          <input
            type="range"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="100"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}