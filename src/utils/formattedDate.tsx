export const formattedData = (data: string) => {
  const getDay = new Date(data).getDate().toString().padStart(2, "0");
  const getMonth = (new Date(data).getMonth() + 1).toString().padStart(2, "0");
  const getYear = new Date(data).getFullYear();

  return `${getYear}-${getMonth}-${getDay}`;
};
