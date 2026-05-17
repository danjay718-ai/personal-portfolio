'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const submitData = new FormData(e.currentTarget);
    submitData.append("access_key", "ae8d524e-9dbe-4249-8394-d3033ee1ea99");
    
    // Convert FormData to JSON for a more reliable fetch request
    const object = Object.fromEntries(submitData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Message received. Thank you!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Web3Forms API Error:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Error submitting the form.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section id="contact" className="border-b border-border py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {result && (
            <p className={`text-sm font-medium ${result.includes("wrong") || result.includes("Error") ? "text-red-500" : "text-primary"}`}>
              {result}
            </p>
          )}
        </form>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-muted-foreground text-sm mb-4">Connect with me:</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Twitter
              </a>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-sm mb-4">Direct Contact:</p>
            <a href="tel:+639766379761" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              +63 976 637 9761
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
