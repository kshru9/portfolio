import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.linkedin.com/in/shrutikatpara/"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <LinkedInIcon />
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://github.com/kshru9"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <GitHubIcon />
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.linkedin.com/in/shrutikatpara/"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <TwitterIcon />
        </a>
        <p>(c) {year} Copyright: Shruti Katpara</p>
      </div>
    </>
  );
}

export { Footer };
