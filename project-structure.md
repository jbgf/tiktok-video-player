# Project Structure

## Directory Overview

```
tiktok-video-player/
├── src/                          # Source code directory
│   ├── index.tsx                 # Main component file - VideoPlayer component
│   ├── video-player.css          # Component styles - responsive CSS styles
│   ├── index.test.tsx            # Component test file - Jest unit tests
│   └── setupTests.ts             # Test environment configuration
├── dist/                         # Build output directory (auto-generated)
│   ├── index.js                  # CommonJS format build file
│   ├── index.esm.js              # ES Module format build file
│   ├── index.d.ts                # TypeScript type definition file
│   └── video-player.css          # Bundled CSS file
├── node_modules/                 # Dependencies directory (auto-generated)
├── .eslintrc.js                  # ESLint code linting configuration
├── .gitignore                    # Git ignore file configuration
├── jest.config.js                # Jest testing framework configuration
├── package.json                  # Project configuration and dependency management
├── project-structure.md          # Project structure documentation (this file)
├── README.md                     # Project documentation
├── rollup.config.js              # Rollup bundling tool configuration
└── tsconfig.json                 # TypeScript compilation configuration
```

## File Descriptions

### Core Source Code

#### `src/index.tsx`
- **Purpose**: Main component file containing the VideoPlayer React component
- **Features**: 
  - Provides TikTok video player component
  - Responsive design support
  - TypeScript type definitions
  - Component props interface definition

#### `src/video-player.css`
- **Purpose**: Component styles file
- **Features**:
  - Responsive design styles (mobile 9:16, desktop 16:9)
  - Video player styling
  - Border radius and other visual effects

#### `src/index.test.tsx`
- **Purpose**: Component unit tests
- **Test Coverage**:
  - Component rendering tests
  - Props passing tests
  - CSS class name tests
  - URL generation tests

#### `src/setupTests.ts`
- **Purpose**: Jest test environment configuration
- **Features**: Configure Testing Library and Jest DOM matchers

### Configuration Files

#### `package.json`
- **Purpose**: Project configuration and dependency management
- **Contains**:
  - Project metadata (name, version, description)
  - NPM script commands
  - Dependency version management
  - Publishing configuration

#### `tsconfig.json`
- **Purpose**: TypeScript compilation configuration
- **Configuration**:
  - Compilation target and module format
  - Type checking rules
  - Output directory configuration
  - Include/exclude file rules

#### `rollup.config.js`
- **Purpose**: Bundling tool configuration
- **Features**:
  - Supports CommonJS and ES Module dual format output
  - TypeScript compilation
  - CSS processing and extraction
  - External dependency handling

#### `.eslintrc.js`
- **Purpose**: Code quality checking configuration
- **Rules**:
  - TypeScript code standards
  - React component standards
  - Code style consistency

#### `jest.config.js`
- **Purpose**: Testing framework configuration
- **Features**:
  - TypeScript support
  - CSS module processing
  - Test coverage configuration
  - DOM environment simulation

### Documentation Files

#### `README.md`
- **Purpose**: Main project documentation
- **Content**:
  - Project introduction and features
  - Installation and usage instructions
  - API documentation
  - Development guide

#### `project-structure.md`
- **Purpose**: Project structure documentation (this file)
- **Content**: Detailed file and directory descriptions

#### `.gitignore`
- **Purpose**: Git version control ignore configuration
- **Excludes**:
  - Dependencies directory
  - Build artifacts
  - Temporary files and cache

## Development Workflow

### 1. Local Development
```bash
pnpm run dev    # Watch mode build
```

### 2. Code Linting
```bash
pnpm run lint   # Code style checking
pnpm run lint:fix  # Auto-fix code style issues
```

### 3. Testing
```bash
pnpm test       # Run unit tests
```

### 4. Building
```bash
pnpm run build  # Production build
```

### 5. Publishing
```bash
npm publish     # Publish to NPM
```

## Build Artifacts

After building, the `dist/` directory will contain:

- `index.js` - CommonJS format for Node.js environments
- `index.esm.js` - ES Module format for modern bundling tools
- `index.d.ts` - TypeScript type definition file
- `video-player.css` - Extracted CSS styles file

## Notes

1. **Dependency Management**: Uses `pnpm` as the package manager
2. **Code Style**: Follows ESLint configuration standards
3. **Test Coverage**: Maintains good test coverage
4. **Documentation Updates**: Update related documentation promptly after code changes
5. **Version Management**: Follows semantic versioning (SemVer) 