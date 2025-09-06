"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Users,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Star,
  Award,
  Zap,
  Target,
  Rocket,
  Shield,
  CheckCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About Company */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Prompt Exercise AI
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing English learning with AI-powered grammar
              exercises, comprehensive study materials, and personalized
              learning paths for students worldwide.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Trusted by 10,000+ learners</span>
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Grammar Topics */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-blue-400" />
              <span>Grammar Topics</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/grammar/presentperfect"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Present Perfect Tense</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/grammar/modalverbs"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Modal Verbs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/grammar/passivevoice"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Passive Voice</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/grammar/conditionals"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Conditionals</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/grammar/articles"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Articles (A, An, The)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/grammar/available-topics"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center space-x-2"
                >
                  <Target className="h-3 w-3" />
                  <span>View All 119 Topics →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-purple-400" />
              <span>Learning Tools</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/exercise-grammar"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <Zap className="h-3 w-3 text-yellow-400" />
                  <span>Grammar Exercises</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/exercise-vocab"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <Star className="h-3 w-3 text-yellow-400" />
                  <span>Vocabulary Builder</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/download-tenses-pdf"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <Award className="h-3 w-3 text-orange-400" />
                  <span>PDF Study Guides</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <Globe className="h-3 w-3 text-blue-400" />
                  <span>CEFR Level Tests</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <Users className="h-3 w-3 text-green-400" />
                  <span>Study Groups</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center space-x-2"
                >
                  <Heart className="h-3 w-3" />
                  <span>AI Tutor (Coming Soon)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Help */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-400" />
              <span>Support</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Help Center & FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Learning Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Community Forum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Teacher Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Feedback & Suggestions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Report a Bug
                </a>
              </li>
            </ul>

            {/* Quick Stats */}
            <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="text-xs text-gray-400 mb-2">Platform Stats</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-white font-semibold">119</div>
                  <div className="text-gray-400">Grammar Topics</div>
                </div>
                <div>
                  <div className="text-white font-semibold">1000+</div>
                  <div className="text-gray-400">Exercises</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5: Contact & Company Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>Contact Us</span>
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Email Support</div>
                  <a
                    href="mailto:support@promptexercise.ai"
                    className="hover:text-blue-400 transition-colors"
                  >
                    support@promptexercise.ai
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-red-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Office</div>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-400/20">
              <h5 className="text-sm font-semibold text-white mb-2">
                📧 Stay Updated
              </h5>
              <p className="text-xs text-gray-300 mb-3">
                Get weekly grammar tips and new content updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-1.5 text-xs bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© {currentYear} Prompt Exercise AI. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for English learners worldwide</span>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex flex-wrap items-center justify-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Next.js 15</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>TypeScript</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Tailwind CSS</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>AI-Powered</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
