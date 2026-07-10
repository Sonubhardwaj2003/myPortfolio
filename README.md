# 🌐 Sonu's Developer Portfolio

A modern, responsive and modular Developer Portfolio built using HTML, Tailwind CSS and Vanilla JavaScript. The portfolio showcases my projects, technical skills, achievements, education and provides a fully functional contact form using EmailJS.

---

# 🚀 Live Demo

🔗 Portfolio : https://YOUR_PORTFOLIO_LINK

---

# 📷 Preview

(Add portfolio screenshot here)

---

# 📌 Features

- ✅ Fully Responsive Design
- ✅ Modern UI with Glassmorphism
- ✅ Sticky Navigation Bar
- ✅ Typing Animation
- ✅ Dynamic Project Section
- ✅ Timeline Education Section
- ✅ Categorized Skills Section
- ✅ Achievement Cards
- ✅ Leadership & Activities Timeline
- ✅ Functional Contact Form (EmailJS)
- ✅ Copy Email & Phone
- ✅ Resume Download
- ✅ Scroll To Top
- ✅ Component Based Architecture
- ✅ Easy to Maintain
- ✅ Placement Ready UI

---

# 🛠 Tech Stack

### Frontend

- HTML5
- Tailwind CSS
- JavaScript (ES6)

### Icons

- Font Awesome

### Fonts

- Google Fonts (Poppins)

### Email Service

- EmailJS

### Deployment

- GitHub Pages / Vercel

---

# 📁 Folder Structure

```text
Portfolio/

│

├── assets/
│   ├── images/
│   └── resume/

│

├── components/
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── education.html
│   ├── skills.html
│   ├── projects.html
│   ├── achievements.html
│   ├── activities.html
│   ├── contact.html
│   └── footer.html

│

├── css/
│   └── style.css

│

├── js/
│   ├── script.js
│   ├── navbar.js
│   ├── typing.js
│   ├── animations.js
│   ├── projects.js
│   ├── projectsData.js
│   ├── achievements.js
│   ├── achievementsData.js
│   ├── activities.js
│   ├── activitiesData.js
│   ├── contact.js
│   └── footer.js

│

└── index.html
```

---

# ⚙️ Project Architecture

The project follows a **Component-Based Architecture**.

Instead of writing the complete portfolio inside a single HTML file, every section is divided into reusable components.

Example

```text
Navbar

↓

Hero

↓

About

↓

Education

↓

Skills

↓

Projects

↓

Achievements

↓

Activities

↓

Contact

↓

Footer
```

Each component is loaded dynamically using JavaScript.

This architecture improves

- Readability
- Maintainability
- Scalability
- Reusability

---

# 💡 Why Component-Based Architecture?

Instead of writing 1500+ lines inside one HTML file, every section is stored separately.

Benefits

- Easy debugging
- Easy maintenance
- Reusable code
- Better project organization
- Similar to React component architecture

---

# 📂 Dynamic Data Rendering

Projects, Achievements and Activities are rendered dynamically.

Instead of hardcoding HTML cards, all information is stored inside JavaScript arrays.

Example

```javascript
const projects = [
  {
    title: "SnapGallery",
    description: "...",
    tech: ["React", "CSS"],
  },
];
```

Cards are automatically generated using JavaScript.

Benefits

- Easily add new projects
- No duplicate HTML
- Cleaner code
- Scalable architecture

---

# 🎨 UI Design

The UI follows modern design principles.

- Glassmorphism
- Rounded Cards
- Responsive Layout
- Gradient Text
- Hover Animations
- Soft Shadows
- Consistent Color Palette

---

# 📱 Responsive Design

Designed for

- Mobile
- Tablet
- Laptop
- Desktop

Tailwind CSS utility classes are used to achieve responsiveness.

---

# 📧 Contact Form

The contact form uses **EmailJS**.

Workflow

```text
User

↓

Fill Form

↓

EmailJS

↓

Gmail

↓

Portfolio Owner
```

No backend server is required.

Messages are directly delivered to my Gmail.

---

# 📌 Challenges Faced

### 1. Large HTML File

Initially everything was inside one HTML file.

Solution

Converted every section into reusable components.

---

### 2. Repetitive Code

Project cards were hardcoded.

Solution

Created dynamic rendering using JavaScript arrays.

---

### 3. Contact Form

Backend was required.

Solution

Integrated EmailJS.

---

### 4. Responsiveness

Maintaining UI consistency across devices.

Solution

Used Tailwind CSS responsive utilities.

---

# 🚀 Future Improvements

- Dark / Light Mode
- Project Filtering
- Blog Section
- GitHub API Integration
- LeetCode API Integration
- Visitor Counter
- Project Search
- Multi-language Support
- React Migration
- Admin Dashboard

---

# 🧠 Interview Questions & Answers

## Q1. Why did you build this portfolio?

To showcase my technical skills, projects and achievements in a professional way while also learning component-based frontend architecture.

---

## Q2. Why didn't you use React?

I intentionally built this portfolio using Vanilla JavaScript to strengthen my understanding of DOM manipulation, modular architecture and JavaScript fundamentals before moving to frameworks.

---

## Q3. Why Tailwind CSS?

- Faster Development
- Utility First
- Responsive
- Cleaner UI
- Less CSS
- Easy Maintenance

---

## Q4. How are components loaded?

JavaScript fetches every HTML component and injects it into the main page.

Example

```javascript
loadComponent("hero", "components/hero.html");
```

---

## Q5. Why use JavaScript arrays for Projects?

Instead of manually creating project cards, project information is stored inside arrays.

Whenever a new project is added, only one object needs to be inserted.

The UI updates automatically.

---

## Q6. How does EmailJS work?

EmailJS connects the frontend directly to Gmail.

Workflow

```text
Form

↓

EmailJS

↓

Gmail

↓

Receiver
```

No backend is required.

---

## Q7. What is the biggest advantage of this architecture?

The portfolio is modular, reusable, scalable and easy to maintain.

---

## Q8. If you rebuild this project, what would you improve?

- Convert to React
- Use TypeScript
- Add Theme Toggle
- Integrate GitHub API
- Integrate LeetCode API
- Add Blog
- Improve Animations
- Optimize Performance

---

# 👨‍💻 Author

## Sonu Bhardwaj

📧 Email

sb59437568@gmail.com

🌐 Portfolio

(Add Portfolio Link)

💼 LinkedIn

https://www.linkedin.com/in/sonu-bhardwaj-3363742ab/

💻 GitHub

https://github.com/Sonubhardwaj2003

🟠 LeetCode

https://leetcode.com/u/Sonu_2015/

---

⭐ If you like this project, don't forget to give it a Star on GitHub.
