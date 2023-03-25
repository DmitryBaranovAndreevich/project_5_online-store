import { TGood } from './goods';

function getAllCategoriesInBlock(blockName: string, goods: Array<TGood>) {
  return goods
    .filter((el: TGood) => el.category.includes(blockName))
    .map((good: TGood) => good.subCategory)
    .reduce((priv: string[], el: string[]) => {
      el.forEach((elem) => {
        if (!priv.includes(elem)) priv = [...priv, elem];
      });
      return priv;
    });
}

export default getAllCategoriesInBlock;
