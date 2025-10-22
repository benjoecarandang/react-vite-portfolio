import React from "react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#1e1b24] flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <Container className="text-center">
        {/* 404 Number with gradient effect */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </div>

        <SectionHeadings
          tagline="Oops!"
          title="Page Not Found"
          className="!mb-8"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best developers get lost sometimes!
          </p>
        </SectionHeadings>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Link
            to="/"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/25"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
            <svg className="w-5 h-5 ml-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-20">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Fun message */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Meanwhile, here's a fun fact: The first 404 error was recorded in 1992! 📅</p>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
