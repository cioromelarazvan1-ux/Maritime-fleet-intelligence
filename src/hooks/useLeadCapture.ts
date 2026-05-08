import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface LeadData {
  full_name: string;
  email: string;
  company: string;
  fleet_size: string;
  vessel_types: string;
  message?: string;
}

export const useLeadCapture = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const { error: supabaseError } = await supabase
        .from("leads")
        .insert([{ ...data, source: "website_contact_form" }]);
      if (supabaseError) throw supabaseError;
      setIsSuccess(true);
    } catch (err) {
      console.error("Lead submission error:", err);
      setError("Something went wrong. Please email us directly at razvan@888aisystems.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitLead, isSubmitting, isSuccess, error };
};
