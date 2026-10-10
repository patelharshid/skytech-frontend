import React from 'react';
import { useMarqueeAnnouncements } from '../hooks/useData';
import { primaryNumber } from '../constants/constants';

const TopMarqueeBar = () => {
  const { data: announcements } = useMarqueeAnnouncements();

  const list = announcements && announcements.length > 0 ? announcements : [
    "⚡ Special Offer: Get Free Antivirus & Carry Bag with every Refurbished Laptop Purchase!",
    "💻 Systems on Rent: High-Speed Laptops & Desktops for Corporates & Students starting @ $19/mo",
    "🚚 Free Express Doorstep Shipping & Insured Pickup Across Nation",
    "🛡️ 100% Tested Quality: 50-Point Hardware Inspection + 1-Year Warranty",
    `📞 Hotline Support: +91 ${primaryNumber} | Bulk Inquiries Welcome`
  ];

  return (
    <div className="skytech-marquee-bar border-bottom">
      <div className="container-fluid overflow-hidden">
        <div className="marquee-track d-flex gap-5 align-items-center">
          {list.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
          {list.map((item, index) => (
            <span key={`dup-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMarqueeBar;
