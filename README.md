<div align="center">
  <img src="/assets/gitdrive_256x256.png" alt="GitDrive Logo" width="140" style="border-radius: 20%;" />
  <h2>GitDrive</h2>
  <p>GitDrive is a personal file storage and management solution backed by a private GitHub repository. It allows you to seamlessly upload, pull, manage, and share your files in a beautifully designed user interface.</p>


<div align="center">
  <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=FFFFFF" alt="React badge" style="height:28px;margin:4px;vertical-align:middle;" /></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" alt="NPM" style="height:28px;margin:4px;vertical-align:middle;" /></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Vite-9135FF?style=for-the-badge&logo=Vite&logoColor=FFFFFF" alt="React Vite" style="height:28px;margin:4px;vertical-align:middle;" /></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS badge" style="height:28px;margin:4px;vertical-align:middle;" /></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge" style="height:28px;margin:4px;vertical-align:middle;" /></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Node.js-%235FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js badge" style="height:28px;margin:4px;vertical-align:middle;" /></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker badge" style="height:28px;margin:4px;vertical-align:middle;" /></a>
</div>



</div>

---

## 🌐 Live Demo
**[https://git-drive-eight.vercel.app/](https://git-drive-eight.vercel.app/)**

## 💻 Tech Stack
- **Frontend**: React, Vite, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Backend/Storage**: Node.js, Express, GitHub REST API
- **Deployment**: Vercel

---
# Screenshot 
![image](assets/gitdrive_128x128.png)

---

## 📂 System Project Structure

Here is a visual map of the files in this simulated repository:

```
GitDrive
├── uploads
│   └── drive
│       ├── Images
│       │   ├── 15df423d5ff91832651e720691486eed.jpg
│       │   └── de771e13a8e482b57981c83626258e58.jpg
│       ├── Music
│       │   ├── Chainsaw Man – The Movie： Reze Arc – Opening Movie.mp3
│       │   ├── DAN DA DAN - Otonoke by Creepy Nuts.mp3
│       │   ├── Solo Leveling S2 - Un-Apexby TK.mp3
│       │   ├── Solo Leveling S2 -＂ReawakeR＂ by LiSA .mp3
│       │   └── Tove Lo - Habits.mp3
│       ├── Projects
│       │   ├── drone_revolution.html
│       │   ├── eCommerce_page.html
│       │   └── raspberry_pi_5.html
│       ├── Videos
│       │   ├── Michael Jackson - Billie Jean (Official Video) [Zi_XLOBDo_Y].mp4
│       │   └── Quicksilver Saves Everyone - Sweet Dreams - X-Men： Apocalypse (2016) Movie Clip HD [ZnZqB5Z75zI].mp4
│       ├── code-in-the-repo.txt
│       ├── config.json
│       ├── database.json
│       ├── mockStorageEngine.js
│       ├── README.txt
│       └── setup.sh
├── assets
│   └── gitdrive_128x128.png
├── src
│   ├── components
│   │   ├── DesktopFramePreview.tsx
│   │   ├── FileCard.tsx
│   │   ├── FilePreviewModal.tsx
│   │   ├── GithubCredentialsModal.tsx
│   │   ├── Sidebar.tsx
│   │   └── VersionHistoryDrawer.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── index.html
├── metadata.json
├── tsconfig.json
├── vite.config.ts
├── docker-compose.yml
├── Dockerfile
├── server.ts
├── package.json
└── README.md
```

## 🚀 How to Install

1. Clone the repository:
```bash
git clone https://github.com/rajprajapati2001/GitDrive.git
cd GitDrive
```

2. Install dependencies:
```bash
npm install
```

## ⚙️ Setup Environment Variables

To allow the application to securely store files, you need to provide your GitHub credentials and a target repository. 

Create a `.env` file in the root directory and add the following variables:
```env
GITHUB_TOKEN=your_personal_access_token
GITHUB_OWNER=your_github_username
GITHUB_REPO=your_private_repository_name
```
*(Alternatively, you can configure these directly in the UI under **Setup Storage**.)*
*(For `npm run dev` as **Local Storage** use `.env.local` fileile.)*

## 🏃‍♂️ Run Locally

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```


---
### 🐋 Run via Docker (Lightweight Production)

1. Spin Up the Container (Your `.env` file configured in the root directory, start the stack in detached mode):
```bash
docker compose up -d --build
```
2. Verify and View Logs (Check the status of your running container):
```bash
docker compose ps
```
To monitor application and file-sync logs in real-time:
```bash
docker compose logs -f gitdrive
```
3. Access Your App
Open your browser and navigate to:
👉 http://localhost:3000

### 🛑 Tear Down & Clean Up

To stop the container and disconnect the internal bridge networks cleanly:

```bash
docker compose down
```
To remove the built production image and wipe cached layers to reclaim disk space:

```bash
docker rmi gitimage_drive
docker system prune -a --volumes
```



























## 📜 License
This project is open-source and available under the [MIT License](https://github.com/rajprajapati2001/GitDrive/).

---
**Raj Prajapati**

Developed on `27th June 2026`/`Saturday`.