import React from 'react';

type Props = {};

const Footer: React.FC<Props> = () => {
  const links = [
    { href: "https://code.visualstudio.com/", text: "Visual Studio Code", aria: "Visual Studio Code (opens in a new tab)" },
    { href: "https://nextjs.org/", text: "Next.js", aria: "Next.js (opens in a new tab)" },
    { href: "https://tailwindcss.com/", text: "Tailwind CSS", aria: "Tailwind CSS (opens in a new tab)" },
];

  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      
    </footer>
  );
};

export default Footer;
