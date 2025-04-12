// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Example popup alert on 'Get Started' button click
document.querySelector('.btn.btn-danger')?.addEventListener('click', () => {
  alert("Let's get started with ProjectPulse! 🚀");
});

// Optional: Hover effect to scale cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.03)';
    card.style.transition = 'transform 0.2s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Scroll to section (used in specific functions)
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// List of projects
const projects = [
  // 🎨 Image Processing & Computer Vision
  {
    title: "ShadowNet: Adaptive Shadow Removal from Natural Images",
    icon: "fa-adjust",
    desc: "Image enhancement model using deep learning to remove shadows for better scene understanding."
  },
  {
    title: "NeuroScan: Brain MRI Classification using Transfer Learning",
    icon: "fa-brain",
    desc: "ResNet-based architecture for automated MRI image classification."
  },

  // 🔤 Natural Language Processing
  {
    title: "LinguaMood: Sentiment Classification on Social Media",
    icon: "fa-language",
    desc: "Transformer-based sentiment analysis model tailored for tweets and short posts."
  },
  {
    title: "AutoSummarizer Pro: Abstractive Text Summarization",
    icon: "fa-align-left",
    desc: "BERT & GPT-based summarization engine for generating human-like summaries from long texts."
  },

  // 📊 Predictive Modeling
  {
    title: "AlphaTrade: Time-Series Stock Trend Prediction with LSTM",
    icon: "fa-chart-line",
    desc: "High-accuracy stock trend prediction model using historical time-series data."
  },
  {
    title: "GradWise: Academic Success Predictor using Ensemble Learning",
    icon: "fa-user-graduate",
    desc: "Predicts student performance using Random Forest and boosting techniques."
  },

  // 🔍 Object Detection / Surveillance
  {
    title: "Intrudex: Smart Surveillance with YOLOv5",
    icon: "fa-video",
    desc: "Real-time intruder detection and tracking using YOLOv5 and OpenCV."
  },

  // 🎙️ Audio & Speech
  {
    title: "SpeechMorph: Accent Detection and Classification",
    icon: "fa-microphone-alt",
    desc: "Deep audio classifier trained to identify English speaker accents from audio input."
  },

  // 🧠 General Deep Learning Application
  {
    title: "PoseNetX: Human Pose Estimation for Fitness Tracking",
    icon: "fa-running",
    desc: "Real-time body keypoint detection system for exercise form correction and tracking."
  }
];

// Populate project list dynamically
const projectList = document.getElementById('projectList');

if (projectList) {
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'col-12';
    card.innerHTML = `
      <div class="card project-card shadow-sm p-3 mb-3">
        <div class="d-flex align-items-start">
          <i class="fas ${proj.icon} fa-lg text-primary me-3 mt-1"></i>
          <div>
            <h6 class="mb-1 fw-bold">${proj.title}</h6>
            <small class="text-muted">${proj.desc}</small>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-sm mt-3 w-100" onclick="alert('More details coming soon!')">More Info</button>
      </div>
    `;
    projectList.appendChild(card);
  });
}
const counters = document.querySelectorAll('.counter');
const speed = 300; // lower is faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText ;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target ;
    }
  };

  updateCount();
});
