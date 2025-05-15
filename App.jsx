import React from "react";

export default function App() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #1e3a8a, #7e22ce)', color: 'white', padding: '3rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>ZSM VIRAL</h1>
          <p style={{ fontSize: '1.25rem', color: '#E9D5FF' }}>Zo Snel Mogelijk Viral. Wij maken content die knalt.</p>
          <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem', borderRadius: '1rem', backgroundColor: 'white', color: '#1e3a8a', border: 'none', cursor: 'pointer' }}>
            Boek gratis intake
          </button>
        </header>
      </div>
    </main>
  );
}
