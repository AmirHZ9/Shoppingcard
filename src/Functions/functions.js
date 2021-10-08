const shorter = (title) => {
  const splitedtitle = title.split(" ");
  const newtitle = `${splitedtitle[0]} ${splitedtitle[1]}`;
  return newtitle;
};
export { shorter };
