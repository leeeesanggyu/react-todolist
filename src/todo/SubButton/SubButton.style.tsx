import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid;
  background-color: white;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 5px;
  margin-bottom: 5px;

  &:hover{
    background-color: black;
    color: white;
  }
`;