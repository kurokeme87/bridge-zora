export const formatCurrency = (amount) => {
  if (isNaN(amount) || amount == null) {
    amount = 0;
  }

  const roundedAmount = Math.ceil(amount * 100) / 100;
  return roundedAmount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
