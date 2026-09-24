function toDate(date: Date | string | number): Date {
    return date instanceof Date ? date : new Date(date);
}

export function capitalize(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatMonthYear(date: Date | string | number = new Date()): string {
    const d = toDate(date);
    const formatter = new Intl.DateTimeFormat("pt-BR", {
        month: "long",
        year: "numeric",
    });
    return capitalize(formatter.format(d));
}
