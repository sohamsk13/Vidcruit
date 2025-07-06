# 🎥 Vidcruit — Video Interview Platform 


**Vidcruit** is a modern, real-time video interview platform built using **Next.js 14 App Router**, integrated with **Stream Video SDK**, **Convex DB**, and **Clerk** for authentication and user management.

It empowers interviewers and recruiters to conduct seamless technical interviews with features like:

- 🎥 Live video calls
- 📺 Screen sharing & recording
- ⌛ Interview scheduling
- 💻 Collaborative code editor
- 📊 Dashboard to track all interviews

A key feature of Vidcruit is its **interviewer rating system** — helping interviewers **track and assess the performance of multiple candidates or students** by adding:

- ✅ **Ratings**
- 📝 **Custom feedback/descriptions**
- 📁 All stored and accessible via a clean dashboard

This makes Vidcruit ideal not only for technical interviews but also for educational and hiring platforms focused on **detailed candidate evaluation**.

---

## 🚀 Features

- 🔒 Authentication & Authorization (Clerk)
- 🎥 Video Calls using Stream SDK
- 📺 Screen Sharing & Recording
- 🧠 Real-Time Collaboration & State Management (Convex)
- 🧑‍💼 Interviewer and Candidate Dashboards
- 🖥️ Integrated Code Editor with Live Feedback
- ⏰ Scheduling Interviews & Meeting Cards
- 💬 Comments, Dialogs, and Feedback
- ✨ Beautiful UI with TailwindCSS + shadcn/ui
- 🧩 App Router + Server Components + Server Actions
- 🛠️ Production-ready with SSR, CSR, and Static Routes

---

## 🧱 Tech Stack

| Layer        | Tech                                     |
|--------------|------------------------------------------|
| Frontend     | Next.js 14 (App Router) + TypeScript     |
| Auth         | Clerk                                    |
| Database     | Convex                                   |
| Video SDK    | Stream                                   |
| Styling      | TailwindCSS + Shadcn UI                  |
| Backend      | Node.js                                  |

---





## 📸 Screenshots

<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/user-attachments/assets/c5478ae0-64ab-4687-9a1e-10e43bbba09f" width="500" /></td>
      <td><img src="https://github.com/user-attachments/assets/59bba193-9792-43f3-9530-d89c29ece98b" width="500" /></td>
    </tr>
    <tr>
      <td><img src="https://github.com/user-attachments/assets/e0615052-d861-4a55-bd0d-0d54c093af91" width="500" /></td>
      <td><img src="https://github.com/user-attachments/assets/aa3c4f25-198e-4177-93e6-ce45733064d1" width="500" /></td>
    </tr>
    <tr>
      <td colspan="2" align="center">
        <img src="https://github.com/user-attachments/assets/0fe51a45-a52c-42e2-9fa0-70c4feb9db57" width="500" />
      </td>
    </tr>
  </table>
</div>








---

## 🧪 Key Modules

| Module               | Description                                       |
|----------------------|---------------------------------------------------|
| `useMeetingActions`  | Custom hook to control meeting flow              |
| `MeetingPage`        | Live video call interface                        |
| `RecordingsPage`     | View, play, and manage recorded sessions         |
| `SchedulePage`       | Create, edit, and view upcoming interviews       |
| `MeetingCard`        | Reusable card component for interview details    |
| `CommentDialog`      | Dialog popup for interviewer feedback            |

---

## 🛠️ Setup & Development

### 1. Clone the Repository

```bash


env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
🔐 You can get these from Clerk, Stream, and Convex

🧑‍💻 Local Development

npm run dev
