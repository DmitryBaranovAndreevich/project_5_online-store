import { TGood } from './goods';

function getAllBlock(goods: Array<TGood>) {
  return goods
    .map(({ category }) => category)
    .reduce((priv, el) => {
      el.forEach((elem) => {
        if (!priv.includes(elem)) priv = [...priv, elem];
      });
      return priv;
    });
}

export default getAllBlock;
