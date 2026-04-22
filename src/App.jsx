// ===================== App.jsx =====================
import { useState, useEffect } from "react";
import "./App.css";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
];

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-left">
          <img src="/logo.png" className="logo" alt="logo" />
          <div>
            <h1>Shashwat Chikitsa Parichay Shivir</h1>
            <p className="tagline">Heal Naturally | Learn Deep | Transform Life</p>
          </div>
        </div>

        {/* BABA JI IMAGE TOP RIGHT */}
        <div className="header-right">
          <img src="/baba.jpg" alt="baba" className="baba-top" />
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <h2>4 Din Ka Intensive Healing & Training Program</h2>
        <p>
          Kya aap apni health ko naturally improve karna chahte hain?
          Kya aap medicines ke bina disease ka solution samajhna chahte hain?
        </p>
        <p className="highlight">
          Yeh sirf ek seminar nahi — ek LIFE CHANGING EXPERIENCE hai
        </p>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section">
        <h2>Yeh Shivir Kya Hai?</h2>
        <p>
          Shashwat Chikitsa Parichay Shivir ek 4 din ka intensive program hai
          jahan aapko theory ke sath-sath REAL PRACTICAL knowledge diya jata hai.
          Yahan aapko live patients par treatment dikhaya jata hai aur aap khud
          bhi seekhkar apply karte ho.
        </p>
        <p>
          Yeh program specially un logon ke liye design kiya gaya hai jo apni
          health ko samajhna chahte hain aur dusron ki help karna chahte hain.
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section">
        <h2>Is Shivir Me Aapko Milega</h2>
        <ul>
          <li>✔ Live Treatment Demonstration (Real Patients)</li>
          <li>✔ Pulse Diagnosis (Nadi Parikshan) Practical Training</li>
          <li>✔ Body Anatomy & Physiology Simplified</li>
          <li>✔ Hormonal Imbalance ka Natural Solution</li>
          <li>✔ Chronic Diseases ka Root Treatment</li>
          <li>✔ Step-by-step Treatment System</li>
          <li>✔ Hands-on Practice & Guidance</li>
        </ul>
      </section>

      {/* ================= LEARNING ================= */}
      <section className="section dark">
        <h2>Aap Kya Seekhoge?</h2>
        <ul>
          <li>Body ka complete mechanism (andar kya hota hai)</li>
          <li>Disease ka real root cause kaise identify kare</li>
          <li>Medicine ke bina healing kaise possible hai</li>
          <li>Pulse se disease ka pata kaise lagate hain</li>
          <li>Har patient ko kaise approach kare</li>
        </ul>
      </section>

      {/* ================= WHO SHOULD JOIN ================= */}
      <section className="section">
        <h2>Yeh Shivir Kin Logon Ke Liye Hai?</h2>
        <ul>
          <li>✔ Jo apni health naturally improve karna chahte hain</li>
          <li>✔ Doctors / Healers / Therapists</li>
          <li>✔ Students jo alternative medicine seekhna chahte hain</li>
          <li>✔ Jo log baar-baar medicines lene se pareshan hain</li>
          <li>✔ Jo dusron ki help karna chahte hain</li>
        </ul>
      </section>

      {/* ================= SLIDER ================= */}
      <section className="slider">
        <h2>Previous Shivir Glimpses</h2>
        <p>Yeh photos previous shivirs ke real moments ko dikhati hain</p>
        <img src={images[index]} alt="slider" />
      </section>

      {/* ================= BABA SECTION ================= */}
      <section className="section baba">
        <h2>Expert Guidance</h2>
        <img src="/baba.jpg" alt="baba" />
        <p>
         जीवन परिचय – बाबा स्वामी भक्ति प्रकाश जी
वैदिक शाश्वत चिकित्सा मर्मज्ञ | आध्यात्मिक संत

बाबा स्वामी भक्ति प्रकाश जी अखिल भारत वर्षीय धर्म संघ, करपात्री फाउंडेशन से संबद्ध प्रतिष्ठित संत हैं। विगत 30 वर्षों से “योगी–निरोगी–उपयोगी” सूत्र पर आधारित साधना, अध्ययन एवं समाज सेवा में निरंतर सक्रिय हैं।

आप अथर्ववेद आधारित शाश्वत चिकित्सा के गहन ज्ञाता एवं मर्मज्ञ हैं। शारीरिक, मानसिक एवं आध्यात्मिक स्वास्थ्य हेतु समाज सेवा में समर्पित हैं।

Angiras Research Of Shashwat Healing Foundation (Director)
Deshi Aspatal Pvt Ltd Delhi (Co-Director)
KDU Natural Pvt Ltd (Co-Director)
Mahila Swavlamban Trust (President)
        </p>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="section">
        <h2>Is Shivir Ke Baad Aap...</h2>
        <ul>
          <li>✔ Disease ko logically samajh paoge</li>
          <li>✔ Apni aur dusron ki health improve kar paoge</li>
          <li>✔ Basic level pe treatment confidently kar paoge</li>
          <li>✔ Ek nayi skill develop kar paoge</li>
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Limited Seats Available</h2>
        <p>
          Har batch me limited log hi liye jate hain taki proper training di ja
          sake. Agar aap serious ho apni life change karne ke liye, toh abhi
          register kare.
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Shashwat Chikitsa | All Rights Reserved NextGen Business Agencey</p>
        <p>Contact: +91 7970365235| Email: swamibprakash@gmail.com</p>
      </footer>

      {/* ================= FLOATING BUTTON ================= */}
      <a
        href="https://rzp.io/l/YOUR-LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn"
      >
        Enroll Now
      </a>

    </div>
  );
}
