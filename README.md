# SeaChat Website

A complete, production-ready website for the SeaChat customer support platform. This multilingual website showcases SeaChat's features, pricing, and solutions for various industries.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Internationalization](#internationalization)
- [Adding New Languages](#adding-new-languages)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Multilingual Support**: 10 languages with automatic browser language detection
- **RTL Support**: Right-to-left layout for Arabic language
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Comprehensive Pages**: Home, Features, Integrations, Solutions, Pricing, and Blog
- **Interactive UI**: Dynamic components with animations and interactive elements

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/seachat-website.git
   cd seachat-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

### Making Changes

1. The main entry point is `src/main.tsx`
2. Page components are in `src/pages/`
3. Reusable components are in `src/components/`
4. Styles are managed with Tailwind CSS

## Project Structure

```
seachat-website/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── i18n/           # Internationalization files
│   │   ├── locales/    # Translation files for each language
│   │   └── index.ts    # i18n configuration
│   ├── pages/          # Page components
│   │   ├── blog/       # Blog article pages
│   │   ├── features/   # Feature pages
│   │   ├── integrations/ # Integration pages
│   │   └── solutions/  # Solution pages
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Internationalization

The website uses `i18next` and `react-i18next` for internationalization:

- Translation files are in `src/i18n/locales/[language]/translation.json`
- Language detection is automatic based on browser settings
- Users can manually switch languages using the language switcher in the header
- The website supports right-to-left (RTL) layout for Arabic language

### Current Supported Languages

- English (en)
- Spanish (es)
- Chinese Traditional (zh-TW)
- Japanese (ja)
- Korean (ko)
- Portuguese (pt)
- French (fr)
- Polish (pl)
- Russian (ru)
- Arabic (ar)

## Adding New Languages

To add a new language to the website:

1. Create a new translation file in `src/i18n/locales/[language-code]/translation.json`
   - Use the ISO language code as the folder name (e.g., `de` for German)
   - Copy the structure from an existing translation file like `en/translation.json`

2. Translate all the strings in the new translation file

3. Add the new language to the language list in the following files:
   - `src/i18n/index.ts`: Import and add the new translation
   ```typescript
   import deTranslation from './locales/de/translation.json';
   
   // Add to resources object
   resources: {
     // existing languages...
     de: {
       translation: deTranslation
     }
   }
   ```

   - `src/components/LanguageSwitcher.tsx`: Add to the languages array
   ```typescript
   const languages = [
     // existing languages...
     { code: 'de', name: 'Deutsch' },
   ];
   ```

   - `src/components/Header.tsx`: Add to the languages array
   ```typescript
   const languages = [
     // existing languages...
     { code: 'de', name: 'Deutsch' },
   ];
   ```

4. Test the new language by selecting it in the language switcher

### Translation Tips

- Keep translations consistent with the original meaning
- Pay attention to placeholders like `{{variable}}` which should remain unchanged
- Consider cultural differences when translating
- Test the UI after translation to ensure text fits properly in the layout

## Deployment

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist/` directory

### Deployment Options

#### Netlify

1. Connect your GitHub repository to Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `dist`

#### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and configure the build settings

#### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` directory to your web server

## Technologies Used

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **i18next**: Internationalization framework
- **Lucide React**: Icon library