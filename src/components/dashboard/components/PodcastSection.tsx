import React from 'react';
import { Play, Pause, Clock, Download, Bookmark, Share2 } from 'lucide-react';
import { formatDuration } from '../utils/formatDuration';
import { PodcastCategories } from './podcast/PodcastCategories';
import { PodcastPlayer } from './podcast/PodcastPlayer';
import { FEATURED_PODCASTS } from '../constants/podcastData';
import type { Podcast } from '../types/podcast';

export function PodcastSection() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [playingPodcast, setPlayingPodcast] = React.useState<Podcast | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [savedPodcasts, setSavedPodcasts] = React.useState<string[]>([]);

  const filteredPodcasts = selectedCategory === 'All'
    ? FEATURED_PODCASTS
    : FEATURED_PODCASTS.filter(podcast => podcast.category === selectedCategory);

  const togglePlay = (podcast: Podcast) => {
    if (playingPodcast?.id === podcast.id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingPodcast(podcast);
      setIsPlaying(true);
    }
  };

  const toggleSave = (id: string) => {
    setSavedPodcasts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Member Exclusive Podcasts</h2>
        <button className="text-purple-600 hover:text-purple-700 font-medium">
          View All
        </button>
      </div>

      <PodcastCategories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPodcasts.map((podcast) => (
          <div 
            key={podcast.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden group"
          >
            <div className="relative h-48">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => togglePlay(podcast)}
                className="absolute bottom-4 left-4 p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
              >
                {playingPodcast?.id === podcast.id && isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </button>
              <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 rounded-full text-sm text-white">
                {podcast.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {podcast.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Hosted by {podcast.host}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {podcast.episodes} episodes
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {podcast.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {formatDuration(podcast.duration)}
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => toggleSave(podcast.id)}
                    className={`p-2 rounded-full transition-colors ${
                      savedPodcasts.includes(podcast.id)
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-400 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 rounded-full hover:text-purple-600 hover:bg-purple-50 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 rounded-full hover:text-purple-600 hover:bg-purple-50 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {playingPodcast && (
        <PodcastPlayer
          podcast={playingPodcast}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          onClose={() => {
            setPlayingPodcast(null);
            setIsPlaying(false);
          }}
        />
      )}
    </div>
  );
}