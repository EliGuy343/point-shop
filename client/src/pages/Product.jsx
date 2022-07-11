import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import { mobile } from '../responsive';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('')
  const handleAmount = (inp) => {
    if(inp === 'dec' && quantity > 1)
    {
      setQuantity(quantity-1);
    }
    else if(inp === 'inc' && quantity < 10){
      setQuantity(quantity+1);
    }
  }
  useEffect(()=>{
    const getProduct = async () => {
      try {
        let res;
        res = await axios.get(`/api/products/${id}`)
        setProduct(res.data);
        setColor(res.data.color[0]);
        setSize(res.data.size[0]);
      }
      catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, [id]);
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      {product && <Wrapper>
        <ImgContainer>
          <Image src={product.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
                {product.color.map(color=> {
                  return (
                  <FilterColor 
                    color={color} 
                    key={color}
                    onClick={()=>setColor(color)}
                    />
                  );
                })}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                {product.size.map(size=>{
                  return (
                    <FilterSizeOption key={size}>
                      {size}
                    </FilterSizeOption>
                  );
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleAmount('dec')}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleAmount('inc')}/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>}
      <Newsletter/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection:'column', padding:'10px'})}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:'40vh'})}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({width:'85%', padding:'10px'})}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
  `;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px;
  ${mobile({width:'100%', margin:'20px 0px'})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 5px;
`;
const FilterColor = styled.div` 
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=> props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  ${mobile({width:'100%', margin:'20px 0px'})}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #0394fc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  box-shadow: 0 3px 3px -3px rgba(0,0,0,0.6);
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid #0394fc;
  background-color: white;
  cursor: pointer;
  margin-left: 133px;
  font-weight: 500;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,0.6);
  ${mobile({width:'100%', margin:'20px 0px'})}

  &:hover {
    background-color: gray;
  }
`;
export default Product;
