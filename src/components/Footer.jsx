import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <p>(c) {year} Copyright: Shruti Katpara</p>
      </div>
    </>
  );
}

export { Footer };
