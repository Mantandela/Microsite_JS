
# USIU First-Year Companion (v1)

## Project Summary

The **USIU First-Year Companion** is a lightweight microsite designed to support **freshmen during Orientation Week**. It provides a **personalized greeting**, a simple **campus cost & snack budgeting estimator**, and a **theme toggle** (day/night mode with USIU brand colors).

The microsite also communicates **essential orientation information**, including:

* Steps for **course registration** and **academic advising**.
* How to obtain **library course texts**.
* Key highlights of the **academic calendar**.
* **Campus navigation resources** (with a placeholder for a virtual tour video).
* Insights into **student life & community** (clubs, sports, and events).
* A **FAQs section** answering common first-year concerns.

This v1 is built with **only vanilla JavaScript, HTML5, and CSS** — no frameworks — to demonstrate core programming skills.

## Features

* **Personalized Greeting** → prompts for the student’s name and displays it dynamically.
* **Budget Estimator** → calculates weekly transport and snack costs, with a 10% saving tip.
* **Theme Toggle** → switches between light/dark themes, styled in **USIU’s brand colors (blue, yellow, white)**.
* **Orientation Content** → placeholders for course registration, library access, academic calendar, student life, and FAQs.
* **Debuggability** → all inputs and outputs are logged to the browser console.

## 🌐 Live Demo
This site is live at: https://mantandela.github.io/prime-wigs-site-css-docker/

##  How to Run Locally

1. Clone or download this repository.
2. Open the `index.html` file in any modern browser.
3. On page load, you will be prompted for your name.
4. Click **Run Estimator** to calculate your weekly budget.
5. Click **Toggle Theme** to switch between day/night modes.
   
## The project was also containerized with Docker 
 # Build t
docker build -t usiu-first-year:v1 .
# Run 
docker run -p 8080:80 usiu-first-year:v1
# Open in browser
http://localhost:8080
# Push
docker push delmantan/usiu-first-year:v1

##  Known Limitations (v1)

* Uses **prompt() dialogs** for inputs (not user-friendly for production).
* No backend or persistent storage — calculations reset on reload.
* Content includes placeholders for:

  * **Advising form link**
  * **eLibrary link**
  * **Academic Calendar link**
  * **Clubs & Societies directory**
  * **Counseling, Clinic, IT Helpdesk links**
  * **Virtual Tour video**
* Theme toggle is basic (background + text color only).

##  Next Steps (v2/v3)

* To Replace `prompt()` with **forms or modals** for smoother input.
* Add a **monthly budget planner** with export options.
* Implement **auto-theme switching** (based on system time).
* Expand content to include **community forums and mentorship sign-up**.

