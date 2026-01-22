# Caludeilicious - Remotion Video Project

A video creation project built with [Remotion](https://www.remotion.dev/).

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Start the Remotion Studio to preview your video:

```bash
npm start
```

This will open the Remotion Studio in your browser where you can see your video composition in real-time.

### Rendering

To render the video to an MP4 file:

```bash
npm run build
```

The rendered video will be saved to `out/video.mp4`.

## Project Structure

```
caludeilicious/
├── src/
│   ├── index.tsx        # Root component that registers compositions
│   ├── Composition.tsx  # Main video composition
│   └── HelloWorld.tsx   # Animated hello world component
├── remotion.config.ts   # Remotion configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## Customization

### Changing the Video Content

Edit `src/HelloWorld.tsx` to customize the text, colors, and animations.

### Adjusting Video Settings

Modify the composition settings in `src/index.tsx`:
- `durationInFrames`: Length of the video (150 frames = 5 seconds at 30fps)
- `fps`: Frames per second
- `width` and `height`: Video dimensions

## Learn More

- [Remotion Documentation](https://www.remotion.dev/docs)
- [Remotion API Reference](https://www.remotion.dev/docs/api)
