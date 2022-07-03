import { 
  FavoriteBorderOutlined,
  SearchOutlined, 
  ShoppingCartOutlined 
} from '@mui/icons-material';
import styled from 'styled-components';

const Info = styled.div`
  opacity:0;
  width:100%;
  height:100%;
  position:absolute;
  top: 0;
  left: 0;
  background-color: rgba(170,170,170, 0.2);
  z-index: 3;
  display:flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width:280px;
  height:380px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:#a6acad;
  position:relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width:200px;
  height:200px;
  border-radius:50%;
  background-color:white;
  position:absolute;
`;
const Image = styled.img`
  height:75%;
  z-index:2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #a6acad;
    transform: scale(1.1);
  }
`;


const Product = ({product}) => {
  return (
    <Container>
      <Circle/>
      <Image src={product.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;