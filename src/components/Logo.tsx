import { memo } from 'react';
import LogoImg from '@/assets/logo/logo.png';

export const Logo = memo(() => {
  return (
    <div
      className="logo-container"
      onClick={() => {
        window.open('www.sample.com', '_blank');
      }}
    >
      <img className="logo" src={LogoImg} alt="Logo" />
    </div>
  );
});
