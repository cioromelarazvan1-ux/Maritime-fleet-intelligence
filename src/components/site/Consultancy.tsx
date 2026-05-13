import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, CheckCircle2, Loader2, ShieldCheck, Clock, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const VESSEL_TYPES = ["Tanker", "LNG/LPG", "Bulk Carrier", "Container", "Offshore", "Cruise", "Ferry", "Other"];
const FREE_EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com", "icloud.com"];

const Consultancy = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const sectionRef = useSectionTracking("contact_form");
  const [hasStarted, setHasStarted] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    fleet_size: "",
    vessel_types: [] as string[],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.full_name.trim().split(/\s+/).length < 2) {
      newErrors.full_name = "Full name must include at least two words.";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address.";
    } else {
      const domain = formData.email.split("@")[1]?.toLowerCase();
      if (FREE_EMAIL_DOMAINS.includes(domain)) {
        newErrors.email = "Please use your company email address.";
      }
    }
    
    if (formData.company.length < 3) {
      newErrors.company = "Company name must be at least 3 characters.";
    }
    
    if (!formData.fleet_size) {
      newErrors.fleet_size = "Please select your fleet size.";
    }
    
    if (formData.vessel_types.length === 0) {
      newErrors.vessel_types = "Please select at least one vessel type.";
    }
    
    setErrors(newErrors);
    
    // Track validation errors
    Object.keys(newErrors).forEach(field => {
      trackEvent("contact_form_validation_error", { field });
    });
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      trackEvent("contact_form_submitted", {
        fleet_size: formData.fleet_size,
        vessel_types: formData.vessel_types.join(", "),
        source: "website_contact_form"
      });
      
      setIsSubmitting(true);
      setSubmissionError("");

      try {
        const response = await fetch("https://formspree.io/f/mjglrpol", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.full_name,
            email: formData.email,
            company: formData.company,
            fleetSize: formData.fleet_size,
            vesselTypes: formData.vessel_types.join(", "),
            challenge: formData.message
          })
        });

        if (response.ok) {
          setSubmittedName(formData.full_name);
          setIsSuccess(true);
          setFormData({
            full_name: "",
            email: "",
            company: "",
            fleet_size: "",
            vessel_types: [],
            message: "",
          });
        } else {
          setSubmissionError("Something went wrong. Please email razvan@888aisystems.com directly.");
        }
      } catch (err) {
        setSubmissionError("Something went wrong. Please email razvan@888aisystems.com directly.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const toggleVesselType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      vessel_types: prev.vessel_types.includes(type)
        ? prev.vessel_types.filter(t => t !== type)
        : [...prev.vessel_types, type]
    }));
  };

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:pt-28 md:pb-12 bg-[#030711] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="mb-14 max-w-2xl">
          <RevealOnScroll direction="up" delay={0}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
              Early Access
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-white">Become a Founding</span>{" "}
              <span className="text-gradient-cyan">Fleet Partner.</span>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-stretch">
          {/* Left Column: Value Prop */}
          <RevealOnScroll direction="left" delay={0.1} className="h-full">
            <div className="glass-strong rounded-3xl p-8 md:p-10 border-l-4 border-l-cyan-500 bg-slate-900/40 h-full">
              <h3 className="font-display text-2xl font-bold text-white mb-8">
                What happens after you submit:
              </h3>
              
              <div className="space-y-8 mb-12">
                {[
                  "Razvan reviews your fleet profile personally — within 24 hours",
                  "A 30-minute technical call is scheduled at your convenience",
                  "We map your specific vessel types and compliance requirements",
                  "You become a founding fleet partner and help shape the product roadmap"
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-slate-300 text-lg leading-snug">{step}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-cyan-500" />
                  <span>GDPR compliant — EU hosted data</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Clock className="h-4 w-4 text-cyan-500" />
                  <span>Response within 24 hours guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Anchor className="h-4 w-4 text-cyan-500" />
                  <span>Built by a Chief Engineer — we speak your language</span>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5">
                <h4 className="text-sm font-medium text-slate-400 mb-4">What's included in your early access:</h4>
                <ul className="space-y-3">
                  {[
                    "Certificate inventory gap analysis",
                    "STCW compliance risk map",
                    "Time savings opportunity assessment",
                    "Custom onboarding roadmap"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-400 items-start">
                      <span className="text-cyan-500 leading-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Form */}
          <RevealOnScroll direction="right" delay={0.2} className="h-full">
            <div className="glass-strong rounded-3xl p-8 md:p-10 border border-white/5 h-full">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
                      <CheckCircle2 className="h-12 w-12 text-cyan-500" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white mb-4">Request received.</h3>
                    <p className="text-slate-400 mb-8 max-w-sm mx-auto text-lg">
                      Thank you, {submittedName}. Razvan will review your fleet profile within 24 hours.
                    </p>
                    
                    <div className="bg-white/5 rounded-2xl p-6 text-left space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-slate-300">
                        <span className="text-lg">📧 Confirmation sent to your email</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <span className="text-lg">📅 Expect a calendar invite soon</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="rounded-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6"
                      asChild
                    >
                      <a href="https://linkedin.com/in/razvan-cioromela-734067129/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 mr-2" /> LinkedIn Profile
                      </a>
                    </Button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="full_name" className="text-slate-300">Full Name</Label>
                      <Input
                        id="full_name"
                        placeholder="Capt. John Smith / Mr. Andreas Müller"
                        value={formData.full_name}
                        onFocus={() => {
                          if (!hasStarted) {
                            setHasStarted(true);
                            trackEvent("contact_form_started");
                          }
                        }}
                        onChange={e => setFormData(f => ({ ...f, full_name: e.target.value }))}
                        className={`bg-white/[0.03] border-white/10 focus:border-cyan-500/50 py-6 ${errors.full_name ? "border-amber-500/50 bg-amber-500/5" : ""}`}
                      />
                      {errors.full_name && <p className="text-amber-500 text-xs mt-1 font-medium">{errors.full_name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@companyname.com"
                        value={formData.email}
                        onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                        className={`bg-white/[0.03] border-white/10 focus:border-cyan-500/50 py-6 ${errors.email ? "border-amber-500/50 bg-amber-500/5" : ""}`}
                      />
                      {errors.email && <p className="text-amber-500 text-xs mt-1 font-medium">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-300">Company / Manning Agency</Label>
                      <Input
                        id="company"
                        placeholder="e.g. Thome Ship Management, Wallem Group"
                        value={formData.company}
                        onChange={e => setFormData(f => ({ ...f, company: e.target.value }))}
                        className={`bg-white/[0.03] border-white/10 focus:border-cyan-500/50 py-6 ${errors.company ? "border-amber-500/50 bg-amber-500/5" : ""}`}
                      />
                      {errors.company && <p className="text-amber-500 text-xs mt-1 font-medium">{errors.company}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Fleet Size</Label>
                      <Select 
                        value={formData.fleet_size} 
                        onValueChange={v => setFormData(f => ({ ...f, fleet_size: v }))}
                      >
                        <SelectTrigger className={`bg-white/[0.03] border-white/10 focus:border-cyan-500/50 py-6 ${errors.fleet_size ? "border-amber-500/50 bg-amber-500/5" : ""}`}>
                          <SelectValue placeholder="Select fleet size" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0A101F] border-white/10 text-white">
                          <SelectItem value="1 — 3 vessels (Pilot)">1 — 3 vessels (Pilot)</SelectItem>
                          <SelectItem value="4 — 10 vessels">4 — 10 vessels</SelectItem>
                          <SelectItem value="11 — 25 vessels">11 — 25 vessels</SelectItem>
                          <SelectItem value="26 — 50 vessels">26 — 50 vessels</SelectItem>
                          <SelectItem value="50+ vessels (Enterprise)">50+ vessels (Enterprise)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.fleet_size && <p className="text-amber-500 text-xs mt-1 font-medium">{errors.fleet_size}</p>}
                    </div>

                    <div className="space-y-3">
                      <Label className="text-slate-300">Primary Vessel Types</Label>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {VESSEL_TYPES.map(type => (
                          <div key={type} className="flex items-center space-x-3">
                            <Checkbox 
                              id={`vessel-${type}`} 
                              checked={formData.vessel_types.includes(type)}
                              onCheckedChange={() => toggleVesselType(type)}
                              className="border-white/20 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                            />
                            <label 
                              htmlFor={`vessel-${type}`} 
                              className="text-sm font-medium leading-none text-slate-300 cursor-pointer"
                            >
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.vessel_types && <p className="text-amber-500 text-xs mt-1 font-medium">{errors.vessel_types}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">Operational challenge? (optional)</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        placeholder="e.g. STCW expiry management, crew rotation delays..."
                        value={formData.message}
                        onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                        className="bg-white/[0.03] border-white/10 focus:border-cyan-500/50 resize-none"
                      />
                    </div>

                    {submissionError && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-medium">
                        {submissionError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-cyan-500 text-black hover:bg-cyan-400 py-7 text-lg font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Sending...</>
                      ) : (
                        "Apply to be a Founding Partner →"
                      )}
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
