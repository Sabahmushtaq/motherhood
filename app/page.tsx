"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: "",
    age: "",
    treatments: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Handle header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSelect = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
    if (step < 4) {
      setTimeout(nextStep, 350); // slight delay for visual feedback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your personalized care plan request has been received.");
      setStep(1); // Reset for demo purposes
      setAnswers({ goal: "", age: "", treatments: "", name: "", email: "", phone: "" });
    }, 1500);
  };

  const faqs = [
    {
      question: "What is the first step in the IVF process?",
      answer: "The first step is a comprehensive consultation where we review your medical history, perform necessary tests, and discuss your family-building goals. This allows our expert team to create a highly personalized care plan tailored just for you."
    },
    {
      question: "How long does a typical IVF cycle take?",
      answer: "A typical cycle takes about 4 to 6 weeks. This timeline includes ovarian stimulation, egg retrieval, fertilization in our advanced embryology lab, and the careful embryo transfer process."
    },
    {
      question: "Are there any side effects from the fertility medications?",
      answer: "Some patients may experience mild side effects such as bloating, mood swings, or minor discomfort. Our clinical team will closely monitor you throughout your cycle and adjust medications to ensure your utmost comfort and safety."
    },
    {
      question: "Do you offer financing options or accept insurance?",
      answer: "Absolutely. We believe everyone deserves the chance to build a family. We offer various flexible financing options, payment plans, and work with numerous insurance providers to help you manage the costs effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5fc] via-white to-[#f3e8ff] text-[#2d1b3d] font-sans selection:bg-[#d8b4fe] selection:text-[#2d1b3d] overflow-x-hidden">
      
      {/* Header */}
      <header className={`px-6 py-4 flex items-center justify-between transition-all duration-300 sticky top-0 z-50 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#e9d5ff]' : 'bg-transparent border-transparent'}`}>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <img 
              src="https://progressive.motherhoodivf.com/favicon.svg" 
              alt="Progressive Motherhood Logo" 
              className="w-8 h-8 md:w-10 md:h-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-[#d8b4fe] blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-tight text-[#4c2d6b]">
            Progressive Motherhood
          </span>
        </div>
        <button className="text-sm md:text-base font-medium px-5 py-2 rounded-full text-[#6b21a8] hover:bg-[#f3e8ff] transition-all duration-300 border border-transparent hover:border-[#d8b4fe] active:scale-95">
          Contact Us
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-16 animate-fade-in-up">
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#f3e8ff] to-white border border-[#e9d5ff] text-[#6b21a8] text-sm font-semibold mb-6 shadow-sm hover:shadow-md transition-shadow cursor-default animate-float">
            ✨ Compassionate & Personalized Care
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#3b0764] mb-6 leading-tight">
            Your Journey to <br className="hidden md:block"/> Parenthood Starts Here
          </h1>
          <p className="text-lg md:text-xl text-[#6b21a8]/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Navigating fertility can feel overwhelming, but you don't have to do it alone. 
            At Progressive Motherhood, we combine cutting-edge science with deep compassion.
            Answer a few quick questions to discover a personalized care path designed just for you.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-[#6b21a8] mt-8 opacity-90">
            <span className="flex items-center gap-2 hover:text-[#9333ea] transition-colors">
              <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              High Success Rates
            </span>
            <span className="flex items-center gap-2 hover:text-[#9333ea] transition-colors">
              <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Expert Specialists
            </span>
            <span className="flex items-center gap-2 hover:text-[#9333ea] transition-colors">
              <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              24/7 Support
            </span>
          </div>
        </div>

        {/* Questionnaire Card */}
        <div className="w-full max-w-xl bg-white rounded-[2rem] shadow-xl shadow-purple-900/5 border border-[#f3e8ff] overflow-hidden mb-24 relative hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 transform hover:-translate-y-1">
          
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-[#f8f5fc]">
            <div 
              className="h-full bg-gradient-to-r from-[#d8b4fe] to-[#9333ea] transition-all duration-700 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <div className="p-8 md:p-10 min-h-[400px] flex flex-col">
            {/* Step 1 */}
            {step === 1 && (
              <div className="animate-slide-up flex-1">
                <span className="text-sm font-semibold text-[#a855f7] uppercase tracking-wider mb-3 block">Step 1 of 4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3b0764] mb-8">What brings you to Progressive Motherhood today?</h2>
                <div className="space-y-3">
                  {[
                    "Starting a family soon",
                    "Fertility preservation (Egg freezing)",
                    "Seeking a second opinion",
                    "General fertility checkup"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect("goal", option)}
                      className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 group ${
                        answers.goal === option 
                          ? "border-[#a855f7] bg-[#fdfcff] text-[#6b21a8] shadow-md transform scale-[1.02]" 
                          : "border-[#f3e8ff] hover:border-[#d8b4fe] hover:bg-[#faf5ff] hover:shadow-sm text-[#4c2d6b]"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">{option}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${answers.goal === option ? 'border-[#a855f7]' : 'border-[#e9d5ff] group-hover:border-[#d8b4fe]'}`}>
                          {answers.goal === option && <div className="w-2.5 h-2.5 bg-[#a855f7] rounded-full" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="animate-slide-up flex-1">
                <span className="text-sm font-semibold text-[#a855f7] uppercase tracking-wider mb-3 block">Step 2 of 4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3b0764] mb-8">What is your current age group?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Under 30",
                    "30 - 35",
                    "36 - 40",
                    "Over 40"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect("age", option)}
                      className={`w-full text-center px-6 py-8 rounded-xl border-2 transition-all duration-300 ${
                        answers.age === option 
                          ? "border-[#a855f7] bg-[#fdfcff] text-[#6b21a8] shadow-md transform scale-[1.03]" 
                          : "border-[#f3e8ff] hover:border-[#d8b4fe] hover:bg-[#faf5ff] hover:shadow-sm text-[#4c2d6b]"
                      }`}
                    >
                      <span className="font-semibold text-xl">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="animate-slide-up flex-1">
                <span className="text-sm font-semibold text-[#a855f7] uppercase tracking-wider mb-3 block">Step 3 of 4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3b0764] mb-8">Have you undergone any previous fertility treatments?</h2>
                <div className="space-y-4">
                  {[
                    { label: "No, this is my first time", value: "No" },
                    { label: "Yes, I have tried treatments before", value: "Yes" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect("treatments", option.value)}
                      className={`w-full text-left px-6 py-6 rounded-xl border-2 transition-all duration-300 group ${
                        answers.treatments === option.value 
                          ? "border-[#a855f7] bg-[#fdfcff] text-[#6b21a8] shadow-md transform scale-[1.02]" 
                          : "border-[#f3e8ff] hover:border-[#d8b4fe] hover:bg-[#faf5ff] hover:shadow-sm text-[#4c2d6b]"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">{option.label}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${answers.treatments === option.value ? 'border-[#a855f7]' : 'border-[#e9d5ff] group-hover:border-[#d8b4fe]'}`}>
                          {answers.treatments === option.value && <div className="w-2.5 h-2.5 bg-[#a855f7] rounded-full" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Form */}
            {step === 4 && (
              <div className="animate-slide-up flex-1">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#fdfcff] border border-[#f3e8ff] shadow-sm rounded-full flex items-center justify-center mx-auto mb-5 animate-bounce-slow">
                    <svg className="w-8 h-8 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#3b0764] mb-2">You're Almost There</h2>
                  <p className="text-[#6b21a8]/80">Enter your details to receive your personalized care plan and expert consultation.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4c2d6b] mb-1.5 transition-colors group-focus-within:text-[#9333ea]">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#f3e8ff] bg-[#fcfaff] focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-[#c084fc] outline-none transition-all duration-300 placeholder:text-[#d8b4fe]"
                      value={answers.name}
                      onChange={(e) => setAnswers({...answers, name: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4c2d6b] mb-1.5 transition-colors group-focus-within:text-[#9333ea]">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#f3e8ff] bg-[#fcfaff] focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-[#c084fc] outline-none transition-all duration-300 placeholder:text-[#d8b4fe]"
                      value={answers.email}
                      onChange={(e) => setAnswers({...answers, email: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-[#4c2d6b] mb-1.5 transition-colors group-focus-within:text-[#9333ea]">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#f3e8ff] bg-[#fcfaff] focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-[#c084fc] outline-none transition-all duration-300 placeholder:text-[#d8b4fe]"
                      value={answers.phone}
                      onChange={(e) => setAnswers({...answers, phone: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-8 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] hover:from-[#7e22ce] hover:to-[#6b21a8] text-white font-bold py-4 rounded-xl shadow-xl shadow-purple-900/20 transform transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 flex justify-center items-center gap-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing your request...</span>
                    ) : (
                      <>
                        Get My Care Plan
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-[#6b21a8]/60 mt-4 flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Your information is secure and 100% confidential.
                  </p>
                </form>
              </div>
            )}

            {/* Navigation Buttons */}
            {step > 1 && (
              <div className="mt-8 pt-6 border-t border-[#f3e8ff] flex justify-between items-center animate-fade-in">
                <button 
                  onClick={prevStep}
                  className="text-[#9333ea] font-medium hover:text-[#6b21a8] flex items-center gap-1 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-[#f3e8ff] active:scale-95 group"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
                {step < 4 && (
                  <span className="text-sm font-medium text-[#a855f7]/60 bg-[#f8f5fc] px-3 py-1 rounded-full">
                    Question {step} of 3
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Our Approach / More Text Section */}
        <div className="w-full max-w-4xl text-center mb-24 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b0764] mb-6">Why Choose Progressive Motherhood?</h2>
          <p className="text-[#6b21a8]/80 leading-relaxed mb-12 max-w-3xl mx-auto text-lg">
            We understand that the journey to parenthood is deeply personal and sometimes challenging. Our philosophy is rooted in treating the whole person, not just the diagnosis. From your very first consultation, you'll experience a supportive environment where your questions are answered, your concerns are validated, and your family-building dreams are nurtured with the highest standard of medical excellence.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-[#f3e8ff] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] text-[#9333ea] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b0764] mb-3">Personalized Plans</h3>
              <p className="text-[#6b21a8]/80 text-sm leading-relaxed">Every body and every journey is unique. We meticulously tailor our treatments specifically to your health profile and goals.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-[#f3e8ff] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] text-[#9333ea] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b0764] mb-3">Advanced Technology</h3>
              <p className="text-[#6b21a8]/80 text-sm leading-relaxed">Gain access to state-of-the-art embryology labs and cutting-edge fertility technologies that maximize your chances of success.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-[#f3e8ff] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] text-[#9333ea] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#3b0764] mb-3">Compassionate Team</h3>
              <p className="text-[#6b21a8]/80 text-sm leading-relaxed">Enjoy 24/7 dedicated support from patient coordinators and specialists who genuinely care about your emotional and physical well-being.</p>
            </div>
          </div>
        </div>

        {/* Patient Stories / Reviews */}
        <div className="w-full max-w-5xl mb-24 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b0764] mb-4">Patient Success Stories</h2>
            <p className="text-[#6b21a8]/80 text-lg">Hear from families who started their journey with Progressive Motherhood.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah & Mark", text: "The team at Progressive Motherhood made us feel so supported during our entire IVF journey. We couldn't have asked for better care." },
              { name: "Emily T.", text: "After years of trying, we finally found hope here. The advanced technology and compassionate doctors made all the difference in the world." },
              { name: "Jessica & David", text: "They were with us every step of the way. From our first consultation to the moment we heard the heartbeat, they were simply amazing." }
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#f3e8ff] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-5 text-[#c084fc]">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-[#6b21a8]/80 leading-relaxed mb-6 italic">"{review.text}"</p>
                </div>
                <span className="font-semibold text-[#4c2d6b]">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Used */}
        <div className="w-full max-w-5xl mb-24 animate-fade-in bg-white/40 p-8 md:p-12 rounded-[2.5rem] border border-[#f3e8ff] shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b0764] mb-4">State-of-the-Art Technology</h2>
            <p className="text-[#6b21a8]/80 text-lg max-w-2xl mx-auto">We utilize the latest advancements in reproductive science to maximize your chances of a successful pregnancy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-5 items-start p-4 hover:bg-white/60 rounded-2xl transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] rounded-2xl flex items-center justify-center shrink-0 text-[#9333ea] shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3b0764] mb-2">Advanced Embryology Lab</h3>
                <p className="text-[#6b21a8]/80 text-sm leading-relaxed">Our cleanroom laboratory maintains optimal air quality and conditions to closely mimic the natural environment for healthy embryo development.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start p-4 hover:bg-white/60 rounded-2xl transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] rounded-2xl flex items-center justify-center shrink-0 text-[#9333ea] shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3b0764] mb-2">Time-Lapse Incubators</h3>
                <p className="text-[#6b21a8]/80 text-sm leading-relaxed">We use specialized incubators equipped with cameras that continuously monitor embryo growth 24/7 without ever disturbing their delicate environment.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start p-4 hover:bg-white/60 rounded-2xl transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] rounded-2xl flex items-center justify-center shrink-0 text-[#9333ea] shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3b0764] mb-2">PGT-A Genetic Testing</h3>
                <p className="text-[#6b21a8]/80 text-sm leading-relaxed">Preimplantation Genetic Testing ensures we select only the healthiest, chromosomally normal embryos for transfer, significantly improving success rates.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start p-4 hover:bg-white/60 rounded-2xl transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] rounded-2xl flex items-center justify-center shrink-0 text-[#9333ea] shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3b0764] mb-2">AI-Assisted Selection</h3>
                <p className="text-[#6b21a8]/80 text-sm leading-relaxed">Artificial Intelligence helps our expert embryologists analyze thousands of data points to rapidly and accurately identify the embryos with the highest potential.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b0764] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#6b21a8]/80 text-lg">Everything you need to know about starting your journey with us.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${openFaq === index ? 'border-[#c084fc] bg-white shadow-md' : 'border-[#e9d5ff] bg-[#fcfaff] hover:border-[#d8b4fe]'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
                >
                  <span className={`font-semibold text-lg transition-colors duration-300 ${openFaq === index ? 'text-[#6b21a8]' : 'text-[#4c2d6b] group-hover:text-[#6b21a8]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${openFaq === index ? 'bg-[#f3e8ff] text-[#9333ea] rotate-180' : 'bg-[#f8f5fc] text-[#a855f7] group-hover:bg-[#f3e8ff]'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e9d5ff] to-transparent mb-4"></div>
                  <p className="text-[#6b21a8]/80 leading-relaxed text-[15px]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#e9d5ff] bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="https://progressive.motherhoodivf.com/favicon.svg" alt="Logo" className="w-6 h-6 grayscale opacity-60" />
            <span className="font-semibold text-[#4c2d6b]/70">Progressive Motherhood IVF</span>
          </div>
          <div className="text-sm font-medium text-[#6b21a8]/60 flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-[#9333ea] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#9333ea] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#9333ea] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}