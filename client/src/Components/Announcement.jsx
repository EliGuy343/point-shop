import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ff5842;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:14px;
  font-weight:500;
`;

const Announcement = () => {
  return (
   <Container>
    Super deal! while free shipping orders over $50
   </Container>
  );
}

export default Announcement;