export function getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];

        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(
                cookie.substring(nameEQ.length, cookie.length)
            );
        }
    }
    return null;
}
