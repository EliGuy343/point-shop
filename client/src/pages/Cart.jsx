import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
        <Wrapper>
          <Title>
            YOUR BAG
          </Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <CheckoutButton>CHECKOUT NOW</CheckoutButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <PrdouctDetail>
                  {/*I'll remove this long ass link later*/}
                  <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                  <Details>
                    <ProductName>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductID>
                      <b>ID:</b> 9327071023701
                    </ProductID>
                    <ProductColor color='black'/>
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize>
                  </Details>
                </PrdouctDetail>
                <PriceDetail>
                  <ProdcutAmountContainer>
                     <Add/>
                     <ProductAmount>2</ProductAmount>
                     <Remove/>
                     <ProductPrice>$ 30</ProductPrice>
                  </ProdcutAmountContainer>
                </PriceDetail>
              </Product>
              <Hr/>
              <Product>
                <PrdouctDetail>
                  {/*I'll remove this long ass link later*/}
                  <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                  <Details>
                    <ProductName>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductID>
                      <b>ID:</b> 9327071023701
                    </ProductID>
                    <ProductColor color='black'/>
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize>
                  </Details>
                </PrdouctDetail>
                <PriceDetail>
                  <ProdcutAmountContainer>
                     <Add/>
                     <ProductAmount>2</ProductAmount>
                     <Remove/>
                     <ProductPrice>$ 30</ProductPrice>
                  </ProdcutAmountContainer>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>subtotal</SummaryItemText>
                <SummaryItemPrice>$ 120</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Esitmated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.9</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -3.99</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 122.9</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
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
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const CheckoutButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border:none;
  background-color: black;
  color: white;
  border-radius: 5px;
  box-shadow: 0 3px 3px -2px rgba(0,0,0,0.6);
  cursor:pointer;
  &:active {
    box-shadow: 0 1px 1px -2px rgba(0,0,0,0.6);
    transform: translateY(2px);
  }

`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: none;
  background-color: #0394fc;
  color: white;
  border-radius: 5px;
  box-shadow: 0 3px 3px -2px rgba(0,0,0,0.6);
  cursor:pointer;
  &:active {
    box-shadow: 0 1px 1px -2px rgba(0,0,0,0.6);
    transform: translateY(3px);
  }
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
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