import React from "react";

function Footer() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ paddingTop: 50, paddingBottom: 50, fontSize: 14 }}>
      <div>
        Developed by <a href="https://www.ahmetcanaydemir.com">Ahmet Can Aydemir</a>
      </div>
      <div className="mt-2">
        Based on <a href="https://github.com/risq">risq</a>'s{" "}
        <a href="https://github.com/risq/jquery-advanced-news-ticker">JQuery Advanced News Ticker</a>
      </div>
      <div className=" mt-3 d-flex justify-content-between" style={{ fontSize: 20, width: 120 }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-secondary"
          href="https://www.github.com/ahmetcanaydemir">
          <i class="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-secondary"
          href="https://www.twitter.com/ahmetcnaydemir">
          <i class="fab fa-twitter"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-secondary"
          href="https://www.linkedin.com/in/ahmetcanaydemir">
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-secondary"
          href="mailto:root@ahmetcanaydemir.com">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
