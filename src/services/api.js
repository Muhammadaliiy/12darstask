const API_BASE_URL = 'https://json-api.uz/api/project/dessertss';

export const apiService = {
  async getDesserts() {
    try {
      const response = await fetch(`${API_BASE_URL}/desserts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data; // Extract the desserts array from the response
    } catch (error) {
      console.error('Error fetching desserts:', error);
      throw error;
    }
  }
};