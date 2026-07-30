# Ben 10 3D Landing Page

A modern interactive 3D Web Application built with **Next.js 16 (App Router)**, **React 19**, **Three.js**, **React Three Fiber (@react-three/fiber)**, and **Drei (@react-three/drei)** featuring 3D animated model loading with Draco compression support.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19 / TailwindCSS v4
- **3D Graphics Engine**: Three.js
- **React 3D Integration**: `@react-three/fiber` & `@react-three/drei`
- **Animation Libraries**: GSAP & Framer Motion
- **Language**: TypeScript

---

## 📁 Project Architecture & Folder Structure

```text
ben_3d_landing_page/
├── app/
│   ├── layout.tsx         # Root layout with HTML/Body structure
│   └── page.tsx           # Main page rendering the 3D Canvas with Character
├── components/
│   └── canvas/
│       ├── Canvas.tsx      # Core R3F Canvas wrapper with camera & Suspense
│       ├── Scene.tsx       # 3D Scene setup incorporating Lights, Environment & OrbitControls
│       ├── Lights.tsx      # Directional (with shadows) & Ambient lighting setup
│       ├── Environment.tsx # HDR City environment preset setup
│       └── Character.tsx   # Reusable GLTF model loader with Draco decoder & preloading
├── config/
│   └── characters.ts      # Centralized character metadata (paths, scale, position, rotation)
├── types/
│   └── character.ts       # TypeScript interfaces (CharacterConfig, Vector3Tuple)
├── public/
│   └── models/
│       ├── draco/         # Draco compressed GLB alien models
│       ├── silhouettes/   # Silhouette GLB alien models
│       └── optimized/     # Optimized asset files
├── package.json           # Project dependencies & scripts
└── tsconfig.json          # TypeScript configurations & path aliases (@/*)
```

---

## 🛠️ Key Features Implemented

1. **Centralized Character Metadata Config (`config/characters.ts`)**:
   - Stores configuration for 11 aliens (Heatblast, Cannonbolt, Diamondhead, Ditto, Ghostfreak, Gray Matter, Snare-oh, Upgrade, Way Big, Wildvine, XLR8).
   - Eliminates hardcoded model paths across components.

2. **Modular 3D Canvas Architecture (`components/canvas/`)**:
   - `Canvas.tsx`: Wraps R3F Canvas with shadow maps enabled, default FOV, `<Suspense>`, and `@react-three/drei` `<Loader />`.
   - `Scene.tsx`: Organizes environment lights and OrbitControls.
   - `Lights.tsx`: Configured with shadow maps and direction settings.
   - `Environment.tsx`: Provides HDR background lighting.

3. **Draco-enabled Model Loader (`Character.tsx`)**:
   - Reads model metadata based on `slug` (e.g., `heatblast`).
   - Uses `useGLTF` with Draco decoder support.
   - Preserves memory with `dispose={null}`.
   - Preloads all alien models into memory cache.

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive 3D scene.

### 3. Build for Production
```bash
npm run build
```
