-- Add preferred_tier column to membership_applications
ALTER TABLE membership_applications ADD COLUMN IF NOT EXISTS preferred_tier VARCHAR(255) DEFAULT '';
