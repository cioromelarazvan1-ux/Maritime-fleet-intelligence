import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, DollarSign, ShieldCheck } from "lucide-react";

const RoiCalculator = () => {
  const [fleet, setFleet] = useState(10);
  const [crew, setCrew] = useState(22);

  const data = useMemo(() => {
    const hours = fleet * 38;
    const dollars = hours * 65;
    const riskScore = Math.min(95, 30 + fleet * 1.4 + crew * 0.6);
    const tier = riskScore > 75 ? "High" : riskScore > 55 ? "Medium" : "Notable";
    return { hours, dollars, tier, riskScore };
  }, [fleet, crew]);

  return (
    <section id="roi" className="py-16 md:py-24">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            ROI in Minutes
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
            <span className="text-gradient">Quantify the return</span>{" "}
            <span className="text-gradient-cyan">on your fleet.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong grid grid-cols-1 gap-8 rounded-3xl p-6 md:grid-cols-2 md:p-10"
        >
          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <label className="text-sm font-medium">Fleet size</label>
                <span className="font-display text-2xl font-semibold text-gradient-cyan">
                  {fleet} <span className="text-sm font-normal text-muted-foreground">vessels</span>
                </span>
              </div>
              <Slider value={[fleet]} min={1} max={100} step={1} onValueChange={(v) => setFleet(v[0])} />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <label className="text-sm font-medium">Avg crew per vessel</label>
                <span className="font-display text-2xl font-semibold text-gradient-cyan">
                  {crew} <span className="text-sm font-normal text-muted-foreground">seafarers</span>
                </span>
              </div>
              <Slider value={[crew]} min={8} max={50} step={1} onValueChange={(v) => setCrew(v[0])} />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>8</span>
                <span>50</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Estimates based on 92% reduction baseline at $65 blended ops rate. Final figures confirmed in your audit.
            </p>
          </div>

          {/* Outputs */}
          <div className="space-y-3">
            <Output icon={TrendingUp} label="Hours saved / month" value={data.hours.toLocaleString()} suffix="hrs" />
            <Output icon={DollarSign} label="$ saved / month" value={`$${data.dollars.toLocaleString()}`} />
            <Output
              icon={ShieldCheck}
              label="Detention risk reduction"
              value={`${data.tier}`}
              suffix={`· ↓ ${Math.round(data.riskScore)}%`}
              accent
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Output = ({
  icon: Icon,
  label,
  value,
  suffix,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  suffix?: string;
  accent?: boolean;
}) => (
  <div
    className={`flex items-center justify-between rounded-2xl border border-white/10 bg-background/40 p-5 ${
      accent ? "ring-1 ring-success/40" : ""
    }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`grid h-10 w-10 place-items-center rounded-lg ${
          accent ? "bg-success/15 text-success" : "bg-primary/15 text-primary"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
    <div className="text-right">
      <div className={`font-display text-xl font-semibold md:text-2xl ${accent ? "text-success" : "text-foreground"}`}>
        {value}
      </div>
      {suffix && <div className="text-xs text-muted-foreground">{suffix}</div>}
    </div>
  </div>
);

export default RoiCalculator;
