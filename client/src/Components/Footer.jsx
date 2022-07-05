import styled from 'styled-components';
import FlareIcon from '@mui/icons-material/Flare';
import { mobile } from '../responsive';
import { 
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <h2>
            Point Shop 
            <FlareIcon sx={{
              color:'yellow',
              fontSize:'12px',
              }}
            />
          </h2>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly 
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color='3B5999'>
              <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
              <Instagram/>
            </SocialIcon>
            <SocialIcon color='55ACEE'>
              <Twitter/>
            </SocialIcon>
          </SocialContainer>
        </Logo>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room sx={{marginRight:'10px'}}/> 22 Paper Street, New York, NY 1004
        </ContactItem>
        <ContactItem>
          <Phone sx={{marginRight:'10px'}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline sx={{marginRight:'10px'}}/> eliguy343@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:'column'})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const Logo = styled.div`
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  align-content: center;
  width:100%;
  align-items: center;
  justify-content: center;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:'none'})}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width:50%;
`;

export default Footer;