export const isTeenager = ({ age }) => age >= 10 && age <= 20;

export const findFirstTeenager = (people) => people.find(isTeenager);

export const findAllTeenagers = (people) => people.filter(isTeenager);

export const areAllTeenagers = (people) => people.every(isTeenager);

export const hasTeenager = (people) => people.some(isTeenager);

export const sumWithReduce = (array) => array.reduce((total, number) => total + number, 0);

export const productWithReduce = (array) => array.reduce((product, number) => product * number, 1);

export const getCompanyNamesWithForEach = (companies) => {
  const names = [];

  companies.forEach(({ name }) => {
    names.push(name);
  });

  return names;
};

export const getCompaniesStartedAfter = (companies, year) =>
  companies.filter(({ start }) => start > year);

export const getRetailCompaniesWithIncrementedStart = (companies) =>
  companies
    .filter(({ category }) => category === 'Retail')
    .map((company) => ({ ...company, start: company.start + 1 }));

export const sortCompaniesByEnd = (companies) =>
  [...companies].sort((firstCompany, secondCompany) => firstCompany.end - secondCompany.end);

export const sortAgesDescending = (ages) => [...ages].sort((firstAge, secondAge) => secondAge - firstAge);

export const createCompanySummary = (company) => {
  const { name, category } = company;

  return {
    name,
    category,
    print() {
      return this.name;
    },
  };
};

export const sumNumbers = (...values) => values.reduce((total, value) => total + value, 0);

export const collectValues = (...values) =>
  values.reduce(
    (result, value) => [...result, ...(Array.isArray(value) ? value : [value])],
    [],
  );

export const getStreet = ({ address: { street } }) => street;

export const createCounter = () => {
  let count = 0;

  return () => count++;
};

export const parseQueryParameters = (url) => {
  const { searchParams } = new URL(url, 'https://example.com');
  return Object.fromEntries(searchParams.entries());
};

export const createRandomNumberPromise = () =>
  new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 11);

    if (randomNumber > 5) {
      resolve(randomNumber);
    } else {
      reject(new Error('Error'));
    }
  });

export const getStockStatus = ({ stock }) => (stock > 0 ? 'Còn hàng' : 'Hết hàng');

export const findProductWithHighestOutPrice = (products) =>
  products.reduce((highest, product) => (product.outPrice > highest.outPrice ? product : highest));

export const findProductWithLowestOutPrice = (products) =>
  products.reduce((lowest, product) => (product.outPrice < lowest.outPrice ? product : lowest));

export const getProfit = ({ inputPrice, outPrice }) => outPrice - inputPrice;

export const sortProductsByProfit = (products, direction = 'descending') => {
  const multiplier = direction === 'ascending' ? 1 : -1;
  return [...products].sort((firstProduct, secondProduct) =>
    (getProfit(firstProduct) - getProfit(secondProduct)) * multiplier);
};
