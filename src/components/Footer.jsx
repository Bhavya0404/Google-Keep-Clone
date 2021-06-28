import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>copyright © {year}</p>
    </footer>
  );
}

export default Footer;
