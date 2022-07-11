import styled from 'styled-components';
import {Search, ShoppingCartCheckoutOutlined} from '@mui/icons-material';
import FlareIcon from '@mui/icons-material/Flare';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input/>
            <Search 
              style={{
                color:"black",
                fontSize: 16,
                }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Point Shop
            <FlareIcon sx={{
              color:'yellow',
              fontSize:'12px',
            }}/>
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
          <Badge 
            badgeContent={quantity}  
            sx={{
              "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "#ff4258"
              }
            }}
          >
            <ShoppingCartCheckoutOutlined/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 50px;
  background-color: #0394fc;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,0.6);
  ${mobile({height:'50px'})}
`;
const Wrapper = styled.div`
  padding: 15px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  ${mobile({padding:'10px 0px'})}
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  margin-top:3px;
  cursor: pointer;
  ${mobile({display:'none'})}
`;
const SearchContainer = styled.div`
  height: 22px;
  width: 200px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,0.8);
  ${mobile({width:'70px', marginTop:'5px'})}
`;
const Input = styled.input`
  border: none;
  border-radius: 5px;
  font-size: 14px;
  width: 180px;
  &:focus,
  &:active {
    outline: none;
  }
  ${mobile({width:'50px'})}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  display:flex;
  flex-direction: row;
  margin-left: 200px;
  ${mobile({marginLeft:'0px'})}
`;
const Logo = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  margin-left: 25px;
  ${mobile({fontSize:'15px'})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 3 ,justifyContent:'center'})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:'12px',marginLeft:'5px'})}
`;

export default Navbar;