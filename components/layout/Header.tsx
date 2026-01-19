'use client';

import Link from 'next/link';
import { useState } from 'react';
import nav from '@/content/nav.json';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
            <div className="container">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-dark transition-colors"
                        style={{ fontFamily: 'var(--font-headline)' }}
                    >
                        <img
                            src="/images/logo.png"
                            alt="Hypnose Fyn logo"
                            className="h-10 w-auto"
                        />
                        <span>Hypnose Fyn</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6" aria-label="Hovednavigation">
                        {nav.mainNav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-text-light hover:text-primary transition-colors font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href={nav.cta.primary.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            {nav.cta.primary.label}
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="md:hidden p-2 -mr-2 text-text hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Åbn menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </header>
    );
}
