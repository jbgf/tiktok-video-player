import React, { useMemo } from "react";
import "./video-player.css";

export interface VideoPlayerProps {
  /** TikTok video ID */
  id: string;
}

/**
 * TikTok Video Player Component
 * @param props - Component props containing the TikTok video ID
 * @returns JSX element for rendering TikTok video player
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({ id }) => {
  const url = useMemo(() => `https://www.tiktok.com/player/v1/${id}`, [id]);

  return (
    <div className="video-player-container">
      <video
        controls
        className="video-player"
        autoPlay
        playsInline
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;