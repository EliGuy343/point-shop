import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styled from 'styled-components';
import { useState } from 'react';
import { sliderItems } from '../data';
const Slider = () =>{
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
     if(direction) {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1);
     }
     else {
      setSlideIndex(slideIndex < 1 ? slideIndex +1 : 0);
     }
  }
  return (
    <Container>
      <Arrow direction='left' onClick={()=>handleClick('left')}>
        <ArrowBackOutlinedIcon/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={()=>handleClick('right')}>
        <ArrowForwardOutlinedIcon/>
      </Arrow>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:#d6d6d6;
  opacity: 0.55;
  cursor: pointer;
  border-radius:50%;
  display:flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  background-color:#${props=>props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  width:30%;
  flex:1;
`;
const Image = styled.img`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex:1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  font-size: 25px;
  margin:50px 0px;
  font-weight:500;
  letter-spacing:3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size:20px;
  background-color: white;
  border: none;
  border-radius:10px;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,0.6); 
  cursor: pointer;
`;
export default Slider;