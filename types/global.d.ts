// types/global.d.ts
declare global {
  interface User {
    _id: string;
    name: string;
    email: string;
    role: string; // e.g., 'admin' or 'user'
  }
}

export {};
