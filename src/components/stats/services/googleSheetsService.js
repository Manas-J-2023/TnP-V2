import axios from 'axios';

// Mock spreadsheet IDs and API Key
// In a real implementation, you would use environment variables
const API_KEY = 'AIzaSyCt-DuKFRtVL2SMXH0htipCdFp5pQDTCvA';

// These are dummy endpoints that would be replaced with real Google Sheets API endpoints
const SHEET_URLS = {
  '1e_BJHaJN0WCHXZF5ziSLH4rljA8F96KQmFMndq0k8OM': 'https://opensheet.elk.sh/1e_BJHaJN0WCHXZF5ziSLH4rljA8F96KQmFMndq0k8OM/1',
  '1c87RQY5DlJd7uZj4gkHqEYjHKgKn8sVnWM248xc1R4w': 'https://opensheet.elk.sh/1c87RQY5DlJd7uZj4gkHqEYjHKgKn8sVnWM248xc1R4w/1',
  '1Yax8SunfCWYUEXtYJOhNZjxG8I36O0IHWdA5MeMrXZQ': 'https://opensheet.elk.sh/1Yax8SunfCWYUEXtYJOhNZjxG8I36O0IHWdA5MeMrXZQ/1',
  '1k78CxYlo-gcY2WxlURWMOFMpSpphATHuv2gZSS_m7eE': 'https://opensheet.elk.sh/1k78CxYlo-gcY2WxlURWMOFMpSpphATHuv2gZSS_m7eE/1'
};

/**
 * Fetches data from a Google Spreadsheet
 * @param {string} spreadsheetId - The ID of the spreadsheet to fetch
 * @returns {Promise<Object>} The processed chart data
 */
export const fetchSpreadsheetData = async (spreadsheetId) => {
  try {
    // In a real implementation, use the commented code to fetch from Google Sheets API
    let response = await axios.get(
      `https://opensheet.elk.sh/${spreadsheetId}/1`
    );

    response = response.data;

    const Label = response.map(branch => branch.BRANCH);

    const totalCandidate = response.map(item => item.TOTAL);


    switch (spreadsheetId) {
    case '1e_BJHaJN0WCHXZF5ziSLH4rljA8F96KQmFMndq0k8OM'://btech
      return {
        labels: Label,
        datasets: [
          {
            label: 'Total Candidate',
            data: totalCandidate,
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
          }
        ]
      };
    
    case '1c87RQY5DlJd7uZj4gkHqEYjHKgKn8sVnWM248xc1R4w'://mtech
      return {
        labels: Label,
        datasets: [
          {
            label: 'Total Candidate',
            data: totalCandidate,
            backgroundColor: 'rgba(255, 149, 0, 0.7)',
            borderColor: 'rgba(255, 149, 0, 1)',
            borderWidth: 1
          }
        ]
      };
    
    case '1Yax8SunfCWYUEXtYJOhNZjxG8I36O0IHWdA5MeMrXZQ'://bba
      return {
        labels: Label,
        datasets: [
          {
            label: 'Total Candidate',
            data: totalCandidate,
            backgroundColor: 'rgba(255, 69, 58, 0.7)',
            borderColor: 'rgba(255, 69, 58, 1)',
            borderWidth: 1
          }
        ]
      };
    
    case '1k78CxYlo-gcY2WxlURWMOFMpSpphATHuv2gZSS_m7eE'://mba
      return {
        labels: Label,
        datasets: [
          {
            label: 'Total Candidate',
            data: totalCandidate,
            backgroundColor: 'rgba(172, 142, 255, 0.7)',
            borderColor: 'rgba(172, 142, 255, 1)',
            borderWidth: 1
          }
        ]
      };
    
    default:
      throw new Error('Invalid spreadsheet ID');
  }
    
  } catch (error) {
    console.error('Error fetching spreadsheet data:', error);
    throw error;
  }
};

/**
 * Mock function to simulate fetching data from Google Sheets
 * In a real implementation, this would be replaced with actual API calls
 */
const mockFetchSpreadsheetData = async (spreadsheetId) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return different mock data based on the spreadsheet ID
  switch (spreadsheetId) {
    case '1e_BJHaJN0WCHXZF5ziSLH4rljA8F96KQmFMndq0k8OM'://btech
      return {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
        datasets: [
          {
            label: 'Average GPA',
            data: [3.4, 3.2, 3.5, 3.7],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
          },
          {
            label: 'Placement Rate (%)',
            data: [65, 72, 80, 91],
            backgroundColor: 'rgba(94, 92, 230, 0.7)',
            borderColor: 'rgba(94, 92, 230, 1)',
            borderWidth: 1
          }
        ]
      };
    
    case '1c87RQY5DlJd7uZj4gkHqEYjHKgKn8sVnWM248xc1R4w'://mtech
      return {
        labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
        datasets: [
          {
            label: 'Research Publications',
            data: [1.2, 2.5, 3.1, 4.2],
            backgroundColor: 'rgba(255, 149, 0, 0.7)',
            borderColor: 'rgba(255, 149, 0, 1)',
            borderWidth: 1
          },
          {
            label: 'Industry Projects',
            data: [0.5, 1.2, 2.1, 3.5],
            backgroundColor: 'rgba(52, 199, 89, 0.7)',
            borderColor: 'rgba(52, 199, 89, 1)',
            borderWidth: 1
          }
        ]
      };
    
    case '1Yax8SunfCWYUEXtYJOhNZjxG8I36O0IHWdA5MeMrXZQ'://bba
      return {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        datasets: [
          {
            label: 'Business Case Competitions',
            data: [2.1, 4.5, 6.2],
            backgroundColor: 'rgba(255, 69, 58, 0.7)',
            borderColor: 'rgba(255, 69, 58, 1)',
            borderWidth: 1
          },
          {
            label: 'Internship Placements',
            data: [45, 68, 91],
            backgroundColor: 'rgba(90, 200, 250, 0.7)',
            borderColor: 'rgba(90, 200, 250, 1)',
            borderWidth: 1
          }
        ]
      };
    
    case '1k78CxYlo-gcY2WxlURWMOFMpSpphATHuv2gZSS_m7eE'://mba
      return {
        labels: ['Trimester 1', 'Trimester 2', 'Trimester 3', 'Trimester 4', 'Trimester 5', 'Trimester 6'],
        datasets: [
          {
            label: 'Average Salary (Lakhs)',
            data: [8.5, 10.2, 12.4, 14.8, 18.2, 22.5],
            backgroundColor: 'rgba(172, 142, 255, 0.7)',
            borderColor: 'rgba(172, 142, 255, 1)',
            borderWidth: 1
          },
          {
            label: 'Leadership Roles (%)',
            data: [10, 15, 22, 28, 35, 42],
            backgroundColor: 'rgba(255, 204, 0, 0.7)',
            borderColor: 'rgba(255, 204, 0, 1)',
            borderWidth: 1
          }
        ]
      };
    
    default:
      throw new Error('Invalid spreadsheet ID');
  }
};

// In a real application, you would implement these functions to process the actual API response
export const processSpreadsheetData = (rawData) => {
  // Process the raw data from the API into the format expected by Chart.js
  // This would need to be customized based on your specific spreadsheet structure
  const labels = rawData.values[0].slice(1); // Assuming first row contains headers
  const datasets = [];
  
  // Process each row (excluding header) into a dataset
  for (let i = 1; i < rawData.values.length; i++) {
    const row = rawData.values[i];
    datasets.push({
      label: row[0], // Assuming first column is the dataset label
      data: row.slice(1).map(Number), // Convert remaining cells to numbers
      backgroundColor: getRandomColor(0.7),
      borderColor: getRandomColor(1),
      borderWidth: 1
    });
  }
  
  return { labels, datasets };
};

// Utility function to generate random colors
const getRandomColor = (opacity = 1) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};