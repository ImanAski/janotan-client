export function priceFormatter(price) {
  const formattedPrice = Number(price).toLocaleString("ar-AE");
  console.log(formattedPrice);
  return formattedPrice;
}
