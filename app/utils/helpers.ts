export const pickNoRepeat = (list: string[], amount: number) => {
  const copyOfList = [...list];
  const pickedItems = Array.from({ length: amount }, () => {
    const pos = Math.round(Math.random() * (copyOfList.length - 1));
    const sel = copyOfList.splice(pos, 1);
    return sel[0];
  });

  return pickedItems
}