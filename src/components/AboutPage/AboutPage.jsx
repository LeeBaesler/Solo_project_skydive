import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          <h2>Lee Baesler</h2>
          <h2>Email: lee.baesler@gmail.com</h2>
          <h2>Phone Number: 701.391.6824</h2>
          <h2>linkedin.com/lee-baesler</h2>
          <h1>Skydive. Have Fun. Be Kind</h1>
          </p>
      </div>
    </div>
  );
}

export default AboutPage;
