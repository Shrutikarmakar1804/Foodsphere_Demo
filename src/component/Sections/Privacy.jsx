import { Button } from "@mui/material";
import { useState } from "react";


 function Privacy() {
  const [isPrivate, setIsPrivate] = useState(true);
  const [allowSharing, setAllowSharing] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      alert("Privacy settings updated");
    }, 1000);
  };

  return (
    <div className="space-y-4 max-w-md p-4 rounded-xl bg-muted shadow">
      <h2 className="text-xl font-semibold">Privacy Settings</h2>

      <div className="space-y-2">
        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={() => setIsPrivate(!isPrivate)}
            className="accent-primary"
          />
          <span>Make my profile private</span>
        </label>
        <p className="text-xs text-muted-foreground ml-6">
          When enabled, only people you approve can view your profile.
        </p>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={allowSharing}
            onChange={() => setAllowSharing(!allowSharing)}
            className="accent-primary"
          />
          <span>Allow data sharing</span>
        </label>
        <p className="text-xs text-muted-foreground ml-6">
          You agree to share anonymized usage data to improve our services.
        </p>
      </div>

      <Button onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Save Preferences"}
      </Button>
    </div>
  );
}
export default Privacy;