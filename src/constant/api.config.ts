export const API_URL = `${import.meta.env.VITE_REACT_APP_URL}/api`;

//auth urls
export const getAuthUrl = (pathname: string) => `/auth${pathname}`;

// role urls
export const getRoleUrl = (pathname?: string) =>
  `/role${pathname ? `${pathname}` : ""}`;

// users urls
export const getUserUrl = (pathname?: string) =>
  `/user${pathname ? `${pathname}` : ""}`;
