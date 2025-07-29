export const formatCurrency = (value: number, currency: string = 'USD', locale: string = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
};

export const formatNumberWithCommas = (value: number, locale: string = 'en-NG') => {
    return new Intl.NumberFormat(locale).format(value);
  };