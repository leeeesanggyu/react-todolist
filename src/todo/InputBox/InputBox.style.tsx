import styled from "styled-components";

export const Wrapper = styled.div`
  border: 2px solid;
  padding: 3px;
  justify-content: space-between;
  display: flex;
  border-radius: 5px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
`;

export const Enter = styled.button`
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
  
  &:hover{
    background-color: black;
    color: white;
  }
`;