import { create } from 'zustand';

// Helper function to get the user from localStorage
const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('authUser');
  return storedUser ? JSON.parse(storedUser) : null;
}

// Helper function to save the user to localStorage
const saveUserToLocalStorage = (user) => {
  localStorage.setItem('authUser', JSON.stringify(user));
}

const useAuthStore = create((set) => ({
  // Initialize state with user from localStorage if available
  user: getUserFromLocalStorage(),
  login: (user) => {
    saveUserToLocalStorage(user); // Save to localStorage when user logs in
    set({ user });
  },
  logout: () => {
    localStorage.removeItem('authUser'); // Remove user from localStorage on logout
    set({ user: null });
  },
  setUser: (user) => {
    saveUserToLocalStorage(user); // Save user to localStorage when manually setting
    set({ user });
  },
}));

export default useAuthStore;
