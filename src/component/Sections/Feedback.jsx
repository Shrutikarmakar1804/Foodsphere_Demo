import { useState } from "react";
import { Button, Card, CardContent, Input, TextField, CircularProgress } from "@mui/material";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) throw new Error("Failed to send feedback.");

      setSubmitted(true);
      setName("");
      setMessage("");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 mt-10 shadow-xl rounded-2xl">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4 text-center">Send us your Feedback</h2>

        {submitted ? (
          <div className="text-black-600 text-center font-medium">
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              fullWidth
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disableUnderline
              className="bg-black px-2 py-1 rounded"
            />
            <TextField
              label="Your Message"
              multiline
              rows={5}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              variant="outlined"
            />
          
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <br/>
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Submit Feedback"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
