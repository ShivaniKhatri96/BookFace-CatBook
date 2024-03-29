import { BiSearchAlt } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs'
import styled, { css, keyframes } from 'styled-components';


export const Container = styled.div`
  position: relative;
  width: 53px;
  height: 53px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  background: transparent;
  transition: all 0.5s;
  margin: 18px;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 50%;
      -webkit-box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);
      box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);
      border: none;

      @media (max-width: 1092px) {
        width: 200px;;
        
      }
    `}

    @media (max-width: 1092px) {
        width: 200px;
    }
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0 10px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.2rem;
  width: 1.2rem;
  fill: #fff;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(BiSearchAlt)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(BsArrowRight)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: black;
  }
`;
