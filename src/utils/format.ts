export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  export const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-US').format(value);
  };
  
  export const formatDecimal = (value: number, decimals = 2): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };
  
  export const formatBytes = (bytes: number, decimals = 2): string => {
    if (bytes === 0) return '0 Bytes';
  
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
    const i = Math.floor(Math.log(bytes) / Math.log(k));
  
    return `${String(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)))} ${sizes[i]}`;
  };

  export const formatDate = (
    date: Date | string | number,
    options?: Intl.DateTimeFormatOptions
  ): string => {
    const dateObj = new Date(date);
    
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    return new Intl.DateTimeFormat('en-US', options ?? defaultOptions).format(dateObj);
  };

  export const formatRelativeTime = (date: Date | string | number): string => {
    const dateObj = new Date(date);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
    const intervals: [number, Intl.RelativeTimeFormatUnit][] = [
      [31536000, 'year'],
      [2592000, 'month'],
      [604800, 'week'],
      [86400, 'day'],
      [3600, 'hour'],
      [60, 'minute'],
    ];
  
    for (const [seconds, unit] of intervals) {
      const interval = Math.floor(diffInSeconds / seconds);
      if (interval >= 1) {
        const rtf = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });
        return rtf.format(-interval, unit);
      }
    }
  
    return 'just now';
  };

  export const truncateString = (
    str: string,
    maxLength = 50,
    suffix = '...'
  ): string => {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - suffix.length) + suffix;
  };
  
  export const capitalize = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  export const toTitleCase = (str: string): string => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => capitalize(word))
      .join(' ');
  };
  
  export const calculateDiscountPercent = (original: number, discounted: number): number => {
    if (original <= 0) return 0;
    return Math.round(((original - discounted) / original) * 100);
  };
  
  export const calculateTotal = (price: number, quantity: number): number => {
    return Math.round(price * quantity * 100) / 100;
  };

  export default {
    formatCurrency,
    formatNumber,
    formatDecimal,
    formatBytes,
    formatDate,
    formatRelativeTime,
    truncateString,
    capitalize,
    toTitleCase,
    calculateDiscountPercent,
    calculateTotal,
  };