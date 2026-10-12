import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, CheckCircle2 } from "lucide-react";

export default function FyleCampaignHero() {
  const [expanded, setExpanded] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoRequested, setDemoRequested] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50 rounded-2xl w-full">
      <header className="py-4 md:py-6 relative z-20">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#campaign-builder" title="Fyle Clarity" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img 
                  className="w-auto h-8" 
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" 
                  alt="Clarity Logo" 
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button 
                type="button" 
                className="text-gray-900 p-2 focus:outline-none" 
                onClick={() => setExpanded(!expanded)} 
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a href="#features" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                Features
              </a>
              <a href="#pricing" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                Pricing
              </a>
              <a href="#automation" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                Automation
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a href="#login" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                Customer Login
              </a>

              <button
                type="button"
                onClick={() => setShowDemoModal(true)}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer shadow-md"
              >
                Sign up
              </button>
            </div>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.nav 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="px-1 py-8">
                  <div className="grid gap-y-7">
                    <a href="#features" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Features
                    </a>
                    <a href="#pricing" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Pricing
                    </a>
                    <a href="#automation" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Automation
                    </a>
                    <a href="#login" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Customer Login
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setExpanded(false);
                        setShowDemoModal(true);
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer text-center"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Turn your visitors into profitable{" "}
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> business </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <button
                type="button"
                onClick={() => setShowDemoModal(true)}
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer shadow-lg"
              >
                Get more customers
              </button>

              <button
                type="button"
                onClick={() => setShowDemoModal(true)}
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Watch free demo
              </button>
            </div>

            <p className="mt-8 text-base text-gray-500 font-inter">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12 bg-white mt-12">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto px-4 sm:px-6">
                <img 
                  className="transform scale-105 sm:scale-110 w-full h-auto drop-shadow-2xl rounded-2xl" 
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" 
                  alt="Smart email campaign builder dashboard illustration" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal for "Watch free demo" / "Sign up" */}
      <AnimatePresence>
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-gray-100"
            >
              <button
                onClick={() => {
                  setShowDemoModal(false);
                  setDemoRequested(false);
                }}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {!demoRequested ? (
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-gray-900">
                      Watch Product Demo
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      Experience how the smart email campaign builder and developer automation toolchain synchronizes with Fyle's financial tracking.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Work Email</label>
                    <input
                      type="email"
                      placeholder="engineer@company.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 font-medium"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setDemoRequested(true)}
                      className="w-full py-3.5 px-6 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm transition-all shadow-lg cursor-pointer"
                    >
                      Instant Access Demo
                    </button>
                  </div>
                  <p className="text-xs text-center text-gray-400">
                    Includes full 60-day interactive sandbox access.
                  </p>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">Demo Ready!</h3>
                  <p className="text-sm text-gray-600 max-w-xs mx-auto">
                    Your sandbox instance has been prepared. You can now explore the builder in real time.
                  </p>
                  <button
                    onClick={() => {
                      setShowDemoModal(false);
                      setDemoRequested(false);
                    }}
                    className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all mt-4"
                  >
                    Return to Page
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
