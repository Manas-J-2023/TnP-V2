import { useState, useEffect } from 'react';
import TabNavigation from './TabNavigation';
import BarChart from './BarChart';
import { fetchSpreadsheetData } from './services/googleSheetsService';
import './styles/CourseDataVisualizer.css';

const TABS = ['BTech', 'MTech', 'BBA', 'MBA'];
const YEAR_TABS = ['2024', '2023', '2022'];
const SPREADSHEET_IDS = {
  BTech: {
    2024: '1e_BJHaJN0WCHXZF5ziSLH4rljA8F96KQmFMndq0k8OM',
    2023: 'YOUR_BTECH_2024_SHEET_ID',
    2022: 'YOUR_BTECH_2023_SHEET_ID',
  },
  MTech: {
    2024: '1c87RQY5DlJd7uZj4gkHqEYjHKgKn8sVnWM248xc1R4w',
    2023: 'YOUR_MTECH_2024_SHEET_ID',
    2022: 'YOUR_MTECH_2023_SHEET_ID',
  },
  BBA: {
    2024: '1Yax8SunfCWYUEXtYJOhNZjxG8I36O0IHWdA5MeMrXZQ',
    2023: 'YOUR_BBA_2024_SHEET_ID',
    2022: 'YOUR_BBA_2023_SHEET_ID',
  },
  MBA: {
    2024: '1k78CxYlo-gcY2WxlURWMOFMpSpphATHuv2gZSS_m7eE',
    2023: 'YOUR_MBA_2024_SHEET_ID',
    2022: 'YOUR_MBA_2023_SHEET_ID',
  }
};

const CourseDataVisualizer = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [activeYear, setActiveYear] = useState(YEAR_TABS[0]);
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch data for the active tab and year combination
        const data = await fetchSpreadsheetData(SPREADSHEET_IDS[activeTab][activeYear]);
        setChartData(data);
      } catch (err) {
        console.error('Error fetching spreadsheet data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [activeTab, activeYear]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleYearChange = (year) => {
    setActiveYear(year);
  };

  return (
    <div className="course-data-visualizer">
      <h2 className="visualizer-title">Course Performance Data</h2>
      
      {/* Year Supertabs */}
      <div className="supertab-container">
        <div className="supertab-navigation">
          {YEAR_TABS.map((year) => (
            <button
              key={year}
              className={`supertab ${activeYear === year ? 'active' : ''}`}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      
      {/* Course Tabs */}
      <TabNavigation 
        tabs={TABS} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
      
      <div className="chart-container">
        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading {activeTab} data for {activeYear}...</p>
          </div>
        )}
        
        {error && (
          <div className="error-container">
            <p className="error-message">{error}</p>
            <button 
              className="retry-button" 
              onClick={() => handleTabChange(activeTab)}
            >
              Retry
            </button>
          </div>
        )}
        
        {!isLoading && !error && chartData && (
          <div className="chart-wrapper">
            <BarChart data={chartData} title={`${activeTab} Performance Metrics - ${activeYear}`} />
          </div>
        )}
      </div>
      
      <style jsx>{`
        .supertab-container {
          margin-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .supertab-navigation {
          display: flex;
          gap: 0;
          background-color: #f8f9fa;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
        }
        
        .supertab {
          flex: 1;
          padding: 12px 20px;
          background-color: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          font-size: 16px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .supertab:hover {
          background-color: #e9ecef;
          color: #333;
        }
        
        .supertab.active {
          background-color: #fff;
          color: #007bff;
          border-bottom-color: #007bff;
          font-weight: 600;
        }
        
        .supertab.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background-color: #007bff;
        }
        
        @media (max-width: 768px) {
          .supertab {
            padding: 10px 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseDataVisualizer;