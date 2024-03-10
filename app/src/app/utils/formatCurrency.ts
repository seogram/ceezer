export const formatCurrency = (amount: number) => {
  if(!amount) return "";
    return amount >= 1
      ? `€${amount.toFixed(2)}`
      : `${(amount * 100).toFixed(0)}p`;
  };