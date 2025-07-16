interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

interface AuthResponse {
    success: boolean;
    message: string;
    user?: User;
}

interface SignupData {
    username: string;
    email: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}