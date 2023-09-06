// Import the necessary dependencies
import { defineStore } from 'pinia';

// Define and export the user store
export const useUserStore = defineStore({
  id: 'user', // Unique identifier for the store
  state: () => ({
    user: null, // Initial state for the user
  }),
  getters: {}, // Define getters for computed properties
  actions: {}, // Define actions for performing async operations
});
