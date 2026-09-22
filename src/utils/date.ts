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

export function formatDateShort(date: Date | string | number, separator: "/" | "." = "/"): string {
    const d = toDate(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    return `${day}${separator}${month}`;
}

export function formatRelativeDay(date: Date | string | number, separator: "/" | "." = "/"): string {
    const target = toDate(date);
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate());

    const diffTime = targetDay.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    const dateShort = formatDateShort(target, separator);

    if (diffDays === 0) {
        return `Hoje • ${dateShort}`;
    }
    if (diffDays === 1) {
        return `Amanhã • ${dateShort}`;
    }
    if (diffDays === -1) {
        return `Ontem • ${dateShort}`;
    }

    const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "short" }).format(target).replace(".", "");

    return `${capitalize(weekday)} • ${dateShort}`;
}

export function formatDateRange(start: Date | string | number, end: Date | string | number): string {
    const dStart = toDate(start);
    const dEnd = toDate(end);

    const monthStart = capitalize(new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(dStart));
    const monthEnd = capitalize(new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(dEnd));

    return `${dStart.getDate()} de ${monthStart} - ${dEnd.getDate()} de ${monthEnd}`;
}

export function formatDuration(minutes: number): string {
    if (minutes < 60) {
        return `${minutes} min`;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
        return `${hours}h`;
    }

    return `${hours}h ${remainingMinutes}min`;
}

export function formatTime(date: Date | string | number): string {
    const d = toDate(date);
    return new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(d);
}
