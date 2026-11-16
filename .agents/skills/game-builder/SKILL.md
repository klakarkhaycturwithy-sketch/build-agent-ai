---
name: game-builder
description: >-
  2D browser and desktop game development skill for nongton's 6-role team.
  Use when nongton asks to create, design, or fix a game (HTML5 Canvas, Phaser + Vite, or Godot).
  Strictly AMD RX Vega compatible (no CUDA/NVIDIA tools).
---

# Game Builder — nongton Game Development Skill

When building or updating a game for nongton:

## 1. Tech Stack Selection (Confirm in ALIGNMENT)
- **Simple 2D Browser Mini-Game**: Pure HTML5 `<canvas>` + CSS + Vanilla JavaScript (zero build step, instant browser play).
- **Rich 2D Browser Game**: Phaser 3 + Vite (shareable via Vercel/Netlify).
- **Standalone Desktop or 3D Game**: Godot Engine (Vulkan/OpenGL compatible with AMD Radeon RX Vega).
- **Hardware Rule**: Never recommend or depend on CUDA or NVIDIA-exclusive tools.

## 2. Core Game Architecture Contract (Deputy & Backend)
Separate game logic cleanly into small functions (max 20–50 lines per function, Clean Code):
1. `initGame()` — Set up canvas, initial state, score, and input listeners.
2. `handleInput(event)` — Keyboard (`WASD` / Arrow keys / `Space`) and touch/click controls.
3. `updateGameState(deltaTime)` — Movement, collision detection, scoring, and win/game-over conditions using `deltaTime` so speed is consistent across 60Hz/144Hz monitors.
4. `renderScene()` — Clear canvas and draw entities, HUD (score, high score, state overlay).
5. `restartGame()` — Reset state cleanly without requiring a page reload.

## 3. UX/UI Requirements for Games
- Always include a clear **Start / Controls hint** on load.
- Display **Current Score** and **High Score** (saved in `localStorage`).
- Include a visible **Pause (`P`)** and **Restart (`R` or button)** control.
- Ensure smooth 60 FPS performance on AMD Ryzen 5 5600 + RX Vega.

## 4. QA Gate for Games
- Test keyboard and mouse/touch input responsiveness.
- Verify collision boundaries (player cannot walk off-screen or get stuck).
- Verify Game Over -> Restart resets score, speed, and entities with zero console errors.

