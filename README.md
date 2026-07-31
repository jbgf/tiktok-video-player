# TikTok Video Player

A clean, responsive React component for playing TikTok videos. Supports adaptive display for both mobile and desktop devices.

## 🚀 Live Demo

See this package in action at **[Tiktok Viewer](https://www.anonymous-viewer.com/)** - a tool for viewing TikTok profiles and videos anonymously using our video player component.

## Features

- 📱 **Responsive Design**: 9:16 aspect ratio on mobile, 16:9 on desktop
- 🎨 **Modern Styling**: Rounded corners, elegant user interface
- 📦 **Lightweight**: No external dependencies, pure CSS implementation
- 🔧 **TypeScript Support**: Complete type definitions
- ⚡ **Easy to Use**: Simple API, just pass the TikTok video ID

## Installation

```bash
# Using npm
npm install tiktok-video-player

# Using yarn
yarn add tiktok-video-player

# Using pnpm
pnpm add tiktok-video-player
```

## Usage

### Basic Usage

```tsx
import React from 'react';
import { VideoPlayer } from 'tiktok-video-player';

function App() {
  return (
    <div>
      <h1>My TikTok Video</h1>
      <VideoPlayer id="your-tiktok-video-id" />
    </div>
  );
}

export default App;
```

### Getting TikTok Video ID

TikTok video ID can usually be extracted from TikTok video links:

```
https://www.tiktok.com/@username/video/1234567890123456789
```

Here, `1234567890123456789` is the video ID.

### TypeScript Support

```tsx
import React from 'react';
import { VideoPlayer, VideoPlayerProps } from 'tiktok-video-player';

const MyComponent: React.FC = () => {
  const videoId: string = "1234567890123456789";
  
  return <VideoPlayer id={videoId} />;
};
```

## API Documentation

### VideoPlayer Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✅ | Unique identifier for the TikTok video |

## Style Customization

The component uses standard CSS class names, you can customize styles through CSS:

```css
/* Custom container styles */
.video-player-container {
  border: 2px solid #ff0050;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Custom video player styles */
.video-player {
  border-radius: 16px;
}
```

## Browser Compatibility

- Chrome ≥ 51
- Firefox ≥ 54
- Safari ≥ 10
- Edge ≥ 79

## Development

### Local Development

```bash
# Clone repository
git clone https://github.com/jbgf/tiktok-video-player.git
cd tiktok-video-player

# Install dependencies
pnpm install

# Development mode
pnpm run dev

# Build
pnpm run build

# Run tests
pnpm test

# Code linting
pnpm run lint
```

### Project Structure

```
tiktok-video-player/
├── src/
│   ├── index.tsx          # Main component
│   └── video-player.css   # Style file
├── dist/                  # Build output
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

## Changelog

### v1.0.0

- 🎉 Initial release
- ✨ Responsive design support
- 🎨 Modern UI design
- 📱 Mobile optimization

## Contributing

Issues and Pull Requests are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you find this project useful, please give it a ⭐️!

For questions or suggestions, please create an [Issue](https://github.com/jbgf/tiktok-video-player/issues). 
