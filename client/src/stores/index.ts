// Import the necessary dependencies
import { createPinia } from 'pinia';

// Export the user store for easy access
export { useUserStore } from './user/user.store';

// Create a new instance of Pinia
const pinia = createPinia();

// Export the Pinia instance as the default export
export default pinia;
