export {};

declare global {
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
