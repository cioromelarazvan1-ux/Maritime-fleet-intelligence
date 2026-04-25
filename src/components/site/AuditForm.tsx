import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const FLEET_SIZES = ["1–4", "5–14", "15–29", "30–74", "75+"];
const VESSEL_TYPES = ["Tanker", "Bulk Carrier", "Container", "LNG / LPG", "Offshore", "Passenger / Ferry"];
const PAIN_POINTS = [
  "Manual STCW tracking",
  "Last-minute crew flights",
  "PSC detention risk",
  "MLC 2006 audit trail gaps",
  "Disconnected vessel ↔ shore data",
  "Crew rotation fatigue compliance",
];
const TIMELINES = ["Immediate", "This quarter", "6 months", "Exploring"];

const schema = z.object({
  company: z.string().trim().min(1, "Required").max(200),
  fleet_size: z.string().min(1, "Pick fleet size"),
  vessel_types: z.array(z.string()).min(1, "Pick at least one"),
  current_system: z.string().trim().max(200).optional().or(z.literal("")),
  pain_points: z.array(z.string()).min(1, "Pick at least one"),
  timeline: z.string().min(1, "Pick a timeline"),
  full_name: z.string().trim().min(1, "Required").max(120),
  role: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  company: "",
  fleet_size: "",
  vessel_types: [],
  current_system: "",
  pain_points: [],
  timeline: "",
  full_name: "",
  role: "",
  email: "",
  phone: "",
};

const AuditForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggle = (key: "vessel_types" | "pain_points", v: string) => {
    setData((d) => ({
      ...d,
      [key]: d[key].includes(v) ? d[key].filter((x) => x !== v) : [...d[key], v],
    }));
  };

  const validateStep = () => {
    if (step === 0) {
      const r = z
        .object({ company: schema.shape.company, fleet_size: schema.shape.fleet_size, vessel_types: schema.shape.vessel_types })
        .safeParse(data);
      if (!r.success) {
        toast({ title: "Please complete this step", description: r.error.issues[0]?.message, variant: "destructive" });
        return false;
      }
    }
    if (step === 1) {
      const r = z
        .object({ pain_points: schema.shape.pain_points, timeline: schema.shape.timeline })
        .safeParse(data);
      if (!r.success) {
        toast({ title: "Please complete this step", description: r.error.issues[0]?.message, variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const submit = async () => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Please review your details", description: parsed.error.issues[0]?.message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const payload = {
      company: parsed.data.company,
      fleet_size: parsed.data.fleet_size,
      vessel_types: parsed.data.vessel_types,
      pain_points: parsed.data.pain_points,
      timeline: parsed.data.timeline,
      full_name: parsed.data.full_name,
      role: parsed.data.role,
      email: parsed.data.email,
      ...(parsed.data.current_system ? { current_system: parsed.data.current_system } : {}),
      ...(parsed.data.phone ? { phone: parsed.data.phone } : {}),
    };
    const { error } = await supabase.from("audit_requests").insert(payload);
    setSubmitting(false);
    if (error) {
      toast({ title: "Submission failed", description: error.message, variant: "destructive" });
      return;
    }
    setDone(true);
  };

  return (
    <section id="audit" className="py-16 md:py-28">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Free · 30 minutes
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
            <span className="text-gradient">Request your</span>{" "}
            <span className="text-gradient-cyan">Technical Audit.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We'll map your current certificate inventory, identify your top 3 PSC exposures, and quantify
            time savings — before any commitment.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-6 md:p-10"
        >
          {done ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Audit request received.</h3>
              <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                Captain Thorne and the team will reach out within one business day to schedule your 30-minute audit.
              </p>
            </div>
          ) : (
            <>
              {/* Stepper */}
              <div className="mb-8 flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-1 items-center gap-2">
                    <div
                      className={`grid h-7 w-7 place-items-center rounded-full text-xs font-medium transition-colors ${
                        i <= step ? "bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < 2 && <div className={`h-px flex-1 ${i < step ? "bg-primary" : "bg-white/10"}`} />}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {step === 0 && (
                    <>
                      <Field label="Company">
                        <Input
                          className="border-white/10 bg-background/50"
                          value={data.company}
                          maxLength={200}
                          onChange={(e) => update("company", e.target.value)}
                          placeholder="e.g. Aurora Shipping"
                        />
                      </Field>
                      <Field label="Fleet size">
                        <ChipGroup options={FLEET_SIZES} value={[data.fleet_size]} onSelect={(v) => update("fleet_size", v)} />
                      </Field>
                      <Field label="Vessel types (select all that apply)">
                        <ChipGroup
                          options={VESSEL_TYPES}
                          value={data.vessel_types}
                          multi
                          onSelect={(v) => toggle("vessel_types", v)}
                        />
                      </Field>
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <Field label="Current crewing system (optional)">
                        <Input
                          className="border-white/10 bg-background/50"
                          value={data.current_system}
                          maxLength={200}
                          onChange={(e) => update("current_system", e.target.value)}
                          placeholder="e.g. Compas, OCS, in-house, spreadsheets"
                        />
                      </Field>
                      <Field label="Biggest pain points (select all that apply)">
                        <ChipGroup
                          options={PAIN_POINTS}
                          value={data.pain_points}
                          multi
                          onSelect={(v) => toggle("pain_points", v)}
                        />
                      </Field>
                      <Field label="Timeline">
                        <ChipGroup options={TIMELINES} value={[data.timeline]} onSelect={(v) => update("timeline", v)} />
                      </Field>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <Field label="Full name">
                          <Input
                            className="border-white/10 bg-background/50"
                            value={data.full_name}
                            maxLength={120}
                            onChange={(e) => update("full_name", e.target.value)}
                          />
                        </Field>
                        <Field label="Role">
                          <Input
                            className="border-white/10 bg-background/50"
                            value={data.role}
                            maxLength={120}
                            onChange={(e) => update("role", e.target.value)}
                            placeholder="Fleet Manager, Tech Sup., etc."
                          />
                        </Field>
                        <Field label="Work email">
                          <Input
                            type="email"
                            className="border-white/10 bg-background/50"
                            value={data.email}
                            maxLength={255}
                            onChange={(e) => update("email", e.target.value)}
                          />
                        </Field>
                        <Field label="Phone (optional)">
                          <Input
                            className="border-white/10 bg-background/50"
                            value={data.phone}
                            maxLength={40}
                            onChange={(e) => update("phone", e.target.value)}
                          />
                        </Field>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between">
                <Button
                  variant="ghost"
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="text-muted-foreground hover:bg-white/5"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back
                </Button>
                {step < 2 ? (
                  <Button
                    onClick={() => validateStep() && setStep((s) => s + 1)}
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 glow-cyan"
                  >
                    Continue <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={submit}
                    disabled={submitting}
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 glow-cyan"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Submitting…
                      </>
                    ) : (
                      <>Submit request</>
                    )}
                  </Button>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
    {children}
  </div>
);

const ChipGroup = ({
  options,
  value,
  onSelect,
  multi,
}: {
  options: string[];
  value: string[];
  onSelect: (v: string) => void;
  multi?: boolean;
}) => (
  <div className="flex flex-wrap gap-2">
    {options.map((o) => {
      const active = value.includes(o);
      return (
        <button
          type="button"
          key={o}
          onClick={() => onSelect(o)}
          className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
            active
              ? "border-primary/60 bg-primary/15 text-primary"
              : "border-white/10 bg-white/[0.02] text-muted-foreground hover:bg-white/5 hover:text-foreground"
          }`}
          aria-pressed={active}
        >
          {o}
          {multi && active && " ✓"}
        </button>
      );
    })}
  </div>
);

export default AuditForm;
