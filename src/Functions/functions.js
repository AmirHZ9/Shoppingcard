const shorter = (title) => {
  const splitedtitle = title.split(" ");
  const newtitle = `${splitedtitle[0]} ${splitedtitle[1]}`;
  return newtitle;
};

const isInCart = (state,id) => {
  const result = !!state.selectedItems.find(item => item.id === id)
  return result
}

const quantityCount = (state, id) =>{
  const index = state.selectedItems.findIndex(item => item.id === id);
  if(index === -1){
    return false;
  }else{
    return state.selectedItems[index].quantity;
  }
}
export {isInCart};
export { shorter,quantityCount };
