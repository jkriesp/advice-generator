// adviceService.js

// Function to fetch a new piece of advice from the Advice Slip API
export const fetchAdvice = async () => {
  try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.slip; // Assuming the API returns an object with a 'slip' property containing the advice
  } catch (error) {
      console.error('Error fetching advice:', error);
      throw error; // Re-throwing the error to be handled by the calling component
  }
};
