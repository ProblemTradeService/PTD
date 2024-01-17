import React from 'react';
import { Link } from 'react-router-dom';


function ProblemPreview({ to, imageSrc, altText }) {
  return (
    <div className="problems">
      <Link to={to}><img src={imageSrc} alt={altText} /></Link>
    </div>
  );
}

export default ProblemPreview;