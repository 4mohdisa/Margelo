import Image from "next/image";
import React from "react";

type Props = {};

const Footer: React.FC = () => {
  return (
    <footer className="min-h-full flex flex-wrap gap-8 items-center justify-center bg-black text-white px-4 py-20">
      <Image src="/assets/logo.svg" height={18} width={18} />
      <a href="/imprint">Imprint</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="https://github.com/margelo" target="_blank">
        GitHub
      </a>
      <a href="https://twitter.com/margelo_io" target="_blank">
        Twitter
      </a>
    </footer>
  );
};

export default Footer;
