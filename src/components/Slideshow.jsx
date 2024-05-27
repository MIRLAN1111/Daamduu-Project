import React, { useState } from 'react';
import styled from 'styled-components';

const SlideshowContainer = styled.div`
  max-width: 1000px;
  padding-top: 100px;
  position: relative;
  margin: auto;
  color: white;
`;

const Slide = styled.div`
  display: none;
  position: relative;
  margin-top: 100px;

`;


const Image = styled.img`
  width: 300px;
margin-left: 350px;
cursor: pointer;
`;

const Caption = styled.div`
  color: #ffffff;
  font-size: 25px;
  padding: 8px 12px;
  font-weight: 700;
  margin-top: 50px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

const PrevButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 5px;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  left: 0;
  border-radius: 3px 0 0 3px;
background-color: #00000062;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const NextButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 5px;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  right: 0;
  border-radius: 3px 0 0 3px;
  background-color: #00000062;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &.active, &:hover {
    background-color: #717171;
  }
`;

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };
const NameProduct = styled.p`
margin-left: 250px;
  font-size:25px;
  width: 500px;
  border-radius: 20px;
  font-weight: 700;
text-align: center;
  background-image: linear-gradient(to right, #ff0000, #ffd900);

`
  return (
    
    <SlideshowContainer>
      <NameProduct>Популярнные:</NameProduct>
      <Slide style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
        <Image  src="https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v19/Zakuski/Khrustiashchie_kurinyie_kryilyishki/Medium.png?hash=de201bf4de991c1fc66bcdd0886fcd50" />
        <Caption>Хрустящие куриные крылышки</Caption>
      </Slide>

      <Slide style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
        <Image src="https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Zavtraki/Klubnyii_sendvich_s_kartofelem_fri/Medium.png?hash=528dfa5c4f2724fb0669139a0d2efa9e" />
        <Caption>
        Хрустящие куриные крылышки</Caption>
      </Slide>

      <Slide style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
        <Image src="https://backend.magnit.tj/uploads/images/ef089c91849f6c3c185f6657e866b518-1024x1024.jpg" />
        <Caption>Lets'go 1л</Caption>
      </Slide>

      <PrevButton onClick={() => plusSlides(-1)}>❮</PrevButton>
      <NextButton onClick={() => plusSlides(1)}>❯</NextButton>

      <div style={{ textAlign: 'center' }}>
        <Dot className={slideIndex === 1 ? 'active' : ''} onClick={() => currentSlide(1)} />
        <Dot className={slideIndex === 2 ? 'active' : ''} onClick={() => currentSlide(2)} />
        <Dot className={slideIndex === 3 ? 'active' : ''} onClick={() => currentSlide(3)} />
      </div>
    </SlideshowContainer>
  );
};

export default Slideshow;