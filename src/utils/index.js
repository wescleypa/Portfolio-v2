export const renderSocialLink = (type) => {
  if (!type) return '#';
  return `https://${type}.com/${process.env[`REACT_APP_${type?.toString()?.toUpperCase()}_PROFILE`]}`;
}

export const phoneFormat = (number) => {
  const cleanNumber = String(number).replace(/\D/g, '');

  if (cleanNumber.length === 11) {
    return cleanNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  if (cleanNumber.length === 10) {
    return cleanNumber.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $3-$4');
  }

  return cleanNumber;
}