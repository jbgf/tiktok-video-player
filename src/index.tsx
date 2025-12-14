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
      <iframe
         src={url}
         className="video-player"
         allowFullScreen
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default VideoPlayer;