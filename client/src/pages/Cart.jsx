import { Add, Remove} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { mobile } from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartRedux';

const KEY = "pk_test_51LJSzHEBK4WzIPujyfk92nossR8Kvkf4CeZvyb9lD5WTnBrCGLhJqumQpRvONVUx0kXqJv9ZMyDz6THQKSW9kAuU00abCtUyBG";

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const currentUser = useSelector(state=>state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let shippingPrice = 5.20;
  let shippingDiscount = 3.20;
  const [stripeToken, setStripeToken] = useState(null); 
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(()=>{
    const makeRequest = async ()=>{
        navigate('../success', {replace: true});
      }
    if(stripeToken) {
      makeRequest();
    }
  },[stripeToken, cart.total, navigate]);

  const handleClear = ()=> {
    dispatch(clearCart());
  };
  return (
    <Container>
      <Announcement/>
      <Navbar/>
        <Wrapper>
          <Title>
            YOUR BAG
          </Title>
          <Top>
            {currentUser && 
              <>
                <TopButton onClick={handleClear}>CLEAR CART</TopButton>
              </>
            }
            {!currentUser && 
              <>
                <SubTitle>
                  Login to save your shopping cart
                </SubTitle>
              </>
            }
          </Top>
          <Bottom>
            <Info>
                {cart.products.map(product=>(
                  <Product>
                    <PrdouctDetail>
                      <Image src={product.img}/>
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductID>
                          <b>ID:</b> {product._id}
                        </ProductID>
                        <ProductColor color={product.color.toLowerCase()}/>
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </PrdouctDetail>
                    <PriceDetail>
                      <ProdcutAmountContainer>
                        <Add/>
                          <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove/>
                          <ProductPrice>
                            $ {product.price*product.quantity}
                          </ProductPrice>
                      </ProdcutAmountContainer>
                    </PriceDetail>
                  </Product>
              ))}
              <Hr/>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Esitmated Shipping</SummaryItemText>
                <SummaryItemPrice>$ {shippingPrice}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ {shippingDiscount}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  $ {cart.total + shippingPrice - shippingDiscount}
                </SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="Point Shop"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total*100}
                stripeKey={KEY}
                token={onToken}
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: '10px'})}
`;
const Title = styled.h1`
  font-weight: 300;
  width:101%;
  text-align: center;
`;
const SubTitle = styled.h1`
  font-weight: 300;
  font-size: 20px;
  width:101%;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({width:'90%'})}
  padding: 20px;
`;
// const CheckoutButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   border:none;
//   background-color: black;
//   color: white;
//   border-radius: 5px;
//   box-shadow: 0 3px 3px -2px rgba(0,0,0,0.6);
//   ${mobile({marginLeft:'25px'})}
//   cursor:pointer;
//   &:active {
//     box-shadow: 0 1px 1px -2px rgba(0,0,0,0.6);
//     transform: translateY(2px);
//   }

// `;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  margin-left: 25px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  box-shadow: 0 3px 3px -2px rgba(0,0,0,0.6);
  cursor:pointer;
  &:active {
    box-shadow: 0 1px 1px -2px rgba(0,0,0,0.6);
    transform: translateY(3px);
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:'column'})}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:'column'})}
`;
const PrdouctDetail = styled.div`
  flex:2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
`;
const ProductID = styled.span`
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`;
const ProductSize = styled.span`
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const ProdcutAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  margin-left: 30px;
  font-size: 30px;
  font-weight: 200;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === 'total' && '500'};
  font-size: ${props=>props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;
const Button = styled.button`
  width: 100%;
  padding: 5px;
  background-color: black;
  color:white;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px 3px -2px rgba(0,0,0,0.6);
  cursor:pointer;
  &:active {
    box-shadow: 0 1px 1px -2px rgba(0,0,0,0.6);
    transform: translateY(2px);
  }
`;
export default Cart;