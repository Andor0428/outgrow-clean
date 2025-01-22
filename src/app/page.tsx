'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from '@/components/Button';
import JobApplicationWidget from '@/components/JobApplicationWidget';

export default function Home() {
  const [showWidget, setShowWidget] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseWidget = () => {
    setShowWidget(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-40 backdrop-blur-lg bg-white/80 px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/outgrow-logo.svg"
              alt="Outgrow Logo"
              width={150}
              height={40}
              className="mr-4 hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link href="/go-back" className="text-gray-600 hover:text-gray-900 transition-colors">
              Go back
            </Link>
            <Button
              onClick={() => setShowWidget(true)}
              variant="primary"
              size="md"
            >
              Join Our Team
            </Button>
            <Button
              href="/free-trial"
              variant="outline"
              size="md"
            >
              Free Trial
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white/50 -z-10" />
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Lead Generation
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Made Easy
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Acquire Leads with Outgrow's
              <span className="text-blue-600"> #1 Quiz Maker</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Acquire new customers and capture vital data while engaging your audience with custom quizzes, calculators and recommendations.
            </p>
            <div className="pt-8">
              <Link
                href="/free-trial"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all group hover:bg-blue-700"
              >
                Start Creating
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Why Outgrow's Lead Generation Tools?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Adds Real Value",
                description: "Interactive content type like quizzes build trust by answering your customer's most pressing questions early on in the buying cycle."
              },
              {
                title: "Drives Engagement",
                description: "Quizzes increase brand awareness by encouraging the audience to actively engage with the content. See conversion rates up to 30% higher than traditional landing pages."
              },
              {
                title: "Boosts Lead Generation",
                description: "Users are more likely to share their information in exchange for valuable and personalized content. Create interactive content to acquire 2X leads compared to static content."
              },
              {
                title: "Zero-party Data",
                description: "Third-party data was never a reliable source. Quizzes and interactive content help collect zero-party data from users with their full consent."
              },
              {
                title: "Increases Revenue",
                description: "Along with leads, collect meaningful insights on your prospects and quickly share them with your teams for more personalized follow-ups."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're looking for talented individuals who are passionate about creating innovative solutions and making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefits Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Competitive salary",
                  "Health insurance",
                  "Flexible work hours",
                  "Remote work options",
                  "Professional development"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Culture Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Culture</h3>
              <ul className="space-y-4">
                {[
                  "Innovation-driven",
                  "Collaborative environment",
                  "Work-life balance",
                  "Diverse and inclusive",
                  "Growth opportunities"
                ].map((culture, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{culture}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Now Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Apply?</h3>
              <p className="mb-8 text-white/90">
                Take the next step in your career journey. Join us in building the future of lead generation.
              </p>
              <Button
                onClick={() => setShowWidget(true)}
                variant="secondary"
                className="w-full"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Create & Publish Anywhere
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Create Tools */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Create Powerful Tools</h3>
              <ul className="space-y-6">
                {[
                  "Appealing templates that set your UX apart",
                  "Showcase your brand with quick customizations",
                  "Robust analytics and automation features",
                  "Publish within minutes, no coding needed"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Publish Anywhere */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Deploy Everywhere</h3>
              <ul className="space-y-6">
                {[
                  "Publish on your domain or custom URL",
                  "Embed in any app, webpage or CMS",
                  "Add to your email newsletter",
                  "Present as a pop-up or slide-in"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Ready to Start Generating More Leads?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Create powerful interactive content that converts visitors into customers.
          </p>
          <Link
            href="/free-trial"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all group hover:bg-blue-700"
          >
            Start Your Free Trial
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Job Application Modal */}
      {showWidget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 z-50 flex justify-end p-4 bg-white/80 backdrop-blur-sm border-b">
              <button
                onClick={handleCloseWidget}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close application form"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <JobApplicationWidget onClose={handleCloseWidget} />
          </div>
        </div>
      )}
    </main>
  );
}
