import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";

const Consultancy = () => (
  <section id="consult" className="pt-24 pb-16 md:pt-40 md:pb-24">
    <div className="container-narrow flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-foreground">Beyond automation.</span>
        </h2>
        
        <p className="mt-6 text-lg font-light tracking-wide text-slate-400 md:mt-8 md:text-2xl">
          Welcome to the era of cognitive maritime operations.
        </p>

        {/* Contact Block */}
        <div className="mt-16 flex flex-col items-center gap-8 border-t border-white/5 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a href="mailto:cioromelarazvan1@gmail.com" className="group flex items-center gap-2.5 transition-colors">
              <Mail className="h-4 w-4 text-primary drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.5)]" />
              <span className="text-foreground group-hover:text-primary transition-colors">cioromelarazvan1@gmail.com</span>
            </a>
            <a href="tel:+40725410537" className="group flex items-center gap-2.5 transition-colors">
              <Phone className="h-4 w-4 text-primary drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.5)]" />
              <span className="text-foreground group-hover:text-primary transition-colors">+40 725 410 537</span>
            </a>
            <a href="https://linkedin.com/in/razvan-cioromela-734067129/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 transition-colors">
              <Linkedin className="h-4 w-4 text-primary drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.5)]" />
              <span className="text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
            </a>
            <a href="https://web.facebook.com/profile.php?id=61572083986720" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 transition-colors">
              <Facebook className="h-4 w-4 text-primary drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.5)]" />
              <span className="text-foreground group-hover:text-primary transition-colors">Facebook</span>
            </a>
          </div>

          <div className="text-sm tracking-wide text-slate-400">
            Maritime Hub: Constanța, Romania | Global Operations
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Consultancy;
