function isAllowedToCirculate(plate, date, time) {
    // Convert the date string to a Date object and set the time to 00:00:00 to treat it as a local date
    const dateObject = new Date(date + "T00:00:00");

    // Extract the day of the week
    const dayOfWeek = dateObject.getDay();

    // Extract the hours and minutes from the time string and turn them into Numbers
    const [hours, minutes] = time.split(':').map(Number);

    // Check if it's Saturday or Sunday since Pico y Placa only applies on weekdays
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return true;
    }

    // Check restricted time ranges
    const isMorningRestrictedTime = (hours > 6 && hours < 9) || (hours === 9 && minutes <= 30);
    const isAfternoonRestrictedTime = (hours > 15 && hours < 19) || (hours === 19 && minutes <= 30);

    // Check the day of the week based on the plate number
    const lastDigit = Number(plate.slice(-1));
    switch (true) {
        case lastDigit === 1 || lastDigit === 2:
            return dayOfWeek !== 1 || !(dayOfWeek === 1 && (isMorningRestrictedTime || isAfternoonRestrictedTime));
        case lastDigit === 3 || lastDigit === 4:
            return dayOfWeek !== 2 || !(dayOfWeek === 2 && (isMorningRestrictedTime || isAfternoonRestrictedTime));
        case lastDigit === 5 || lastDigit === 6:
            return dayOfWeek !== 3 || !(dayOfWeek === 3 && (isMorningRestrictedTime || isAfternoonRestrictedTime));
        case lastDigit === 7 || lastDigit === 8:
            return dayOfWeek !== 4 || !(dayOfWeek === 4 && (isMorningRestrictedTime || isAfternoonRestrictedTime));
        case lastDigit === 9 || lastDigit === 0:
            return dayOfWeek !== 5 || !(dayOfWeek === 5 && (isMorningRestrictedTime || isAfternoonRestrictedTime));
        default:
            return false; // Invalid plate number
    }
}

export default isAllowedToCirculate;
