import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function SocialIcons() {
  return (
    <div className='mb-[120px]'>
      <div>
        <ul className="social-icons flex items-center">
          <li>
            <a href="https://www.instagram.com/" className="group relative block">
              <span className="block rounded-full w-16 h-16 transition-transform"></span>
              <i className="fa fa-instagram text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></i>
            </a>
          </li>
          <li>
            <a href="https://www.x.com/" className="group relative block">
              <span className="block rounded-full w-16 h-16 transition-transform"></span>
              <i className="fa fa-twitter text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" className="group relative block">
              <span className="block rounded-full w-16 h-16 transition-transform"></span>
              <i className="
              fa fa-linkedin 
              text-white 
              text-2xl 
              absolute 
              top-1/2 
              left-1/2 
              transform 
              -translate-x-1/2 
              -translate-y-1/2 
              transition-transform 
              group-hover:scale-150"></i>
            </a>
          </li>
          <li>
            <a href="https://www.codepen.com/" className="group relative block">
              <span className="block rounded-full w-16 h-16 transition-transform"></span>
              <i className="fa fa-codepen text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
