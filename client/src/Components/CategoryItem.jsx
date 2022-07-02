import styled from 'styled-components';

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  margin:3px;
  height:70vh;
  position:relative;
`;
const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color:white;
  margin-bottom:20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size:20px;
  background-color: white;
  border: none;
  font-weight:600;
  border-radius:10px;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,0.6); 
  cursor: pointer;
  &:hover {
    background-color: #ebe9e6;
  }
  &:active {
    background-color: #b5b5b5;
  }
`;

export default CategoryItem;