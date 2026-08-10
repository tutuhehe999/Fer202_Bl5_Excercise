import { products } from '../data/exerciseData';
import {
  findProductWithHighestOutPrice,
  findProductWithLowestOutPrice,
  getProfit,
  getStockStatus,
  sortProductsByProfit,
} from '../utils/exerciseUtils';
import ExerciseSection from './ExerciseSection';

const formatPrice = (price) => price.toLocaleString('vi-VN');

function ProductExercise() {
  const highestPriceProduct = findProductWithHighestOutPrice(products);
  const lowestPriceProduct = findProductWithLowestOutPrice(products);
  const productsByProfit = sortProductsByProfit(products);

  return (
    <ExerciseSection number="11" title="Bài tập sản phẩm" id="products">
      <div className="subsection">
        <h3>1. Danh sách sản phẩm và trạng thái tồn kho</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Giá nhập</th>
                <th>Giá bán</th>
                <th>Tồn kho</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{formatPrice(product.inputPrice)}</td>
                  <td>{formatPrice(product.outPrice)}</td>
                  <td>{product.stock}</td>
                  <td className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                    {getStockStatus(product)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="subsection">
        <h3>2. Sản phẩm có giá bán lớn nhất và nhỏ nhất</h3>
        <p>
          Giá bán lớn nhất: <strong>{highestPriceProduct.name}</strong>
          {' — '}{formatPrice(highestPriceProduct.outPrice)}
        </p>
        <p>
          Giá bán nhỏ nhất: <strong>{lowestPriceProduct.name}</strong>
          {' — '}{formatPrice(lowestPriceProduct.outPrice)}
        </p>
      </div>

      <div className="subsection">
        <h3>3. Sắp xếp sản phẩm theo lợi nhuận giảm dần</h3>
        <p>Công thức: <code>lợi nhuận = outPrice - inputPrice</code></p>
        <ol className="product-profit-list">
          {productsByProfit.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <strong>{formatPrice(getProfit(product))}</strong>
            </li>
          ))}
        </ol>
      </div>
    </ExerciseSection>
  );
}

export default ProductExercise;
