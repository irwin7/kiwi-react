export const gettinProds = async(link,limit) => {
  const response = await fetch(`${link}?limit=${limit}`);
  const data = await response.json();
  return data;
}