import React from 'react';
import { format } from 'date-fns';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from '../layout/Container';
import { PageHeader } from '../layout/PageHeader';
import { BackButton } from '../common/BackButton';
import { DateSelector } from './components/DateSelector';
import { ClassTimeSlot } from './components/ClassTimeSlot';
import { BookingSummary } from './components/BookingSummary';
import { NEXT_7_DAYS, CLASS_SESSIONS } from './constants';
import { CLASSES_DATA } from '../classes/data';
import type { BookingState } from './types';

export function ClassBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedClassId = location.state?.classId;
  const selectedClass = CLASSES_DATA.find(c => c.id === selectedClassId);

  const [bookingState, setBookingState] = React.useState<BookingState>({
    selectedDate: new Date(),
    selectedSlot: null
  });

  const handleDateSelect = (date: Date) => {
    setBookingState(prev => ({ ...prev, selectedDate: date, selectedSlot: null }));
  };

  const handleSlotSelect = (slotId: string) => {
    const slot = CLASS_SESSIONS.find(s => s.id === slotId);
    setBookingState(prev => ({ ...prev, selectedSlot: slot || null }));
  };

  const handleBookingConfirm = () => {
    // Here you would handle the booking submission
    console.log('Booking confirmed:', {
      class: selectedClass,
      ...bookingState
    });
    
    // Navigate to dashboard after successful booking
    navigate('/dashboard', { 
      state: { 
        bookingSuccess: true,
        className: selectedClass?.name,
        date: bookingState.selectedDate,
        time: bookingState.selectedSlot?.time
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <BackButton to="/classes" label="Back to Classes" />
        
        <PageHeader 
          title="Book Your Class"
          subtitle={selectedClass ? `Booking ${selectedClass.name}` : 'Select your preferred time slot'}
        />

        <div className="grid md:grid-cols-12 gap-8">
          {/* Date Selection */}
          <div className="md:col-span-4">
            <DateSelector
              dates={NEXT_7_DAYS}
              selectedDate={bookingState.selectedDate}
              onSelectDate={handleDateSelect}
            />
          </div>

          {/* Time Slots & Summary */}
          <div className="md:col-span-8">
            <div className="space-y-8">
              {/* Available Time Slots */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Available Times for {format(bookingState.selectedDate, 'MMMM d')}
                </h2>
                <div className="space-y-4">
                  {CLASS_SESSIONS.map((slot) => (
                    <ClassTimeSlot
                      key={slot.id}
                      slot={slot}
                      isSelected={bookingState.selectedSlot?.id === slot.id}
                      onSelect={handleSlotSelect}
                    />
                  ))}
                </div>
              </div>

              {/* Booking Summary */}
              <BookingSummary
                selectedClass={selectedClass}
                selectedSlot={bookingState.selectedSlot}
                selectedDate={bookingState.selectedDate}
                onConfirm={handleBookingConfirm}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}