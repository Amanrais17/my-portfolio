"use client";

const Footer = () => {
  return (
    <footer className="flex items-center text-center justify-center border-t border-zinc-200 p-4 dark:border-zinc-700">
      &copy; {new Date().getFullYear()} My Portfolio
    </footer>
  );
};

export default Footer;
