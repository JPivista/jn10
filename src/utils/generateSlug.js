export const generateSlug = (text) => {
    if (!text) return '';
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-'); // Replace spaces and special characters with a hyphen
};
