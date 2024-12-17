import React from 'react';
import { Heart, MessageCircle, Share2, Image as ImageIcon } from 'lucide-react';
import { COMMUNITY_POSTS } from '../data';
import { timeAgo } from '../utils/dateUtils';
import type { Post } from '../data/types';

export function CommunityFeed() {
  const [newPost, setNewPost] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission
    setNewPost('');
  };

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your journey..."
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
            rows={3}
          />
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              className="flex items-center text-gray-600 hover:text-purple-600 transition"
            >
              <ImageIcon className="h-5 w-5 mr-2" />
              Add Photo
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {/* Posts Feed */}
      {COMMUNITY_POSTS.map((post: Post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div>
              <div className="font-medium text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-500">{timeAgo(post.timestamp)}</div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{post.content}</p>
          
          {post.image && (
            <img
              src={post.image}
              alt="Post content"
              className="rounded-lg mb-4 w-full"
            />
          )}
          
          <div className="flex items-center space-x-6 text-gray-500">
            <button className="flex items-center hover:text-purple-600 transition group">
              <Heart className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center hover:text-purple-600 transition group">
              <MessageCircle className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center hover:text-purple-600 transition group">
              <Share2 className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}