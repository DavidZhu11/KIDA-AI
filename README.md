# KIDA AI - AI-Powered Cold Email Agency

Transform your outbound sales strategy with the power of artificial intelligence. KIDA AI is a high-performance landing page showcasing advanced AI cold email agency solutions for high-ticket B2B service businesses.

## Features

- Modern, responsive React + TypeScript application
- Premium dark theme with gold accents
- Advanced animations and micro-interactions
- Particle background effects
- Smooth scrolling and navigation
- Optimized for performance with Vite

## Tech Stack

- **React 19.2** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite 6.2** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DavidZhu11/KIDA-AI.git
   cd KIDA-AI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file (optional, for Gemini API integration):
   ```bash
   cp .env.example .env.local
   ```
   Then add your Gemini API key if needed.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
kida-ai/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Footer.tsx      # Footer section
│   └── ...             # Other sections
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite configuration
```

## Customization

The application uses Tailwind CSS with custom theme configuration in `index.html`. You can modify:

- Colors in the Tailwind config (primary gold color, backgrounds, etc.)
- Typography (Inter and Playfair Display fonts)
- Animations and keyframes
- Component styles

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Build and deploy the `dist` folder

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contact

For inquiries about KIDA AI services:
- Website: [KIDA AI](https://kida-ai.vercel.app)
- Book a Call: [Schedule Discovery Call](https://cal.com/david-zhu/discovery-call)
