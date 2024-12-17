```tsx
import React from 'react';
import { MoreVertical, FileText, Video, Mic, Clock, Eye } from 'lucide-react';
import type { Content } from '../../types/content';

interface ContentListProps {
  searchQuery: string;
  filters: {
    type: string;
    status: string;
  };
}

const DEMO_CONTENT: Content[] = [
  {
    id: '1',
    title: 'Movement as Medicine: Traditional Healing Practices',
    type: 'podcast',
    author: 'Dr. Maya Bennett',
    publishDate: '2024-02-15',
    status: 'published',
    views: 1250,
    duration: '40 min',
    image: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    title: 'Connecting with Culture Through Dance',
    type: 'article',
    author: 'Kirra Thompson',
    publishDate: '2024-02-10',
    status: 'draft',
    views: 0,
    duration: '5 min read',
    image: 'https://images.unsplash.com/photo-1545224144-b38cd309ef69?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

export function ContentList({ searchQuery, filters }: ContentListProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return FileText;
      case 'video':
        return Video;
      case 'podcast':
        return Mic;
      default:
        return FileText;
    }
  };

  const filteredContent = DEMO_CONTENT.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filters.type === 'all' || content.type === filters.type;
    const matchesStatus = filters.status === 'all' || content.status === filters.status;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="divide-y divide-gray-200">
        {filteredContent.map((content) => {
          const TypeIcon = getTypeIcon(content.type);
          
          return (
            <div key={content.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={content.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      {content.title}
                    </h3>
                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <TypeIcon className="h-4 w-4 mr-1" />
                        <span className="capitalize">{content.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {content.duration}
                      </div>
                      {content.status === 'published' && (
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {content.views} views
                        </div>
                      )}
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        By {content.author}
                      </span>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        content.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {content.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```