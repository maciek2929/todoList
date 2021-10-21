import { SActionBtn } from './ActionBtn.styles';
import { FC } from 'react';

interface ActionBtnProps {
  name: string;
  func?: any;
  type?: any;
  disabled?: boolean;
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
}

export const ActionBtn: FC<ActionBtnProps> = ({ name, func, type, disabled, styles }: ActionBtnProps) => {
  return (
    <SActionBtn name={name} onClick={func} type={type} disabled={disabled} styles={styles}>
      {name}
    </SActionBtn>
  );
};
