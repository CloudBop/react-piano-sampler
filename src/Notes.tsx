import React from 'react';
import styled from 'styled-components';
//
const Black = styled.button`
  background: black;
  width: 40px;
  height: 130px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;
const White = styled.button`
  background: white;
  width: 60px;
  height: 200px;
  border: 1px solid black;
  box-shadow: 2px 5px;
  margin: 1px;

  :active {
    background: #eee;
  }
`;
//
type Props = {
  color: string;
  note: string;
  playNote: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
//
const Note: React.FC<Props> = ({ color, note, playNote }) =>
  color === 'white' ? <White value={note} onClick={playNote} /> : <Black value={note} onClick={playNote} />;

export default Note;
