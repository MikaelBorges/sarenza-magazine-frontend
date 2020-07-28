import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  background: #fff;
  overflow: hidden;
  width: 100%;
  height: 430px;
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 310px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 400px;
`;

export const SliderItem = styled.div`
  position: relative;
  width: ${props => props.width + "px" || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin: 0 20px;
  height: 350px;
`;

export const Control = styled.div`
  position: absolute;
  top: 100px;
  width: 70px;
  height: 70px;
  margin: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 35px;
`;

export const ControlLeft = styled(Control)`
  left: 0;
`;
export const ControlRight = styled(Control)`
  right: 0;
`;

export const Text = styled.div`
  font-size: 12px;
`;

export const ImageContainer = styled.div`
  height: 320px;
`;

export const Image = styled.img`
  height: 265px;
`;
