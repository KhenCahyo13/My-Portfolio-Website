const monthMap: Record<string, number> = {
    "Januari": 0, "January": 0, "Februari": 1, "February": 1, "Maret": 2, "March": 2,
    "April": 3, "Mei": 4, "May": 4, "Juni": 5, "June": 5, "Juli": 6, "July": 6,
    "Agustus": 7, "August": 7, "September": 8, "Oktober": 9, "October": 9,
    "November": 10, "Desember": 11, "December": 11
};

export const calculateDuration = (startDate: string, endDate: string): string => {
    const parseDate = (dateStr: string): Date => {
        const parts = dateStr.split(" ");
        if (parts.length !== 2) {
            throw new Error(`Invalid date format: ${dateStr}`);
        }

        const [monthName, year] = parts;
        const month = monthMap[monthName];

        if (month === undefined || isNaN(Number(year))) {
            throw new Error(`Invalid month or year in date: ${dateStr}`);
        }

        return new Date(Number(year), month, 1);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years > 0 && months > 0) {
        return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
    } else {
        return `${months} month${months > 1 ? 's' : ''}`;
    }
};

export const getCurrentDate = (): string => {
    const months: string[] = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const now = new Date();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    return `${month} ${year}`;
};

export const dateTimeConverter = (dateTime: string, format: string = 'en-US'): string => {
    const date = new Date(dateTime);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const formatter = new Intl.DateTimeFormat(format, options);
    return formatter.format(date);
};