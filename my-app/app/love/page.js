"use client"; // Required for Next.js App Router
import { useState, useRef } from "react";

export default function BrokenHeartInput() {
  const [inputValue, setInputValue] = useState("");
  const audioRef = useRef(null); // Reference to the audio element

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
    // Play the sad song when user starts typing
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio play error:", error));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-xl font-bold mb-2">Whom do you love, Shihab? :</h2>
      
      <input
        type="text"
        placeholder="Type here..."
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 rounded mb-3 bg-gray-800 text-white placeholder-gray-400"
      />

      {inputValue && (
        <p className="text-red-500 text-lg">
          💔 Give up on {inputValue}. Shihab, {inputValue} doesn’t love you 😢💔
        </p>
      )}

      {/* Hidden audio element to play sad music */}
      <audio ref={audioRef} loop>
        <source src="/sad-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
