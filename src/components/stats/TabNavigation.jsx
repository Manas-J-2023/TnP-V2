import { useState, useEffect, useRef } from 'react';
import './styles/TabNavigation.css';

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  // Initialize the array of refs
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs.length]);

  // Update the indicator position when the active tab changes
  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    if (activeIndex >= 0 && tabRefs.current[activeIndex]) {
      const tabElement = tabRefs.current[activeIndex];
      setIndicatorStyle({
        width: `${tabElement.offsetWidth}px`,
        left: `${tabElement.offsetLeft}px`,
        transition: 'all 0.3s ease'
      });
    }
  }, [activeTab, tabs]);

  // Handle window resize to adjust indicator position
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = tabs.indexOf(activeTab);
      if (activeIndex >= 0 && tabRefs.current[activeIndex]) {
        const tabElement = tabRefs.current[activeIndex];
        setIndicatorStyle({
          width: `${tabElement.offsetWidth}px`,
          left: `${tabElement.offsetLeft}px`,
          transition: 'none' // Disable transition on resize
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab, tabs]);

  return (
    <div className="tab-navigation">
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={el => tabRefs.current[index] = el}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
            aria-selected={activeTab === tab}
            role="tab"
          >
            {tab}
          </button>
        ))}
        <div className="tab-indicator" style={indicatorStyle} />
      </div>
    </div>
  );
};

export default TabNavigation;