import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { mobile } from '../responsive';

const ProductList = () => {
  const {category} = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FliterText>Filter Products:</FliterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FliterText>Sort Products:</FliterText>
          <Select onChange={e=>setSort(e.target.value)}>
              <Option value='newest'>Newest</Option>
              <Option value='asc'>Price (asc)</Option>
              <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        category={category}
        filters={filters}
        setFilters={setFilters}
        sort={sort}
      />
      <Newsletter/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`

`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align:center;
  ${mobile({width:'0px 20px', flexDirection:'column'})}
`;
const FliterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  background-color: white;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  border:none;
`;
const Option = styled.option`
`;

export default ProductList;