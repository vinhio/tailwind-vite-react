# DanceFITVN Mobile App

A React-based mobile application for DanceFITVN, built with modern web technologies and packaged as an iOS app using Capacitor.

## Overview

DanceFITVN is a mobile application built with React, TypeScript, and TailwindCSS, packaged for iOS using Capacitor. The app provides a modern, responsive user interface with native iOS capabilities.

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.7
- **Build Tool**: Vite 7.1
- **Styling**: TailwindCSS 4.0
- **Mobile Platform**: Capacitor 7.4 (iOS)
- **Package Manager**: npm
- **Linting**: ESLint 9

## Requirements

- Node.js (version compatible with React 19)
- npm
- Xcode (for iOS development)
- iOS Simulator or physical iOS device
- macOS (for iOS builds)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tailwind-vite-react
   ```

2. **Install dependencies**
   ```bash
   make install
   # or
   npm install
   ```

3. **Development setup**
   ```bash
   make dev
   # or
   npm run dev
   ```

## Scripts and Commands

### Development
```bash
# Start development server
npm run dev
make dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### iOS Development
```bash
# Initial iOS setup (run once)
make ios.initial

# Build and sync iOS app
make ios

# Manual Capacitor commands
npx cap sync
npx cap open ios
```

## iOS Build Process

1. **Initial Setup** (first time only):
   ```bash
   make ios.initial
   ```
   This will:
   - Build the web app
   - Install Capacitor dependencies
   - Initialize Capacitor
   - Add iOS platform
   - Sync files

2. **Regular Build**:
   ```bash
   make ios
   ```
   This will:
   - Build the web app (`npm run build`)
   - Sync changes to iOS (`npx cap sync`)

3. **Open in Xcode**:
   ```bash
   npx cap open ios
   ```

## Project Structure

```
├── src/                    # Source code
│   ├── main.tsx           # Application entry point
│   ├── App.tsx            # Main application component
│   ├── style.css          # Global styles
│   ├── components/        # Reusable components
│   │   ├── Fragment.tsx
│   │   └── index.ts
│   └── screens/           # Application screens
│       ├── Home.tsx
│       └── index.ts
├── ios/                   # iOS native project
│   ├── App/              # iOS app configuration
│   └── capacitor-cordova-ios-plugins/
├── dist/                 # Build output (web)
├── public/               # Static assets
├── capacitor.config.ts   # Capacitor configuration
├── vite.config.ts        # Vite build configuration
├── Makefile             # Build automation
└── package.json         # Dependencies and scripts
```

## Configuration

### App Configuration
- **App ID**: `com.jivecode.dancefitvn`
- **App Name**: DanceFITVN
- **Web Directory**: `dist` (Vite build output)

### Vite Configuration
- React plugin enabled
- TailwindCSS plugin integrated
- Path alias: `@` → `./src`
- Build optimization configured

## Environment Variables

<!-- TODO: Add environment variables section if any are used -->
No environment variables are currently configured for this project.

## Testing

<!-- TODO: Add testing framework and commands -->
No testing framework is currently configured for this project.

## Development Notes

- The project uses ES modules (`"type": "module"`)
- Path aliases are configured: `@` points to `./src`
- Hot Module Replacement (HMR) is enabled in development
- ESLint is configured for code quality

## Troubleshooting

### iOS Build Issues
- Ensure Xcode is installed and up to date
- Run `npx cap doctor` to check Capacitor setup
- Clean and rebuild: `npx cap clean ios && make ios`

### Development Issues
- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Clear Vite cache: `rm -rf .vite`

## License

<!-- TODO: Add license information -->
License information not specified.

## Contributing

<!-- TODO: Add contributing guidelines -->
Contributing guidelines to be added.

---

*Last updated: 2025-09-29*
