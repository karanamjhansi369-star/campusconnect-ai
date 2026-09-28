/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickAccess } from './components/QuickAccess';
import { UpcomingEvents } from './components/UpcomingEvents';
import { StudentResources } from './components/StudentResources';
import { CampusInfo } from './components/CampusInfo';
import { CampusClubs } from './components/CampusClubs';
import { WhyCampusConnect } from './components/WhyCampusConnect';
import { FutureAiPlaceholder } from './components/FutureAiPlaceholder';
import { Footer } from './components/Footer';
import { EventDetailModal } from './components/EventDetailModal';
import { ResourceModal } from './components/ResourceModal';
import { ClubDetailModal } from './components/ClubDetailModal';
import { Toast } from './components/Toast';
import { CampusEvent, StudentResource, CampusClub } from './types';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<CampusEvent | null>(null);
  const [selectedResource, setSelectedResource] = useState<StudentResource | null>(null);
  const [selectedClub, setSelectedClub] = useState<CampusClub | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* 1. Navigation Bar (Sticky, Responsive, Hamburger on mobile) */}
      <Navbar onExploreCampus={() => scrollToSection('campus-info')} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreEvents={() => scrollToSection('events')}
          onExploreResources={() => scrollToSection('resources')}
        />

        {/* 3. Quick Access Section */}
        <QuickAccess onNavigate={(id) => scrollToSection(id)} />

        {/* 4. Upcoming Events Section */}
        <UpcomingEvents onSelectEvent={(evt) => setSelectedEvent(evt)} />

        {/* 5. Student Resources Section */}
        <StudentResources onSelectResource={(res) => setSelectedResource(res)} />

        {/* 6. Campus Information Section */}
        <CampusInfo onShowToast={(msg) => showToast(msg)} />

        {/* 7. Campus Clubs Section */}
        <CampusClubs onSelectClub={(club) => setSelectedClub(club)} />

        {/* 8. Why CampusConnect */}
        <WhyCampusConnect />

        {/* 9. Future AI Integration Placeholder (Zero chatbot, visual teaser only) */}
        <FutureAiPlaceholder onNotify={(msg) => showToast(msg)} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Modals & Feedback Drawers */}
      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRsvpSuccess={(name) => {
          showToast(`Seat reserved for "${name}"! Confirmation sent to student email.`);
        }}
      />

      <ResourceModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
        onLinkAccess={(linkTitle) => {
          showToast(`Accessing portal: "${linkTitle}"`);
        }}
      />

      <ClubDetailModal
        club={selectedClub}
        onClose={() => setSelectedClub(null)}
        onJoinSuccess={(name) => {
          showToast(`Application submitted to ${name} coordinators!`);
        }}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
