# Kinly CarePro Website

Official website for **Kinly CarePro** - Australia's complete NDIS management platform designed for care providers.

## 🏥 About

Kinly CarePro is an enterprise-grade NDIS care management platform that automates compliance, streamlines operations, and safeguards revenue for Australian care providers. The platform features:

- **Guardian™ Compliance System** - Automated compliance checking and audit support
- **Mobile Apps** - iOS & Android apps for caregivers with GPS smart-fencing and offline mode
- **Smart Rostering** - Intelligent scheduling with fatigue monitoring and qualification tracking
- **One-Click PRODA Billing** - Automated NDIS bulk upload generation
- **Real-time Operations** - Live tracking and monitoring of staff and shifts

## 🚀 Technology Stack

- **React 19** - Modern UI framework
- **Vite** - Next-generation build tool
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Helmet Async** - SEO meta tags management

## 📋 Prerequisites

- **Node.js** 18+ (recommended: latest LTS version)
- **npm** 9+ or equivalent package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yashshah-dev/kinlycarepro-website.git
cd kinlycarepro-website
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
kinlycarepro-website/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, and other media
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components (routes)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies and scripts
```

## 🌐 Pages & Routes

- **/** - Home page with product overview
- **/features** - Detailed feature breakdown
- **/compliance** - NDIS compliance information
- **/pricing** - Pricing plans and packages
- **/resources** - Documentation and resources
- **/about** - Company information
- **/careers** - Job opportunities
- **/contact** - Contact information
- **/partners** - Partnership information

## 🎨 Styling

The project uses **Tailwind CSS 4** with PostCSS for styling. Custom theme configuration can be found in `tailwind.config.js`.

## 🔍 SEO

The website includes comprehensive SEO optimization:
- React Helmet Async for dynamic meta tags
- Structured data for rich snippets
- Optimized for Australian NDIS-related keywords
- Mobile-responsive design

For detailed SEO guidelines, see:
- `SEO_IMPLEMENTATION_GUIDE.md`
- `SEO_QUICK_REFERENCE.md`

## 📚 Documentation

Additional documentation available:
- **AI_TO_COMPLIANCE_REBRAND.md** - Messaging and terminology guidelines
- **LEGAL_COMPLIANCE_CHANGES.md** - Legal compliance updates
- **PRODUCT_FEATURE_GUIDE.md** - Comprehensive feature documentation
- **SEO_IMPLEMENTATION_GUIDE.md** - SEO best practices
- **SEO_QUICK_REFERENCE.md** - Quick SEO reference

## 🚢 Deployment

The website is configured for deployment on static hosting platforms like:
- GitHub Pages
- Vercel
- Netlify
- AWS S3/CloudFront

The project includes a 404.html redirect handling for SPA routing on static hosts.

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific configuration (if needed):

```env
VITE_API_URL=your_api_url_here
```

### Vite Configuration

Vite settings can be customized in `vite.config.js`.

### Tailwind Configuration

Customize the design system in `tailwind.config.js`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This is a proprietary project for Kinly CarePro. All rights reserved.

## 📞 Support

For questions or support, please visit [kinlycarepro.com.au](https://kinlycarepro.com.au) or contact the development team.

---

Built with ❤️ for Australian NDIS care providers
