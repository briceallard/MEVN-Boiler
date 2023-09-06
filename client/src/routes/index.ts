import { createWebHistory, createRouter } from 'vue-router';

// Create a router instance
const router = createRouter({
  history: createWebHistory(), // Use browser history mode for routing
  routes: [
    {
      path: '/', // Define the path for the home route
      name: 'home', // Assign a name to the route
      component: () => import('@/views/Home.vue'), // Load the Home component lazily
      meta: {
        transition: 'fade', // Add a meta field for transition information
      },
    },
  ],
});

export default router; // Export the router instance
