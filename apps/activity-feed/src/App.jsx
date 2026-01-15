import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeedComponent from './feed/Feed';

// apps/portfolio-home/app/page.tsx
export default function PortfolioHome() {
  const projects = [
    { 
      title: "E-Commerce POC", 
      path: "/poc/ecommerce",
      tech: ["React", "TypeScript", "Tailwind"],
      description: "Modern cart & checkout flow"
    },
    {
      title: "Data Dashboard",
      path: "/poc/dashboard", 
      tech: ["Next.js", "D3.js"],
      description: "Real-time analytics visualization"
    },
    // Add all your POCs here
  ];

  return (
    <div className="portfolio-container">
      <FeedComponent />
    </div>
  );
}