import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrollY > 300
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        © 2025 Dhruv &mdash; Crafted with React.js
      </footer>

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </>
  );
}
