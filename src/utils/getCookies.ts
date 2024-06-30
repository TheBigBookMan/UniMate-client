export function getCookies(): Array<{ name: string; value: string }> {
    const cookiesArray: Array<{ name: string; value: string }> = [];
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
        let [name, value] = cookie.split("=");
        name = name.trim();
        value = decodeURIComponent(value.trim());
        cookiesArray.push({ name, value });
    });

    return cookiesArray;
}
