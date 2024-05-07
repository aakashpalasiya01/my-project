import React, { useRef, useEffect, useState } from 'react';
// import sjd from "@/assets/audio/jeffbob.mp3"
// import sjd from "@/assets/audio/jeffbob.mp3"s
const AudioPlayer = () => {
    const audioRef = useRef<any>(null);
    const [audioError, setAudioError] = useState('');

    const onLoadedMetadata = () => {
        console.log('Audio metadata loaded.');
    };

    const onTimeUpdate = () => {
        console.log('Audio time update:', audioRef.current.currentTime);
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error: any) => {
                console.error('Error playing audio:', error);
                setAudioError('Playback was prevented. Please click to play.');
            });
        }
    };

    useEffect(() => {
        // Listen for errors like incorrect path or CORS issues
        const handleAudioError = () => {
            setAudioError('Error loading audio. Please check the console for more details.');
        };

        const audioEl = audioRef.current;
        if (audioEl) {
            audioEl.addEventListener('error', handleAudioError);
        }

        return () => {
            if (audioEl) {
                audioEl.removeEventListener('error', handleAudioError);
            }
        };
    }, []);

    return (
        <div>
            <audio
                ref={audioRef}
                src={""}
                onLoadedMetadata={onLoadedMetadata}
                onTimeUpdate={onTimeUpdate}
            />
            {audioError && <p>Error: {audioError}</p>}
            <button onClick={playAudio}>Play Audio</button>
        </div>
    );
};

export default AudioPlayer;
