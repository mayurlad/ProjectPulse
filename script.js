// Smooth scroll for navbar links
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// List of projects
const projects = [
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
  {
    title: "Intrudex: Smart Surveillance with YOLOv5",
    icon: "fa-video",
    desc: "Real-time intruder detection and tracking using YOLOv5 and OpenCV."
  },
  {
    title: "SpeechMorph: Accent Detection and Classification",
    icon: "fa-microphone-alt",
    desc: "Deep audio classifier trained to identify English speaker accents from audio input."
  },
  {
    title: "PoseNetX: Human Pose Estimation for Fitness Tracking",
    icon: "fa-running",
    desc: "Real-time body keypoint detection system for exercise form correction and tracking."
  }
];

// Dynamically populate the project list
window.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('projectList');
  if (projectList) {
    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'col-12 col-sm-6 col-md-4';
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

  // Start counter animation
  animateCounters();
});

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}
