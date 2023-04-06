import getAllBlock from './getAllBlocks';
import getAllParamsCount from './getAllManufacturers';

const testData = [
  {
    id: 4604049097553,
    title: 'Маска для лица',
    description: 'Содержит антиоксиданты',
    price: 72.84,
    volume: 0.45,
    size: '54X35',
    brand: 'Herbel',
    manufacturer: 'Нэфис',
    category: ['Уход за руками'],
    subCategory: ['Средства для ногтей'],
    images:
      'https://img.freepik.com/free-photo/close-up-of-a-young-woman-hands-holding-jar-of-cream_171337-12781.jpg?w=900&t=st=1679635605~exp=1679636205~hmac=9dca2f52726613b362e754d341d318d3db49358c483ab30dc0a6b751bb7f713d',
  },
  {
    id: 4604049097554,
    title: 'Лосьен для лица',
    description: 'Лучшая зашита и уход',
    price: 32.76,
    volume: 0.55,
    size: '45X35',
    brand: 'Carbina',
    manufacturer: 'BASF',
    category: ['Уход за руками'],
    subCategory: ['Мыло твердое'],
    images:
      'https://img.freepik.com/free-photo/close-up-of-a-young-woman-hands-holding-jar-of-cream_171337-12781.jpg?w=900&t=st=1679635605~exp=1679636205~hmac=9dca2f52726613b362e754d341d318d3db49358c483ab30dc0a6b751bb7f713d',
  },
];

describe('Проверяем вспомогательные функции', () => {
  it('Проверяем getAllBlock', () => {
    const res = getAllBlock(testData);
    expect(res.toString()).toBe('Уход за руками');
  });

  it('Проверяем getAllParamsCount', () => {
    const res = getAllParamsCount(testData, 'brand');
    expect(res.length).toBe(2);
  });

   it('Проверяем getAllParamsCount', () => {
     const res = getAllParamsCount(testData, 'manufacturer');
     expect(res.length).toBe(2);
   });
});
