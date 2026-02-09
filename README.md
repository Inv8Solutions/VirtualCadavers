# VirCads — Virtual Forensic Training Platform

A comprehensive educational web application for forensics and criminal justice students to practice postmortem examination techniques in a safe, interactive environment.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Runtime:** Node.js

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/virtualcadavers.git
cd virtualcadavers
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
virtualcadavers/
├── app/
│   ├── globals.css       # Global styles & Tailwind imports
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page (one-pager)
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start development server             |
| `npm run build` | Create optimized production build     |
| `npm start`     | Serve the production build            |
| `npm run lint`  | Run ESLint for code quality checks    |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is for educational purposes.
