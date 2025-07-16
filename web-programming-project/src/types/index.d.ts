// This file contains TypeScript type definitions for the web programming project. 
// You can define interfaces, types, and enums here to provide type safety and IntelliSense throughout the project. 

// Example type definitions:

interface User {
    id: number;
    name: string;
    email: string;
}

type ResponseData<T> = {
    data: T;
    error?: string;
};

enum Status {
    SUCCESS = "success",
    ERROR = "error",
}