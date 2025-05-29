import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideoPlayer } from './index';

describe('VideoPlayer', () => {
  const mockVideoId = '1234567890123456789';

  test('renders video player with correct attributes', () => {
    const { container } = render(<VideoPlayer id={mockVideoId} />);
    
    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('controls');
    expect(video).toHaveAttribute('autoPlay');
    expect(video).toHaveAttribute('playsInline');
  });

  test('renders with correct CSS classes', () => {
    const { container } = render(<VideoPlayer id={mockVideoId} />);
    
    const playerContainer = container.querySelector('.video-player-container');
    const videoElement = container.querySelector('.video-player');
    
    expect(playerContainer).toBeInTheDocument();
    expect(videoElement).toBeInTheDocument();
  });

  test('generates correct TikTok player URL', () => {
    const { container } = render(<VideoPlayer id={mockVideoId} />);
    
    const source = container.querySelector('source');
    expect(source).toHaveAttribute('src', `https://www.tiktok.com/player/v1/${mockVideoId}`);
    expect(source).toHaveAttribute('type', 'video/mp4');
  });

  test('displays fallback text for unsupported browsers', () => {
    render(<VideoPlayer id={mockVideoId} />);
    
    expect(screen.getByText('Your browser does not support the video tag.')).toBeInTheDocument();
  });
}); 