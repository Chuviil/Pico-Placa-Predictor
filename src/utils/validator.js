export function isPlate(plate) {
    // Regular expression to match a plate number
    const patternExpression = /^[A-Z]{3}-\d{4}$/;

    // Test the plate number against the regular expression
    return patternExpression.test(plate);
}

export function isDate(date) {
    // Regular expression to match a date string
    const patternExpression = /^\d{4}-\d{2}-\d{2}$/;

    // Test the date string against the regular expression
    if (!patternExpression.test(date)) return false;

    // Parsing date with Date.parse() returns a timestamp if the date is invalid
    const parsedDate = Date.parse(date);

    // If the date is invalid, parsedDate will be a NaN
    return !isNaN(parsedDate);
}

export function isTime(time) {
    // Regular expression to math a time string
    const patternExpression = /^\d{2}:\d{2}$/;

    // Test the time string against the regular expression
    if (!patternExpression.test(time)) return false;
    
    // Split the time string into hours and minutes
    const [hours, minutes] = time.split(':').map(Number);

    // Validate the hours to be between 0 and 23
    if (hours < 0 || hours > 23) return false;

    // Validate the minutes to be between 0 and 59
    if (minutes < 0 || minutes > 59) return false;

    return true;
}
