import React from 'react';
import { render } from '@testing-library/react';
import { VideoPlayer } from './index';

describe('VideoPlayer', () => {
  const mockVideoId = '1234567890123456789';

 

  test('renders with correct CSS classes', () => {
    const { container } = render(<VideoPlayer id={mockVideoId} />);
    
    const playerContainer = container.querySelector('.video-player-container');
    const videoElement = container.querySelector('.video-player');
    
    expect(playerContainer).toBeInTheDocument();
    expect(videoElement).toBeInTheDocument();
  });

 


}); 