import React from 'react';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div>
      <h2>welcome to react library catalog app thing</h2>
      <h3>check out our <Link to='/books'>catalog</Link></h3>
    </div>
  );
}
