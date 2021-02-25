Product card for normal products

```js
const productNormal = {
  name: 'Nimbus 2000',
  price: '1000',
  currency: 'Galleons',
  category: 'Sports',
  packageSize: 'M',
  supportContact: 'wizardsports@magic.edu',
  tags: ['QUIDDITCH'],
  onSale: false,
};

<ProductCard product={productNormal} />;
```

Product card for items on sale

```js
const productOnSale = {
  name: 'Nimbus 1990',
  price: '500',
  currency: 'Galleons',
  category: 'Sports',
  packageSize: 'M',
  supportContact: 'wizardsports@magic.edu',
  tags: ['QUIDDITCH'],
  onSale: true,
};

<ProductCard product={productOnSale} />;
```
