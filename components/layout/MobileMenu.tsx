'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import nav from '@/content/nav.json';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Focus trap
    useEffect(() => {
        if (isOpen && menuRef.current) {
            const focusableElements = menuRef.current.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            firstElement?.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Menu panel */}
            <div
                ref={menuRef}
                className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border">
                        <span
                            className="text-lg font-bold text-primary"
                            style={{ fontFamily: 'var(--font-headline)' }}
                        >
                            Menu
                        </span>
                        <button
                            type="button"
                            className="p-2 -mr-2 text-text hover:text-primary transition-colors"
                            onClick={onClose}
                            aria-label="Luk menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobil navigation">
                        <ul className="space-y-1">
                            {nav.mainNav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block py-3 px-4 text-lg text-text hover:text-primary hover:bg-background-alt rounded-lg transition-colors"
                                        onClick={onClose}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA */}
                    <div className="p-4 border-t border-border">
                        <a
                            href={nav.cta.primary.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full text-center"
                            onClick={onClose}
                        >
                            {nav.cta.primary.label}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
