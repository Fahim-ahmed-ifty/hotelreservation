// types/global.d.ts

declare global {
  // You can define the User type globally
  interface User {
    _id: string;
    name: string;
    email: string;
    // Add more fields here as needed
  }

  // If you want to add custom types to the global scope, you can declare them here.
  // For example, you could add custom environment variables or other global types.
}

export {};
