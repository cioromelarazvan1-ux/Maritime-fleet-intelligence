import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#030711]">
      <Nav />
      <main className="pt-24 pb-16">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to 888 AI Systems
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Shield className="h-6 w-6" />
              </div>
              <h1 className="font-display text-4xl font-bold text-white">Privacy Policy</h1>
            </div>

            <div className="space-y-12 max-w-3xl">
              <section>
                <h2 className="font-display text-xl font-bold text-white mb-4">1. Who We Are</h2>
                <p className="text-slate-400 leading-relaxed">
                  888 AI Systems is a maritime AI software company headquartered in Constanța, Romania, operating under EU jurisdiction. Contact: razvan@888aisystems.com
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-white mb-4">2. What Data We Collect</h2>
                <p className="text-slate-400 leading-relaxed">
                  We collect data you voluntarily submit through our contact form including your name, work email, company name, fleet size and vessel types. We also collect standard server logs and anonymous usage analytics if you consent to analytics cookies.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                <p className="text-slate-400 leading-relaxed">
                  Contact form submissions are used solely to respond to your inquiry and prepare your fleet consultation proposal. We do not sell, share or transfer your personal data to any third party. Data is stored securely in our Supabase database hosted on EU-based servers.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-white mb-4">4. Cookie Policy</h2>
                <p className="text-slate-400 leading-relaxed">
                  We use essential cookies required for the site to function, and optional analytics cookies to understand site usage. You can manage your cookie preferences at any time using the consent banner or by clearing your browser cookies.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-white mb-4">5. Your Rights Under GDPR</h2>
                <p className="text-slate-400 leading-relaxed">
                  As an EU resident you have the right to access, correct, delete or export your personal data at any time. To exercise any of these rights contact us at razvan@888aisystems.com with subject line: GDPR Request. We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-white mb-4">6. Data Retention</h2>
                <p className="text-slate-400 leading-relaxed">
                  Contact form submissions are retained for 24 months or until you request deletion. Analytics data is retained for 12 months. Server logs are retained for 90 days.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-white mb-4">7. Contact</h2>
                <p className="text-slate-400 leading-relaxed">
                  For any privacy related questions contact: razvan@888aisystems.com — 888 AI Systems, Constanța, Romania, EU.
                </p>
              </section>

              <div className="pt-12 border-t border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Last updated: April 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
