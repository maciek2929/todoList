import styled from 'styled-components';

export const PlusBtn = styled.svg`
  cursor: pointer;
  align-self: self-end;
`;

type AddBtnProps = {
  handleClick: () => void;
};

export const AddBtn = ({ handleClick }: AddBtnProps) => {
  return (
    <PlusBtn onClick={handleClick} width="80" height="80" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_6:75)">
        <circle cx="56" cy="52" r="52" fill="white" />
      </g>
      <line x1="56.5" y1="15" x2="56.5" y2="93" stroke="#FF9900" strokeWidth="5" />
      <line x1="95" y1="52.5" x2="17" y2="52.5" stroke="#FF9900" strokeWidth="5" />
      <defs>
        <filter id="filter0_d_6:75" x="0" y="0" width="112" height="112" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6:75" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6:75" result="shape" />
        </filter>
      </defs>
    </PlusBtn>
  );
};
