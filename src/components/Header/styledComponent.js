import styled, { css } from "styled-components";

import { FaShopify, FaAngleDown, FaAngleUp } from "react-icons/fa";

export const Shopify = styled(FaShopify)`
  fill: #95bf47;
  width: 40px;
  height: 40px;
`;

export const HeaderComponent = styled.header`
  position: absolute;
  margin: 0 5.65rem;
  top: 0;
  width: 100%;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-style: italic;
  color: #e5e7eb;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const AnchorElement = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffff;
  text-decoration: none;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  color: #fff;
  list-style-type: none;
  padding-left: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Down = styled(FaAngleDown)`
  margin-top: 5px;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;

  ${(props) =>
    (props.solutions || props.resources) &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Up = styled(FaAngleUp)`
  margin-top: 5px;
  transition: background-color 0.3s ease;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  color: #fff;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Pricing = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;
