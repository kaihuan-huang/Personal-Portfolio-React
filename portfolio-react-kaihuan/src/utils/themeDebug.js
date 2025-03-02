
// Theme debugging utility
export const debugThemeState = () => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const localStorageTheme = localStorage.getItem('theme');
  
  console.log('==== Theme Debug Info ====');
  console.log('Dark mode class on HTML:', isDarkMode);
  console.log('LocalStorage theme setting:', localStorageTheme);
  console.log('========================');
  
  return { isDarkMode, localStorageTheme };
};
