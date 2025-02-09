"use client";
import { useState, useEffect, useRef } from 'react';

export default function ProposerPage() {
  const [noClicks, setNoClicks] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ left: 0, top: 0 });
  const [audioInitiated, setAudioInitiated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/Pookie.mp3");
    audioRef.current.addEventListener('ended', () => {
      setAudioInitiated(false); // Reset state when audio finishes
      localStorage.removeItem('audioPlaying');
    });

    const img = new Image();
    img.src = "/after.gif";
    img.onload = () => {
      setImageLoaded(true);
    };

    if (localStorage.getItem('audioPlaying') === 'true') {
      audioRef.current.play().catch(error => {
        console.error("Failed to play audio:", error);
      });
      setAudioInitiated(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', () => {});
      }
    };
  }, []);

  // Set initial position for moving No button when triggered
  useEffect(() => {
    if (typeof window !== "undefined" && noClicks > 0) {
      const newLeft = Math.random() * (window.innerWidth - 100);
      const newTop = Math.random() * (window.innerHeight - 100);
      setNoPosition({ left: newLeft, top: newTop });
    }
  }, [noClicks]);

  const handleNo = () => {
    if (!accepted) {
      if (!audioInitiated && audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error("Failed to play audio:", error);
        });
        setAudioInitiated(true);
        localStorage.setItem('audioPlaying', 'true');
      }
      setNoClicks((prev) => prev + 1);
    }
  };

  const handleYes = () => {
    if (!accepted) {
      if (!audioInitiated && audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error("Failed to play audio:", error);
        });
        setAudioInitiated(true);
        localStorage.setItem('audioPlaying', 'true');
      }
      setAccepted(true);
    }
  };

  const message = accepted
    ? "I knew it you will be my pookie ❤️"
    : noClicks > 0
    ? "Plz be my pookie 😭"
    : "Will you be my Pookiee? 🥹";

  const imageSrc = accepted ? "/after.gif" : "/Plz.gif";

  const yesStyle = {
    transform: `scale(${1 + noClicks * 0.1})`,
    transition: "transform 0.3s",
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  // Inline style for No button when it is not moving
  const inlineNoStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  // Style for No button when moving (after first click)
  const movingNoStyle = {
    position: "absolute",
    left: `${noPosition.left}px`,
    top: `${noPosition.top}px`,
    transition: "all 0.3s",
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        textAlign: "center",
        color: "#000"
      }}
    >
      <h1 style={{ position: "absolute", top: "20px", fontSize: "24px" }}>
        {message}
      </h1>
      <img
        src={imageSrc}
        alt="Animation"
        style={{ maxWidth: "100%", maxHeight: "60vh" }}
      />
      {!accepted && (
        <>
          {noClicks === 0 ? (
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <button onClick={handleYes} style={yesStyle}>
                Yes
              </button>
              <button onClick={handleNo} style={inlineNoStyle}>
                No
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginTop: "20px" }}>
                <button onClick={handleYes} style={yesStyle}>
                  Yes
                </button>
              </div>
              <button onClick={handleNo} style={movingNoStyle}>
                No
              </button>
            </>
          )}
        </>
      )}
      {accepted && imageLoaded && (
        <button onClick={() => {
          localStorage.setItem('audioPlaying', 'true');
          window.location.reload();
        }}>
          <img src="/reload.png" alt="Reload" style={{ width: "50px", height: "50px" }} />
        </button>
      )}
    </div>
  );
}