'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, FileDown } from 'lucide-react';

const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <Terminal size={18} className="text-emerald-400" />
                    </div>
                    <span className="font-bold text-slate-200 text-lg tracking-tight group-hover:text-white transition-colors">DanisCindrak</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="w-px h-6 bg-white/10 mx-2"></div>

                    <a
                        href="/cv_en.pdf"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-slate-200 text-sm font-medium border border-white/10 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 active:scale-95"
                    >
                        <FileDown size={16} />
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0c0c0c]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-slate-300 hover:text-emerald-400 transition-colors py-2 border-b border-white/5 last:border-none"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/cv_en.pdf"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20 active:bg-emerald-500/20 transition-colors"
                            >
                                <FileDown size={18} />
                                Download Resume
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
