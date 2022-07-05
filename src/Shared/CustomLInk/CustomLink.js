import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div className="mx-3 mt-2">
      <Link
        className="fw-bold"
        style={{
          color: match ? "#DDA0DD" : "white",
          textDecoration: match ? "underline" : "none",
         
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
    );
};

export default CustomLink;