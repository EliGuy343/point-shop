import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Products = ({category,setFilters,filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(()=>{
    setFilters({});
    setFilteredProducts([]);
    setProducts([]);
    const getProducts = async () => {
      try {
        let res;
        if(category) {
          res = await axios.get(
            `/api/products?category=${category}`);
        }
        else {
          res = await axios.get('/api/products');
        }
        setProducts(res.data);
      } 
      catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [category]);

  useEffect(() =>{
    if(category) {
      if(filters.color === undefined && filters.size === undefined) {
        setFilteredProducts(products);
      }
      else {
        setFilteredProducts(
          products.filter(item => 
            Object.entries(filters).every(([key,value]) =>
              item[key].includes(value))
        ));
      }
    }
  // eslint-disable-next-line
  }, [filters]);

  useEffect(() =>{
    if(sort === 'newest') {
      setFilteredProducts((prev) =>
      [...prev].sort((a,b)=> a.createdAt - b.createdAt))
    }
    else if(sort === 'asc') {
      setFilteredProducts((prev) =>
      [...prev].sort((a,b)=> a.price - b.price))
    }
    else {
      setFilteredProducts((prev) =>
      [...prev].sort((a,b)=> b.price - a.price))
    }
  }, [sort])
  return (
    <Container>
      {filteredProducts.length > 0
        ? filteredProducts.map(product=>
            <Product product={product} key={product.id}/>
          ) 
        : (!filters.size && !filters.color) && products.slice(0,8).map(product=>
            <Product product={product} key={product.id}/>
        )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Products;