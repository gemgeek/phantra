"use client";

import { useState } from "react";
import Link from "next/link";

export default function Studio() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult(null);

    // MOCK AI: 3 second delay
    setTimeout(() => {
      setResult("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="dashboard-layout">
      
      {/* --- SIDEBAR MENU --- */}
      <nav className="sidebar">
        <div className="sidebar-logo">PHANTRA</div>
        
        {/* Menu Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          <Link href="/" className="menu-item">
            {/* Home Icon */}
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            <span>Home</span>
          </Link>

          <div className="menu-item active">
            {/* Sparkles Icon */}
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 3.214L13 21l-2.286-6.857L5 12l5.714-3.214z"/></svg>
            <span>Studio</span>
          </div>

          <div className="menu-item" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
            {/* Lock Icon */}
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            <span>Memory Vault (Locked)</span>
          </div>

        </div>

        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
           <div className="menu-item">
             {/* User Icon */}
             <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>MG</div>
             <span>Matilda G.</span>
           </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="main-content">
        <div className="studio-container">
          
          <div>
            <h1 className="header-title">The Studio</h1>
            <p className="header-subtitle">Turn your thoughts into reality. Describe what you cannot see.</p>
          </div>

          {/* INPUT */}
          <textarea 
            className="thought-input" 
            placeholder="Describe a memory, a dream, or a feeling..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          {/* BUTTON */}
          <button 
            className="btn-generate" 
            onClick={handleGenerate}
            disabled={loading || !prompt}
          >
            {loading ? "Initializing..." : "Generate Visual ✨"}
          </button>

          {/* CANVAS */}
          <div className="canvas-area">
            {loading ? (
              <div className="loader"></div>
            ) : result ? (
              <img src={result} alt="Generated thought" />
            ) : (
              <div style={{ color: '#64748b', textAlign: 'center' }}>
                <p>No visualization yet.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Your mind's eye output will appear here.</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}