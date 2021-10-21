import styled from 'styled-components';

type ActionBtnStylesProps = {
  styles: {
    width: string;
    height: string;
    background: string;
    border?: string;
    color?: string;
    fontSize?: string;
    margin?: string;
    marginRight?: string;
  };
};

export const SActionBtn = styled.button<ActionBtnStylesProps>`
  cursor: pointer;
  border-radius: 15px;
  width: ${({ styles }) => styles.width};
  height: ${({ styles }) => styles.height};
  background-color: ${({ styles }) => styles.background};
  border: ${({ styles }) => styles.border};
  color: ${({ styles }) => styles.color};
  font-size: ${({ styles }) => styles.fontSize};
  margin: ${({ styles }) => styles.margin};
  font-size: 1em;
  margin-right: ${({ styles }) => styles.marginRight}

  :hover {
    box-shadow: 0 10px 20px -15px grey;
  }
`;
