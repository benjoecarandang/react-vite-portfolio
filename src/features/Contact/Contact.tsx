import React, { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const result = await emailjs.sendForm(
        'service_gzxlp5j', // Your EmailJS service ID
        'template_yxrekhe', // Your EmailJS template ID
        formRef.current!,
        'DOo80TmH7yoVRmO2Z' // Your EmailJS public key
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", title: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "benjoe.carandang@gmail.com",
      link: "mailto:benjoe.carandang@gmail.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/benjoe-carandang",
      link: "https://www.linkedin.com/in/benjoe-carandang-8021281a1/"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/benjoecarandang",
      link: "https://github.com/benjoecarandang"
    }
  ];

  return (
    <section id="get-in-touch" className="py-20 relative overflow-hidden">
      <Container>
        <SectionHeadings
          tagline="Get In Touch"
          title="Let's Work Together"
          className="text-left !items-start !justify-start"
        >
          <p>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </SectionHeadings>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">
                Availability
              </h4>
              <p className="text-gray-400 mb-3">I'm currently available for:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Full-time positions</li>
                <li>• Contract work</li>
                <li>• Freelance projects</li>
                <li>• Technical consulting</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-center">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-center">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
