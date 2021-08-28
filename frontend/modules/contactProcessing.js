import formatPhone
  from '@/modules/formatPhone';

export const processPhone = (phone) => {
  const processedPhone = { ...phone };
  processedPhone.url = (
    `tel:+${processedPhone.value}`
  );
  processedPhone.value = String(
    processedPhone.value,
  );
  processedPhone.value = formatPhone(
    processedPhone.value,
  );

  return processedPhone;
};

export const processEmail = (email) => {
  const processedEmail = { ...email };
  processedEmail.url = (
    `mailto:${processedEmail.value}`
  );

  return processedEmail;
};

export const processTelegram = (telegram) => {
  const processedTelegram = { ...telegram };
  processedTelegram.url = (
    'https://telegram.me/'
    + `${processedTelegram.value}`
  );
  processedTelegram.value = (
    `@${processedTelegram.value}`
  );

  return processedTelegram;
};
