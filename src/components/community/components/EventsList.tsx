import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data';
import { formatEventDate } from '../utils/dateUtils';
import type { Event } from '../data';

export function EventsList() {
  return (
    <div className="h-full bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Events</h2>
      <div className="space-y-4">
        {UPCOMING_EVENTS.map((event: Event) => (
          <div key={event.id} className="group cursor-pointer">
            <div className="flex items-center space-x-4 p-3 rounded-lg transition-colors duration-300 hover:bg-purple-50">
              <div className="bg-purple-100 rounded-lg p-3 text-center min-w-[4rem] group-hover:bg-purple-200 transition-colors duration-300">
                <div className="text-sm font-medium text-purple-600">
                  {formatEventDate(event.date, 'MMM')}
                </div>
                <div className="text-xl font-bold text-purple-600">
                  {formatEventDate(event.date, 'd')}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="text-sm text-gray-600 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>
              </div>
              <button className="px-4 py-1 border border-purple-600 text-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-600 hover:text-white">
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}