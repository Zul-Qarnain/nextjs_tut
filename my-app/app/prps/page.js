"use client";
import { useState, useRef, useEffect } from 'react';

export default function ProposerPage() {
  const [accepted, setAccepted] = useState(false);
  const [proposalText, setProposalText] = useState("Will you be my Pookiee?");
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Auto play prevented:", error);
        });
      }
    }
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Music play error:", e));
    }
  };

  const handleYes = () => {
    setAccepted(true);
    playMusic();
  };

  const handleNo = () => {
    setProposalText("Plz be my pookie");
    setYesScale(prev => prev + 0.1);
    setNoScale(prev => Math.max(prev - 0.1, 0.5));
    playMusic();
  };

  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        marginBottom: '20px', 
        fontSize: '2rem', 
        textAlign: 'center', 
        color: 'black'
      }}>
        {accepted ? "I knew it you will be my pookie ❤️" : proposalText}
      </h1>
      <div style={{ marginBottom: '20px' }}>
        <img 
          src={accepted ? "/after.gif" : "/Plz.gif"} 
          alt="Proposer Animation" 
          style={{ width: '300px', height: '300px', display: 'block', margin: '0 auto' }} 
        />
      </div>
      {!accepted && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button
            onClick={handleYes}
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              cursor: 'pointer',
              transform: `scale(${yesScale})`,
              transition: 'transform 0.3s'
            }}
          >
            Yes
          </button>
          <button
            onClick={handleNo}
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '10px 20px',
              cursor: 'pointer',
              transform: `scale(${noScale})`,
              transition: 'transform 0.3s'
            }}
          >
            NO
          </button>
        </div>
      )}
      <audio ref={audioRef} src="/Pookie.mp3" autoPlay loop style={{ display: 'none' }} />
    </div>
  );
}