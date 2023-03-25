import { TGood } from './goods';

function getAllParamsCount(allGoods: Array<TGood>, param: keyof TGood): Array<{ text: string; count: number }> {
  const allManufacturer = allGoods?.reduce((priv: { [key: string]: number }, good: TGood) => {
    return {
      ...priv,
      [good[param] as string]: priv[good[param] as string] ? priv[good[param] as  string] + 1 : 1,
    };
  }, {});
  return [...Object.keys(allManufacturer)].map((el) => {
    return { text: el, count: allManufacturer[el] };
  });
}

export default getAllParamsCount;
