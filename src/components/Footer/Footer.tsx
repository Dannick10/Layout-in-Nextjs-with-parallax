import React from "react";


const Footer = () => {
  return (
    <footer className="flex justify-between text-center flex-col items-center gap-2 p-10 text-white md:flex-row">
      <aside className="flex flex-col justify-around space-y-3">
        <h4 className="text-bold text-xm">MNTN</h4>

        <p className="font-bold text-sm">
          Get out there & discover your next<br></br> slope, mountain &
          destination!
        </p>

        <p className="text-sm text-gray-500">
          Copyright 2023 MNTN, Inc. Terms & Privacy
        </p>
      </aside>
      <aside className="flex flex-col gap-2 text-sm text-center space-y-3">
        <h4 className="text-xm text-yellow-300">More on The Blog</h4>
        <ul className="space-y-2">
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </aside>
      <aside className="flex flex-col gap-2 text-sm text-center">
        <h4 className="text-xm text-yellow-300">More on MNTN</h4>
        <ul className="space-y-2">
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </ul>
      </aside>
    </footer>
  );
};

export default Footer;
