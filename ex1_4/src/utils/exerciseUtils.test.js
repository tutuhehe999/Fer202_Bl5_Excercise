import { ages, companies, people, person, products } from '../data/exerciseData';
import {
  areAllTeenagers,
  collectValues,
  createCompanySummary,
  createCounter,
  createRandomNumberPromise,
  findAllTeenagers,
  findFirstTeenager,
  findProductWithHighestOutPrice,
  findProductWithLowestOutPrice,
  getCompaniesStartedAfter,
  getCompanyNamesWithForEach,
  getRetailCompaniesWithIncrementedStart,
  getProfit,
  getStreet,
  getStockStatus,
  hasTeenager,
  parseQueryParameters,
  productWithReduce,
  sortAgesDescending,
  sortCompaniesByEnd,
  sortProductsByProfit,
  sumNumbers,
  sumWithReduce,
} from './exerciseUtils';

describe('people array methods', () => {
  test('finds and checks teenagers', () => {
    expect(findFirstTeenager(people).name).toBe('Ann');
    expect(findAllTeenagers(people).map(({ name }) => name)).toEqual(['Ann', 'Elisabeth']);
    expect(areAllTeenagers(people)).toBe(false);
    expect(hasTeenager(people)).toBe(true);
  });
});

describe('reduce exercises', () => {
  test('calculates sum and product with initial values', () => {
    expect(sumWithReduce([1, 2, 3, 4])).toBe(10);
    expect(productWithReduce([1, 2, 3, 4])).toBe(24);
    expect(sumWithReduce(ages)).toBe(460);
  });
});

describe('company exercises', () => {
  test('uses forEach to collect every company name', () => {
    expect(getCompanyNamesWithForEach(companies)).toHaveLength(9);
    expect(getCompanyNamesWithForEach(companies)[0]).toBe('Company One');
  });

  test('filters companies started after 1987', () => {
    expect(getCompaniesStartedAfter(companies, 1987).map(({ name }) => name)).toEqual([
      'Company Two',
      'Company Three',
      'Company Four',
      'Company Five',
      'Company Eight',
    ]);
  });

  test('filters retail companies, increments start and preserves source data', () => {
    const retailCompanies = getRetailCompaniesWithIncrementedStart(companies);

    expect(retailCompanies.map(({ start }) => start)).toEqual([1993, 1990, 1982]);
    expect(retailCompanies.every(({ category }) => category === 'Retail')).toBe(true);
    expect(companies[1].start).toBe(1992);
  });

  test('sorts companies and ages without changing the source arrays', () => {
    expect(sortCompaniesByEnd(companies)[0].name).toBe('Company Nine');
    expect(sortCompaniesByEnd(companies).at(-1).name).toBe('Company Eight');
    expect(sortAgesDescending(ages)).toEqual([64, 61, 54, 45, 44, 33, 32, 25, 21, 20, 16, 15, 13, 12, 5]);
    expect(ages[0]).toBe(33);
  });
});

describe('other ES6 requirements', () => {
  test('uses destructuring, rest, spread, closures and URL parsing', () => {
    const summary = createCompanySummary(companies[0]);
    const counter = createCounter();

    expect(summary).toMatchObject({ name: 'Company One', category: 'Finance' });
    expect(summary.print()).toBe('Company One');
    expect(sumNumbers(2, 4, 6, 8)).toBe(20);
    expect(collectValues('React', ['JSX', 'ES6'], 2026)).toEqual(['React', 'JSX', 'ES6', 2026]);
    expect(getStreet(person)).toBe('Lalaland 12');
    expect([counter(), counter(), counter()]).toEqual([0, 1, 2]);
    expect(parseQueryParameters('https://example.com?name=React&level=beginner')).toEqual({
      name: 'React',
      level: 'beginner',
    });
  });
});

describe('Promise exercise', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('resolves when the random number is larger than five', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9);
    await expect(createRandomNumberPromise()).resolves.toBe(9);
  });

  test('rejects with Error when the number is at most five', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.4);
    await expect(createRandomNumberPromise()).rejects.toThrow('Error');
  });
});

describe('product exercise', () => {
  test('displays stock status based on stock quantity', () => {
    expect(getStockStatus(products[0])).toBe('Còn hàng');
    expect(getStockStatus(products[1])).toBe('Hết hàng');
  });

  test('finds products with the highest and lowest selling prices', () => {
    expect(findProductWithHighestOutPrice(products).name).toBe('Laptop ASUS');
    expect(findProductWithLowestOutPrice(products).name).toBe('Chuột');
  });

  test('sorts products by descending profit without changing the source array', () => {
    const originalOrder = products.map(({ id }) => id);
    const sortedProducts = sortProductsByProfit(products);

    expect(sortedProducts.map(({ name }) => name)).toEqual([
      'Laptop ASUS',
      'Màn hình Dell',
      'Bàn phím',
      'Chuột',
    ]);
    expect(sortedProducts.map(getProfit)).toEqual([3500, 700, 400, 150]);
    expect(products.map(({ id }) => id)).toEqual(originalOrder);
  });
});
