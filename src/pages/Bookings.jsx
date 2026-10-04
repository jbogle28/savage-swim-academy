import React, { useState } from 'react';

export default function Bookings() {
  const [participantType, setParticipantType] = useState('child');
  const [lessonType, setLessonType] = useState('standard');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Child Form States
  const [childEmail, setChildEmail] = useState('');
  const [childName, setChildName] = useState('');
  const [childDob, setChildDob] = useState('');
  const [childShirtSize, setChildShirtSize] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [address, setAddress] = useState('');
  const [childIllness, setChildIllness] = useState('');
  const [childExperience, setChildExperience] = useState('');
  const [waiverChild, setWaiverChild] = useState(false);

  // Adult Form States
  const [adultEmail, setAdultEmail] = useState('');
  const [adultName, setAdultName] = useState('');
  const [adultDob, setAdultDob] = useState('');
  const [adultPhone, setAdultPhone] = useState('');
  const [adultAddress, setAdultAddress] = useState('');
  const [swimmingExperience, setSwimmingExperience] = useState('');
  const [fearOfWater, setFearOfWater] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [adultIllness, setAdultIllness] = useState('');
  const [waiverAdult, setWaiverAdult] = useState(false);

  // Parental Water Safety Program States
  const [safetyName, setSafetyName] = useState('');
  const [safetyEmail, setSafetyEmail] = useState('');
  const [safetyPhone, setSafetyPhone] = useState('');
  const [safetyAddress, setSafetyAddress] = useState('');
  const [numberOfChildren, setNumberOfChildren] = useState('');
  const [childrenAges, setChildrenAges] = useState('');
  const [waterExperience, setWaterExperience] = useState('');
  const [safetyConcerns, setSafetyConcerns] = useState('');
  const [waiverSafety, setWaiverSafety] = useState(false);

  // Price Calculation
  const calculatePrice = () => {
    if (participantType === 'safety') {
      return 'Price on Request (Parental Water Safety Program)';
    }

    if (participantType === 'child') {
      if (lessonType === 'standard') {
        return '4,000 JMD (Standard Lesson)';
      }

      if (lessonType === 'package') {
        return '18,000 JMD (5-Lesson Package)';
      }

      if (lessonType === 'private') {
        return '4,500 JMD (Private Session)';
      }
    }

    if (participantType === 'adult') {
      if (lessonType === 'standard') {
        return '4,500 JMD (Standard Lesson)';
      }

      if (lessonType === 'package') {
        return '24,000 JMD (5-Lesson Package)';
      }

      if (lessonType === 'private') {
        return '5,000 JMD (Private Session)';
      }
    }

    return 'Calculated on Request';
  };

  const handleParticipantChange = (type) => {
    setParticipantType(type);

    // Reset lesson type when switching to/from safety program
    if (type === 'safety') {
      setLessonType('safety');
    } else if (lessonType === 'safety') {
      setLessonType('standard');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let messageBody = `*New Appointment Request - Savage Swim Academy*%0A%0A`;

    const participantLabel =
      participantType === 'child'
        ? 'Child (Savage Splashers)'
        : participantType === 'adult'
          ? 'Adult (Savage Aquatic Warriors)'
          : 'Parent & Caregiver Water Safety Program';

    messageBody += `*Participant Type:* ${participantLabel}%0A`;

    if (participantType === 'safety') {
      messageBody += `*Booking Category:* PARENTAL WATER SAFETY PROGRAM%0A`;
      messageBody += `*Estimated Price:* ${calculatePrice()}%0A`;
    } else {
      messageBody += `*Booking Category:* ${lessonType.toUpperCase()}%0A`;
      messageBody += `*Estimated Price:* ${calculatePrice()}%0A`;
    }

    messageBody += `*Requested Date:* ${date}%0A`;
    messageBody += `*Requested Time:* ${time} (Operating Hours: 9:00 AM - 5:00 PM)%0A%0A`;

    // ==========================================
    // CHILD BOOKING
    // ==========================================
    if (participantType === 'child') {
      if (!waiverChild) {
        alert('Please accept the liability waiver to proceed.');
        return;
      }

      messageBody += `*Parent/Guardian:* ${parentName}%0A`;
      messageBody += `*Parent Contact:* ${parentContact}%0A`;
      messageBody += `*Email:* ${childEmail}%0A`;
      messageBody += `*Child Name:* ${childName}%0A`;
      messageBody += `*Child DOB:* ${childDob}%0A`;
      messageBody += `*Shirt Size:* ${childShirtSize}%0A`;
      messageBody += `*Address:* ${address}%0A`;
      messageBody += `*Illness History:* ${childIllness}%0A`;
      messageBody += `*Previous Swimming Experience:* ${childExperience}%0A`;
    }

    // ==========================================
    // ADULT BOOKING
    // ==========================================
    else if (participantType === 'adult') {
      if (!waiverAdult) {
        alert('Please accept the liability waiver to proceed.');
        return;
      }

      messageBody += `*Adult Name:* ${adultName}%0A`;
      messageBody += `*Phone:* ${adultPhone}%0A`;
      messageBody += `*Email:* ${adultEmail}%0A`;
      messageBody += `*DOB:* ${adultDob}%0A`;
      messageBody += `*Address:* ${adultAddress}%0A`;
      messageBody += `*Swimming Experience:* ${swimmingExperience}%0A`;
      messageBody += `*Fear of Water:* ${fearOfWater}%0A`;
      messageBody += `*Emergency Contact:* ${emergencyContact}%0A`;
      messageBody += `*Illness History:* ${adultIllness}%0A`;
    }

    // ==========================================
    // PARENTAL WATER SAFETY PROGRAM
    // ==========================================
    else if (participantType === 'safety') {
      if (!waiverSafety) {
        alert(
          'Please acknowledge the program participation terms to proceed.'
        );
        return;
      }

      messageBody += `*Parent/Caregiver Name:* ${safetyName}%0A`;
      messageBody += `*Email:* ${safetyEmail}%0A`;
      messageBody += `*Phone:* ${safetyPhone}%0A`;
      messageBody += `*Address:* ${safetyAddress}%0A`;
      messageBody += `*Number of Children:* ${numberOfChildren}%0A`;
      messageBody += `*Children's Ages:* ${childrenAges}%0A`;
      messageBody += `*Previous Water Safety Experience:* ${waterExperience}%0A`;
      messageBody += `*Water Safety Concerns / Questions:* ${safetyConcerns}%0A`;
    }

    const whatsappUrl = `https://wa.me/18764884917?text=${messageBody}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/swimming-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mt-12">

          <span className="inline-block text-sky-400 font-bold uppercase tracking-wider text-xs bg-sky-950/80 border border-sky-800/50 px-3.5 py-1.5 rounded-full shadow-lg mb-4">
            Secure Your Slot
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            Book Your Swimming Session
          </h1>

          <p className="text-slate-200 text-sm md:text-base max-w-xl mx-auto font-medium drop-shadow">
            Fill out the details below. Requests are sent instantly via
            WhatsApp to{' '}
            <span className="text-sky-300 font-bold">
              1876-488-4917
            </span>
            . Operating hours: 9:00 AM – 5:00 PM.
          </p>

        </div>
      </div>

      {/* =========================================================
          BOOKING FORM
      ========================================================= */}
      <div className="max-w-3xl mx-auto px-4 py-12">

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-200 space-y-6"
        >

          {/* =====================================================
              PARTICIPANT CATEGORY
          ===================================================== */}
          <div>

            <label className="block text-sm font-bold text-slate-900 mb-2">
              What would you like to book?
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

              <button
                type="button"
                onClick={() => handleParticipantChange('child')}
                className={`py-3 px-3 rounded-xl font-bold text-sm border transition ${
                  participantType === 'child'
                    ? 'bg-sky-500 text-white border-sky-500 shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Child Lessons
              </button>

              <button
                type="button"
                onClick={() => handleParticipantChange('adult')}
                className={`py-3 px-3 rounded-xl font-bold text-sm border transition ${
                  participantType === 'adult'
                    ? 'bg-sky-500 text-white border-sky-500 shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Adult Lessons
              </button>

              <button
                type="button"
                onClick={() => handleParticipantChange('safety')}
                className={`py-3 px-3 rounded-xl font-bold text-sm border transition ${
                  participantType === 'safety'
                    ? 'bg-sky-500 text-white border-sky-500 shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Parent Water Safety
              </button>

            </div>

          </div>


          {/* =====================================================
              LESSON / PROGRAM TYPE
          ===================================================== */}
          <div>

            <label className="block text-sm font-bold text-slate-900 mb-2">
              {participantType === 'safety'
                ? 'Program'
                : 'Select Lesson Package / Rate'}
            </label>

            {participantType === 'safety' ? (

              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">

                <p className="font-bold text-sky-700 text-sm">
                  Savage Swim Parental Water Safety Program
                </p>

                <p className="text-xs text-slate-600 mt-1">
                  Parent and caregiver education focused on water
                  awareness, supervision, risk identification, and
                  emergency preparedness.
                </p>

              </div>

            ) : (

              <select
                value={lessonType}
                onChange={(e) => setLessonType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-sky-500"
              >

                <option value="standard">
                  Standard Individual Lesson (
                  {participantType === 'child'
                    ? '4,000 JMD'
                    : '4,500 JMD'}
                  )
                </option>

                <option value="package">
                  5-Lesson Bundle Package (
                  {participantType === 'child'
                    ? '18,000 JMD'
                    : '24,000 JMD'}
                  )
                </option>

                <option value="private">
                  Private / Exclusive Venue Booking (
                  {participantType === 'child'
                    ? '4,500 JMD'
                    : '5,000 JMD'}{' '}
                  per session)
                </option>

              </select>

            )}

          </div>


          {/* =====================================================
              DATE / TIME
          ===================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>

              <label className="block text-sm font-bold text-slate-900 mb-1">
                Preferred Date *
              </label>

              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-sky-500"
              />

            </div>

            <div>

              <label className="block text-sm font-bold text-slate-900 mb-1">
                Preferred Time (9:00 AM - 5:00 PM) *
              </label>

              <input
                type="time"
                min="09:00"
                max="17:00"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-sky-500"
              />

            </div>

          </div>


          <hr className="border-slate-100 my-4" />


          {/* =====================================================
              CHILD FORM
          ===================================================== */}
          {participantType === 'child' && (

            <div className="space-y-4">

              <h3 className="text-lg font-extrabold text-sky-600">
                Child Participant Details
              </h3>

              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address *
                </label>

                <input
                  type="email"
                  required
                  value={childEmail}
                  onChange={(e) => setChildEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Name of Child *
                  </label>

                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Child's DOB and Age *
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 2015-05-12 (11 yrs)"
                    required
                    value={childDob}
                    onChange={(e) => setChildDob(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>

                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent Contact Information *
                  </label>

                  <input
                    type="text"
                    required
                    value={parentContact}
                    onChange={(e) => setParentContact(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Child's Shirt Size *
                  </label>

                  <input
                    type="text"
                    required
                    value={childShirtSize}
                    onChange={(e) => setChildShirtSize(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Address *
                  </label>

                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Does your child have any illness? If yes, please state *
                </label>

                <textarea
                  rows="2"
                  required
                  value={childIllness}
                  onChange={(e) => setChildIllness(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Has your child taken swimming lessons before? State stage *
                </label>

                <textarea
                  rows="2"
                  required
                  value={childExperience}
                  onChange={(e) => setChildExperience(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 space-y-2">

                <p className="font-bold">
                  Liability Waiver & Agreement:
                </p>

                <p>
                  This form is to be filled out by Parent/Guardian.
                  You agree to swim at your own risk by submitting this
                  form. You waive the right to file a lawsuit against
                  any instructors or staff members of Savage Swim Academy
                  876 Limited in the event that any damages or death
                  occur to participant/child.
                </p>

                <label className="flex items-center space-x-2 pt-2 cursor-pointer font-bold text-slate-900">

                  <input
                    type="checkbox"
                    checked={waiverChild}
                    onChange={(e) => setWaiverChild(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded"
                  />

                  <span>
                    I agree to the waiver terms and conditions *
                  </span>

                </label>

              </div>

            </div>
          )}


          {/* =====================================================
              ADULT FORM
          ===================================================== */}
          {participantType === 'adult' && (

            <div className="space-y-4">

              <h3 className="text-lg font-extrabold text-sky-600">
                Adult Participant Details
              </h3>

              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address *
                </label>

                <input
                  type="email"
                  required
                  value={adultEmail}
                  onChange={(e) => setAdultEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    value={adultName}
                    onChange={(e) => setAdultName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    required
                    value={adultPhone}
                    onChange={(e) => setAdultPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    D.O.B *
                  </label>

                  <input
                    type="date"
                    required
                    value={adultDob}
                    onChange={(e) => setAdultDob(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Address *
                  </label>

                  <input
                    type="text"
                    required
                    value={adultAddress}
                    onChange={(e) => setAdultAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Swimming Experience? If yes, please state *
                </label>

                <textarea
                  rows="2"
                  required
                  value={swimmingExperience}
                  onChange={(e) => setSwimmingExperience(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Do you have a fear of the water? If yes, state *
                  </label>

                  <input
                    type="text"
                    required
                    value={fearOfWater}
                    onChange={(e) => setFearOfWater(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Emergency Contact *
                  </label>

                  <input
                    type="text"
                    required
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Do you have any illness? If yes, please state *
                </label>

                <textarea
                  rows="2"
                  required
                  value={adultIllness}
                  onChange={(e) => setAdultIllness(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 space-y-2">

                <p className="font-bold">
                  Liability Waiver & Agreement:
                </p>

                <p>
                  This form is to be filled out by the adult participant.
                  You agree to swim at your own risk by submitting this
                  form. You waive the right to file a lawsuit against
                  any instructors or staff members of Savage Swim Academy
                  in the event that any damages or death occur.
                </p>

                <label className="flex items-center space-x-2 pt-2 cursor-pointer font-bold text-slate-900">

                  <input
                    type="checkbox"
                    checked={waiverAdult}
                    onChange={(e) => setWaiverAdult(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded"
                  />

                  <span>
                    I agree to the waiver terms and conditions *
                  </span>

                </label>

              </div>

            </div>
          )}


          {/* =====================================================
              PARENTAL WATER SAFETY PROGRAM FORM
          ===================================================== */}
          {participantType === 'safety' && (

            <div className="space-y-5">

              <div>

                <h3 className="text-lg font-extrabold text-sky-600">
                  Parent & Caregiver Water Safety Program
                </h3>

                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Tell us a little about yourself and what you would like
                  to learn. A member of Savage Swim Academy 876 will
                  confirm the program details and pricing with you.
                </p>

              </div>


              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Caregiver Name *
                  </label>

                  <input
                    type="text"
                    required
                    value={safetyName}
                    onChange={(e) => setSafetyName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    required
                    value={safetyEmail}
                    onChange={(e) => setSafetyEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    required
                    value={safetyPhone}
                    onChange={(e) => setSafetyPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Address *
                  </label>

                  <input
                    type="text"
                    required
                    value={safetyAddress}
                    onChange={(e) => setSafetyAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              {/* Children Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Number of Children *
                  </label>

                  <input
                    type="number"
                    min="0"
                    required
                    value={numberOfChildren}
                    onChange={(e) => setNumberOfChildren(e.target.value)}
                    placeholder="e.g. 2"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Children's Ages *
                  </label>

                  <input
                    type="text"
                    required
                    value={childrenAges}
                    onChange={(e) => setChildrenAges(e.target.value)}
                    placeholder="e.g. 4, 7 and 10 years old"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                  />

                </div>

              </div>


              {/* Experience */}
              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Previous Water Safety Experience *
                </label>

                <textarea
                  rows="3"
                  required
                  value={waterExperience}
                  onChange={(e) => setWaterExperience(e.target.value)}
                  placeholder="Tell us about any previous water safety training, CPR training, swimming experience, or related experience."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              {/* Questions / Concerns */}
              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Water Safety Concerns or Questions *
                </label>

                <textarea
                  rows="3"
                  required
                  value={safetyConcerns}
                  onChange={(e) => setSafetyConcerns(e.target.value)}
                  placeholder="Tell us what you would like to learn or any specific concerns you have about keeping children safe around water."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm"
                />

              </div>


              {/* Program Information */}
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-4">

                <p className="font-bold text-sky-700 text-sm mb-2">
                  What the program covers
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600">

                  <li>
                    • Active supervision and responsible water awareness
                  </li>

                  <li>
                    • Identifying common water-related risks and hazards
                  </li>

                  <li>
                    • Basic water safety practices around pools and
                    aquatic environments
                  </li>

                  <li>
                    • Appropriate responses to water-related emergencies
                  </li>

                  <li>
                    • Building confidence and awareness around water
                  </li>

                </ul>

              </div>


              {/* Program Acknowledgment */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 space-y-2">

                <p className="font-bold">
                  Program Participation Acknowledgment:
                </p>

                <p>
                  I understand that the Savage Swim Parental Water Safety
                  Program provides educational information and practical
                  guidance for parents and caregivers. Participation in
                  the program does not replace professional lifeguard,
                  medical, CPR, or emergency-response services.
                </p>

                <label className="flex items-start gap-2 pt-2 cursor-pointer font-bold text-slate-900">

                  <input
                    type="checkbox"
                    checked={waiverSafety}
                    onChange={(e) => setWaiverSafety(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-sky-600 rounded"
                  />

                  <span>
                    I understand and agree to the program participation
                    terms *
                  </span>

                </label>

              </div>

            </div>
          )}


          {/* =====================================================
              PRICING PREVIEW
          ===================================================== */}
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div>

              <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">
                Estimated Total
              </span>

              <span className="text-lg font-extrabold text-sky-600">
                {calculatePrice()}
              </span>

            </div>

            <span className="text-xs text-slate-600 font-medium">
              Included in WhatsApp request
            </span>

          </div>


          {/* =====================================================
              SUBMIT
          ===================================================== */}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl shadow-lg transition text-center text-base"
          >
            {participantType === 'safety'
              ? 'Submit Water Safety Program Inquiry via WhatsApp'
              : 'Submit via WhatsApp & Book Appointment'}
          </button>

        </form>

      </div>

    </div>
  );
}