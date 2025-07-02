
import React from 'react';

interface IconProps {
  className?: string;
  onClick?: () => void;
}

const ChevronRightIcon: React.FC<IconProps> = ({ className, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} onClick={onClick}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export default ChevronRightIcon;
