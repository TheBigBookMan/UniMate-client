export {};

declare global {
    interface UserContextInterface {
        user: User | null;
        login: (userData: LoginDetails) => Promise<boolean>;
        logout: () => void;
        isLoggedIn: boolean;
        signUpUser: (userData: LoginDetails) => void;
    }

    type LoginDetails = {
        username: string;
        uni: string;
        password: string;
    };

    type User = {
        Username: string;
        Email: string;
        University: string;
        UserID: string;
    };
}
