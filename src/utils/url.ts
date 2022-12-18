export const convertToSlug = (title: string): string => title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
