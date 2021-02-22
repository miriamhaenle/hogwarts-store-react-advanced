export default function ProductCard({ product }) {
  console.log(product);
  return (
    <>
      <h4>{product.name}</h4>
      <span>{product.price}</span>
      <span>{product.currency}</span>
      <span>{product.packageSize}</span>
      <span>{product.supportContact}</span>
      <div>
        {product.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
      <span>{product.tag}</span>
    </>
  );
}
