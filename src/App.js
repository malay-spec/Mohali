import { useState, useRef, useEffect } from "react";

const COLLEGE_INFO = `
You are Riya, a warm and friendly admission counselor for Rayat Bahra University (RBU), Mohali — powered by Sunstone School of Technology & Computer Applications.

You help students from Himachal Pradesh, Punjab, Jammu & Kashmir, and Chandigarh choose between:
1. BTech-CSE (B.Tech Computer Science & Engineering) — 4 years
2. BCA (Bachelor of Computer Applications) — 3 years

━━━━━━━━━━━━━━━━━━━━━━━━━━━
B.TECH CSE — COMPLETE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Duration: 4 years
Internship: 6 or 9 months (built into program)
Projects: 5 live/simulated projects
Career Tracks: AI & Machine Learning | Full Stack Web Development | Data Science / Data Engineering | AWS Cloud Computing | Cyber Security
Eligibility: 10+2 with PCM (Physics, Chemistry, Math), minimum 45%

Year-by-Year Journey:
Year 1 — Build Strong Foundations: Programming fundamentals, logical thinking, problem solving, dev tools, basic project building. Outcomes: Code confidently from day one, structured thinking mindset, complete basic projects.
Year 2 — Strengthen Core & Build Projects: DSA, CS fundamentals, full-stack basics, AI-assisted dev, intermediate projects. Outcomes: Solid DSA grasp, build end-to-end apps, leverage AI tools for faster development.
Year 3 — Specialize & Gain Industry Exposure: Full stack, AI/ML, Data, Cloud, Cyber Security, real-world projects. Outcomes: Deep expertise in chosen career track, strong portfolio, internship exposure.
Year 4 — Placement Prep & Career Launch: Advanced DSA, mock interviews, aptitude, communication, portfolio finalization. Outcomes: Interview-ready, polished portfolio, secure internships and full-time roles.

Coding Training:
550+ hours of structured coding training | 2 hours daily DSA practice | 300+ LeetCode challenges | 100+ hours structured interview preparation | AMCAT assessments from Semester 1

Industry-Recognized Certifications:
Full Stack: MERN, REST APIs — MongoDB, React, Node.js, JavaScript, HTML5, Docker
AI & ML: Deep Learning, NLP, MLOps — Python, TensorFlow, PyTorch, Pandas, Jupyter, Kubernetes
AWS Cloud: Infrastructure, DevOps, Serverless — AWS EC2, AWS S3, Terraform, Docker
Cyber Security: Ethical Hacking, Network Security, SOC — Linux/Kali, Python, Bash, AWS Security
Data Science: Analytics, Pipelines — Pandas, PostgreSQL, Spark, Jupyter, AWS Redshift

Placement Highlights (Audited by B2K Analytics — official auditor for IIM Ahmedabad):
1,400+ offers received | 7x more companies than top-tier private institutions | 1,170+ offers from legacy recruiters | 63% higher ROI vs private institutions | 1,020+ opportunities across sectors | 200+ placement opportunities per student OR get 1st year fee back

━━━━━━━━━━━━━━━━━━━━━━━━━━━
BCA — COMPLETE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Duration: 3 years (6 semesters)
Internship: 6 months (built into program)
Projects: 5 live/simulated projects (one per semester)
Career Tracks: AI/ML | Full Stack Web Development | Data Science | Cloud | Cyber Security
Eligibility: 10+2 any stream, minimum 45%

Year-by-Year Journey:
Year 1 — Start Coding. Think Like a Developer: Python, C/C++, HTML & CSS, Git, AI coding tools, problem solving. Build first app with AI as learning partner.
Year 2 — Build Projects. Think Like an Engineer: DSA, React, Node.js, SQL/MongoDB, REST APIs, system design basics. Build 3-5 portfolio projects.
Year 3 — Specialize. Get Hired: Career track (AI/ML, Cloud, etc.), industry projects, mock interviews. Placement-ready with strong portfolio.

Coding Training: 500+ hours | 300+ LeetCode challenges | 2 hours daily DSA | 100+ hours interview prep | AMCAT from Semester 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMON SUNSTONE FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI Tools (2 new per year): ChatGPT, Google Gemini, Claude, Grok, GitHub, TensorFlow, PyTorch, AWS, SQL, Zapier, n8n, Figma

Industry Mentors: Ashish Jha (Google) | Neeraj Sharma (IIT Roorkee) | Ketan Khatu (Accenture) | Anand Vardhan (Infosys) | Sumit Mudgal (AI Startup Founder) | Abhinav Agarwal (CMO BharatPe) | 30+ exclusive sessions

Campus Life (Mohali): Management Fest (prizes ₹2 Lakh) | Tech Fest CodeQuest (prizes ₹1 Lakh) | Cultural Fest | Sports Week Educathon 5K/10K | HPAIR International Conclave | Student Exchange Program | Coding, Sports, Cultural Clubs | Freshers Party

Startup Launchpad: Build startup as part of curriculum | Pre-seed ideation funding | Expert mentorship | Investor networking | Dropshipping and MVP challenges

Global Immersion Program (GIP): Optional 10-day trip to Dubai or Singapore

Sunstone App: 1,000+ tech jobs & internships | LMS | Interview prep | Daily tracker | Student community across India

About Sunstone: Founded 2019 | 1,200+ recruiter network | 20,000+ students | 20+ campuses pan-India
Pan-India campuses: Mohali, Ghaziabad, Sonipat, Bengaluru, Dehradun, Jaipur, Faridabad, Coimbatore, Indore, Guwahati, Chennai, Pune, Bhopal
Awards: Top Growth Company in Digital Learning | Edtech Company of Year | Best Placements Award | Leading Innovation in AI-Powered Learning

━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCHOLARSHIPS & FEES
━━━━━━━━━━━━━━━━━━━━━━━━━━━
NSAT: Scholarships up to 100% based on percentile | Tests aptitude, logical reasoning, problem-solving | Equal opportunity for all students
SAT: Mandatory for admission | Determines scholarship along with Class 10, 12 marks and gender diversity
Zero Cost EMI: No interest, no processing fee, no collaterals, no hidden charges | 72-hour digital approval | Start monthly payments after joining
Exact Fees: Campus-specific — counselor will share exact Mohali campus fee on WhatsApp

━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADMISSION PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━
BTech: Apply at sunstone.in → NSAT (up to 100% scholarship) OR SAT + docs → Accept offer
BCA: Apply at sunstone.in → SAT + screening interview + docs → Accept offer

━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR PERSONALITY & RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Speak like a warm helpful elder sister — not a brochure. Use natural Hindi-English: "Bilkul sahi!", "Koi tension nahi!", "Bahut badhiya!", "Ekdum perfect!"
KEEP RESPONSES SHORT — 3 to 5 lines max. Instagram chat, not an essay!
Use 1-2 emojis per message. Always end with a question to keep conversation going.
Never recommend other colleges. Never be negative.
For exact fees: "Our counselor will share exact Mohali campus fees on WhatsApp — Zero Cost EMI is available too!"

━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEAD CAPTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━
After 2-3 exchanges OR when student shows interest, naturally say:
"Acha! Let me connect you with our RBU Mohali admission team for full details. Can I quickly note:
1. Your Name
2. WhatsApp Number
3. Email ID"

Once collected: "Thank you [Name]! Our team will reach you on WhatsApp within 24 hours. You're one step closer to a great tech career!"

If referral asked: "Great! Sunstone has a referral program — refer a friend and both of you benefit! Our counselor will share full details when they call you."
`;

const QUICK_REPLIES = [
  "BTech-CSE details 💻",
  "BCA details 📱",
  "Placements & Jobs 💼",
  "Scholarship & Fees 🎓",
  "Sunstone Benefits ⭐",
  "Refer a Friend 🎁",
];

const WELCOME = {
  role: "assistant",
  text: "Namaste! 👋 I'm Riya, your personal admission guide for Rayat Bahra University, Mohali — powered by Sunstone.\n\nLooking for BTech-CSE or BCA? You're in the right place! 🎓\n\nKya jaanna chahte ho? What would you like to know?",
};

function ReferralModal({ onClose }) {
  const [form, setForm] = useState({ yourName: "", yourPhone: "", friendName: "", friendPhone: "", program: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.yourName.trim()) e.yourName = true;
    if (!form.yourPhone.trim()) e.yourPhone = true;
    if (!form.friendName.trim()) e.friendName = true;
    if (!form.friendPhone.trim()) e.friendPhone = true;
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const inp = (field) => ({
    width: "100%", background: "rgba(255,255,255,0.06)",
    border: `1px solid ${errors[field] ? "rgba(248,113,113,0.6)" : "rgba(255,255,255,0.12)"}`,
    borderRadius: 12, padding: "10px 14px", color: "#fff", fontSize: 14,
    outline: "none", boxSizing: "border-box", fontFamily: "inherit",
  });

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.82)", zIndex: 200,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ background: "linear-gradient(160deg,#14142a,#1a1535)",
        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 24,
        width: "100%", maxWidth: 360, boxShadow: "0 24px 60px rgba(0,0,0,0.7)" }}>
        {!submitted ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <div style={{ fontSize: 38, marginBottom: 6 }}>🎁</div>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>Refer a Friend</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginTop: 4 }}>Share the opportunity. Support a dream.</div>
              <div style={{ marginTop: 10, background: "rgba(252,176,69,0.1)",
                border: "1px solid rgba(252,176,69,0.25)", borderRadius: 10,
                padding: "8px 12px", color: "#fcb045", fontSize: 12 }}>
                ✨ Sunstone Referral Program — both of you benefit!
              </div>
            </div>
            {[
              { label: "Your Name", name: "yourName", ph: "Your full name" },
              { label: "Your WhatsApp Number", name: "yourPhone", ph: "+91 XXXXX XXXXX" },
              { label: "Friend's Name", name: "friendName", ph: "Friend's full name" },
              { label: "Friend's WhatsApp Number", name: "friendPhone", ph: "+91 XXXXX XXXXX" },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: 10 }}>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginBottom: 4 }}>{f.label}</div>
                <input name={f.name} value={form[f.name]} placeholder={f.ph}
                  onChange={e => { setForm({ ...form, [f.name]: e.target.value }); setErrors({ ...errors, [f.name]: false }); }}
                  style={inp(f.name)} />
                {errors[f.name] && <div style={{ color: "#f87171", fontSize: 11, marginTop: 3 }}>Required</div>}
              </div>
            ))}
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginBottom: 4 }}>Program of Interest</div>
              <select value={form.program} onChange={e => setForm({ ...form, program: e.target.value })}
                style={{ ...inp("program"), color: form.program ? "#fff" : "rgba(255,255,255,0.3)" }}>
                <option value="">Select program</option>
                <option value="BTech-CSE">BTech-CSE</option>
                <option value="BCA">BCA</option>
                <option value="Both / Not sure">Both / Not sure</option>
              </select>
            </div>
            <button onClick={handleSubmit} style={{ width: "100%", padding: "12px",
              background: "linear-gradient(135deg,#6a0dad,#c0392b,#fcb045)",
              border: "none", borderRadius: 14, color: "#fff",
              fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 8 }}>
              Submit Referral 🚀
            </button>
            <button onClick={onClose} style={{ width: "100%", padding: "10px",
              background: "transparent", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14, color: "rgba(255,255,255,0.45)", fontSize: 13, cursor: "pointer" }}>
              Cancel
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 10 }}>🎉</div>
            <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Referral Submitted!</div>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
              Thank you {form.yourName}!<br />Our team will reach {form.friendName} on WhatsApp within 24 hours. 🙏
            </div>
            <div style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)",
              borderRadius: 12, padding: 12, color: "#4ade80", fontSize: 12, marginBottom: 18 }}>
              Both of you will hear from our counselor about referral benefits!
            </div>
            <button onClick={onClose} style={{ padding: "12px 32px",
              background: "linear-gradient(135deg,#6a0dad,#c0392b)",
              border: "none", borderRadius: 14, color: "#fff",
              fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              Back to Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [showReferral, setShowReferral] = useState(false);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText) return;
    if (userText === "Refer a Friend 🎁") { setShowReferral(true); setShowQuick(false); return; }

    setInput("");
    setShowQuick(false);
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    const next = [...messages, { role: "user", text: userText }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: COLLEGE_INFO,
          messages: next.map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.text })),
        }),
      });
      const data = await res.json();
      const reply = data?.content?.[0]?.text || "Sorry, couldn't connect right now. Please try again! 🙏";
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Oops! Connection issue. Please try again in a moment 🙏" }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#07071a 0%,#12103a 50%,#1a0a2e 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Segoe UI',system-ui,sans-serif", padding: 16 }}>

      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[{ top: "6%", left: "2%", size: 340, color: "rgba(252,70,107,0.1)" },
          { bottom: "8%", right: "2%", size: 300, color: "rgba(63,94,251,0.12)" },
          { top: "40%", left: "30%", size: 380, color: "rgba(131,58,180,0.07)" }
        ].map((g, i) => (
          <div key={i} style={{ position: "absolute",
            ...(g.top ? { top: g.top } : { bottom: g.bottom }),
            ...(g.left ? { left: g.left } : { right: g.right }),
            width: g.size, height: g.size, borderRadius: "50%",
            background: `radial-gradient(circle,${g.color} 0%,transparent 70%)` }} />
        ))}
      </div>

      {showReferral && <ReferralModal onClose={() => setShowReferral(false)} />}

      <div style={{ width: "100%", maxWidth: 400, background: "#0c0c1e", borderRadius: 36,
        boxShadow: "0 40px 80px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.06)",
        overflow: "hidden", display: "flex", flexDirection: "column", minHeight: 780 }}>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg,#6a0dad 0%,#c0392b 55%,#e67e22 100%)",
          padding: "16px 18px 14px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.55)", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 22 }}>🎓</div>
            <div style={{ position: "absolute", bottom: 1, right: 1, width: 12, height: 12,
              borderRadius: "50%", background: "#4ade80", border: "2px solid #0c0c1e" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Riya • RBU Counselor</div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>Rayat Bahra University, Mohali</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.18)", borderRadius: 20, padding: "5px 11px",
            fontSize: 11, color: "#fff", fontWeight: 600 }}>Sunstone</div>
        </div>

        {/* Badges */}
        <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "9px 16px", display: "flex", gap: 7, flexWrap: "wrap" }}>
          {[
            { label: "BTech-CSE", icon: "💻", r: "129,140,248" },
            { label: "BCA", icon: "📱", r: "52,211,153" },
            { label: "Mohali Campus", icon: "🏛️", r: "252,176,69" },
            { label: "1,400+ Placements", icon: "💼", r: "248,113,113" },
          ].map(b => (
            <div key={b.label} style={{ background: `rgba(${b.r},0.09)`,
              border: `1px solid rgba(${b.r},0.25)`, borderRadius: 20,
              padding: "3px 9px", fontSize: 10.5, color: `rgb(${b.r})`,
              display: "flex", alignItems: "center", gap: 3 }}>
              {b.icon} {b.label}
            </div>
          ))}
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px 8px",
          display: "flex", flexDirection: "column", gap: 10, background: "#09091a", minHeight: 440 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: "flex",
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              alignItems: "flex-end", gap: 8 }}>
              {m.role === "assistant" && (
                <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, marginBottom: 2,
                  background: "linear-gradient(135deg,#6a0dad,#c0392b)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🎓</div>
              )}
              <div style={{ maxWidth: "78%", whiteSpace: "pre-wrap", lineHeight: 1.65,
                fontSize: 14, padding: "10px 14px", color: "#fff",
                background: m.role === "user"
                  ? "linear-gradient(135deg,#6a0dad,#c0392b)"
                  : "rgba(255,255,255,0.055)",
                borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
                border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg,#6a0dad,#c0392b)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🎓</div>
              <div style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px 18px 18px 18px", padding: "13px 16px",
                display: "flex", gap: 5, alignItems: "center" }}>
                {[0, 1, 2].map(d => (
                  <div key={d} style={{ width: 7, height: 7, borderRadius: "50%",
                    background: "rgba(255,255,255,0.4)",
                    animation: `bounce 1.2s ease-in-out ${d * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          )}

          {showQuick && messages.length === 1 && (
            <div style={{ marginTop: 6 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 8, paddingLeft: 38 }}>
                Tap to ask 👇
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 38 }}>
                {QUICK_REPLIES.map((qr, i) => (
                  <button key={i} onClick={() => sendMessage(qr)} style={{
                    background: qr.includes("🎁") ? "rgba(252,176,69,0.1)" : "rgba(255,255,255,0.05)",
                    border: qr.includes("🎁") ? "1px solid rgba(252,176,69,0.3)" : "1px solid rgba(255,255,255,0.11)",
                    borderRadius: 20, color: qr.includes("🎁") ? "#fcb045" : "#e2e2f0",
                    padding: "7px 13px", fontSize: 12, cursor: "pointer" }}>
                    {qr}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Referral Banner */}
        <div onClick={() => setShowReferral(true)} style={{
          background: "linear-gradient(90deg,rgba(252,176,69,0.1),rgba(192,57,43,0.08))",
          borderTop: "1px solid rgba(252,176,69,0.18)", borderBottom: "1px solid rgba(252,176,69,0.1)",
          padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <span style={{ fontSize: 20 }}>🎁</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#fcb045", fontSize: 12, fontWeight: 700 }}>Refer a Friend to RBU</div>
            <div style={{ color: "rgba(255,255,255,0.38)", fontSize: 11 }}>Someone's dream college is one referral away →</div>
          </div>
          <div style={{ background: "rgba(252,176,69,0.13)", border: "1px solid rgba(252,176,69,0.28)",
            borderRadius: 20, padding: "4px 11px", fontSize: 11, color: "#fcb045" }}>Refer Now</div>
        </div>

        {/* Input */}
        <div style={{ background: "#0c0c1e", padding: "12px 14px 16px",
          borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", gap: 10, alignItems: "flex-end" }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.09)", borderRadius: 24, padding: "10px 16px" }}>
            <textarea ref={textareaRef} rows={1} value={input}
              onChange={e => {
                setInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
              }}
              onKeyDown={handleKey}
              placeholder="Ask about BTech-CSE, BCA, fees, placements..."
              style={{ background: "transparent", border: "none", outline: "none",
                color: "#fff", fontSize: 14, width: "100%", resize: "none",
                lineHeight: 1.55, fontFamily: "inherit" }} />
          </div>
          <button onClick={() => sendMessage()} disabled={!input.trim() || loading} style={{
            width: 44, height: 44, borderRadius: "50%", border: "none", flexShrink: 0,
            background: input.trim() && !loading
              ? "linear-gradient(135deg,#6a0dad,#c0392b)" : "rgba(255,255,255,0.07)",
            cursor: input.trim() && !loading ? "pointer" : "default",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            {loading ? "⏳" : "➤"}
          </button>
        </div>

        {/* Footer */}
        <div style={{ background: "#080814", textAlign: "center", padding: "7px 0 14px",
          fontSize: 10.5, color: "rgba(255,255,255,0.18)" }}>
          Rayat Bahra University, Mohali • Powered by Sunstone
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%,60%,100%{transform:translateY(0);opacity:0.4}
          30%{transform:translateY(-6px);opacity:1}
        }
        textarea::placeholder{color:rgba(255,255,255,0.25)}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:4px}
        select option{background:#1a1535;color:#fff}
      `}</style>
    </div>
  );
}
