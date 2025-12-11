"use client";

import { useState } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Studio() {
  const { user, isLoaded } = useUser();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [genieMessage, setGenieMessage] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult(null);
    setGenieMessage("INITIALIZING CORTEX SCAN...");

    // Simulated "Scanning" Steps
    setTimeout(() => setGenieMessage("TRANSLATING NEURAL PATTERNS..."), 1200);
    setTimeout(() => setGenieMessage("RENDERING VISUAL GEOMETRY..."), 2400);

    setTimeout(() => {
      setResult("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop");
      setLoading(false);
      setGenieMessage(""); 
    }, 4000);
  };

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <nav className="sidebar">
        <div className="sidebar-logo">PHANTRA</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/" className="menu-item">
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            <span>Home</span>
          </Link>
          <div className="menu-item active">
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            <span>Studio</span>
          </div>
          <div className="menu-item" style={{opacity:0.5}}>
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            <span>Vault (Locked)</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
           <UserButton afterSignOutUrl="/" />
           <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
             {isLoaded && user ? user.firstName : "Visionary"}
           </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <div>
          <h1 className="header-title">
            Hello, {isLoaded && user ? user.firstName : "Visionary"}.
          </h1>
          <p className="header-subtitle">Ready to visualize the impossible today?</p>
        </div>

        <textarea 
          className="thought-input" 
          placeholder="Describe a memory, a dream, or a feeling..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button 
          className="btn-generate" 
          onClick={handleGenerate}
          disabled={loading || !prompt}
        >
          {loading ? "SYSTEM PROCESSING..." : "SUMMON THE GENIE ✨"}
        </button>

        {/* THE HOLOGRAPHIC SCANNER */}
        <div className="canvas-area">
          {loading ? (
            <div style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
              
              {/* THIS IS THE HOLOGRAPHIC BRAIN IMAGE */}
              {/* I am using a placeholder. You should replace this src with a cool GIF later! */}
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5aW55Y3Z5aW55Y3Z5aW55Y3Z5aW55Y3Z5aW55Y3Z5aW55Y3Z5/l3vR16pBEAZ18l0He/giphy.gif" 
                alt="Scanning Brain"
                style={{ width: '200px', opacity: 0.8, filter: 'hue-rotate(90deg)' }} 
              />
              
              {/* The Laser Scan Effect */}
              <div className="scanner-overlay"></div>
              
              <p style={{ color: '#2DD4BF', marginTop: '20px', letterSpacing: '2px', fontSize: '0.9rem' }}>
                {genieMessage}
              </p>
            </div>
          ) : result ? (
            <img src={result} alt="Generated thought" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ color: '#475569', textAlign: 'center' }}>
              <p style={{ fontSize: '4rem', opacity: 0.2 }}>🧠</p>
              <p>The canvas is waiting for your mind.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}