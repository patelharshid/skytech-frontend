import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const TopMarqueeBar = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchMarqueeData = async () => {
      setAnnouncements(await apiService.getMarqueeAnnouncements());
    };
    fetchMarqueeData();
  }, []);

  if (announcements.length === 0) {
    return null;
  }

  return (
    <div className="skytech-marquee-bar border-bottom">
      <div className="container-fluid overflow-hidden">
        <div className="marquee-track d-flex gap-5 align-items-center">
          {announcements.map((item, index) => (
            <span key={index}>{item?.title || item}</span>
          ))}
          {announcements.map((item, index) => (
            <span key={`dup-${index}`}>{item?.title || item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMarqueeBar;
