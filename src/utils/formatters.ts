interface FormatCurrencyOptions {
    currency?: "BRL" | "USD";
    hideDecimalsIfWhole?: boolean;
}

export function formatCurrency(value: number | string, options: FormatCurrencyOptions = {}): string {
    const { currency = "BRL", hideDecimalsIfWhole = true } = options;

    if (typeof value === "string") {
        if (value.startsWith("R$") || value.startsWith("$")) {
            return value;
        }

        const parsed = Number(value.replace(/[^0-9.-]+/g, ""));
        if (Number.isNaN(parsed)) {
            return value;
        }
        value = parsed;
    }

    const hasDecimals = value % 1 !== 0;
    const minimumFractionDigits = !hideDecimalsIfWhole || hasDecimals ? 2 : 0;
    const maximumFractionDigits = 2;

    const locale = currency === "BRL" ? "pt-BR" : "en-US";

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(value);
}

export function formatHoursProgress(completed: number, total: number): string {
    return `${completed}/${total}h`;
}

export function formatPercentage(value: number): string {
    return `${Math.round(value)}%`;
}

export function getShadowColor(color: string, alpha = 0.7): string {
    if (color.startsWith("#")) {
        const cleanHex = color.replace("#", "");
        if (cleanHex.length === 6) {
            const r = parseInt(cleanHex.substring(0, 2), 16);
            const g = parseInt(cleanHex.substring(2, 4), 16);
            const b = parseInt(cleanHex.substring(4, 6), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
    }
    return color;
}
