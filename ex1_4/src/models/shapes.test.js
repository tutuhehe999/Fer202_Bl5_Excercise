import { Rectangle, Shape, Triangle } from './shapes';

test('Rectangle and Triangle inherit Shape and calculate their areas', () => {
  const rectangle = new Rectangle('blue', 8, 5);
  const triangle = new Triangle('green', 10, 6);

  expect(rectangle).toBeInstanceOf(Shape);
  expect(triangle).toBeInstanceOf(Shape);
  expect(rectangle.getArea()).toBe(40);
  expect(triangle.getArea()).toBe(30);
  expect(rectangle.toString()).toContain('Rectangle');
  expect(triangle.toString()).toContain('Triangle');
});
