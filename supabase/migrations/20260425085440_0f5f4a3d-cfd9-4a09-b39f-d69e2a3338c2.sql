DROP POLICY "Anyone can submit an audit request" ON public.audit_requests;

CREATE POLICY "Anyone can submit an audit request"
ON public.audit_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(company) BETWEEN 1 AND 200
  AND char_length(fleet_size) BETWEEN 1 AND 50
  AND char_length(full_name) BETWEEN 1 AND 120
  AND char_length(role) BETWEEN 1 AND 120
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR char_length(phone) <= 40)
  AND (current_system IS NULL OR char_length(current_system) <= 200)
  AND (timeline IS NULL OR char_length(timeline) <= 100)
  AND array_length(vessel_types, 1) IS NULL OR array_length(vessel_types, 1) <= 20
  AND array_length(pain_points, 1) IS NULL OR array_length(pain_points, 1) <= 20
);