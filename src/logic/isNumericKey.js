export function isNumericKey(key) {
    const numericKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    return numericKeys.includes(key);
  };