export const urlToFile = async ({ url, fileName, mimeType }) => {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const file = await new File([buffer], fileName, { type: mimeType });

  return file;
};
