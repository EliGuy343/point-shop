import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { mobile } from '../responsive';

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
const ProductList = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FliterText>Filter Products:</FliterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
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
          <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
}

export default ProductList;