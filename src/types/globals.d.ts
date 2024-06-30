export {};

declare global {
    interface UserContextInterface {
        user: User | null;
        login: (userData: LoginDetails) => Promise<boolean>;
        logout: () => void;
        isLoggedIn: boolean;
        verifyUserSession: () => Promise<void>;
    }

    interface SettingsContextInterface {
        value: string;
    }

    type LoginDetails = {
        username: string;
        uni: string;
        password: string;
    };

    type User = {
        StudentId: string;
        Username: string;
        Email: string;
        University: string;
        UniStudentId: string;
        CompleteOnboard: string;
    };

    type Bio = {
        FirstName: string;
        LastName: string;
        ProfilePic: string;
        UniEmail: string;
    };
}
