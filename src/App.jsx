* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    #ffb703,
    #fb8500,
    #ff7b00,
    #ff5400,
    #ffd60a
  );

  background-size: 400% 400%;
  animation: mangoFlow 12s ease infinite;
}

/* Animated Background */
@keyframes mangoFlow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Main Container */
.container {
  position: relative;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Animated 67 */
.logo {
  position: relative;
  z-index: 5;

  font-size: 12rem;
  font-weight: 800;
  letter-spacing: 10px;

  background: linear-gradient(
    90deg,
    #fff8dc,
    #fff176,
    #ffd54f,
    #ffec99
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    0 0 10px rgba(255,255,255,0.6),
    0 0 20px rgba(255,200,0,0.8),
    0 0 40px rgba(255,140,0,0.9);

  animation:
    float 3s ease-in-out infinite,
    glow 2s ease-in-out infinite alternate,
    popIn 1s ease;
}

/* Subtitle */
.subtitle {
  margin-top: 10px;

  color: rgba(255,255,255,0.9);

  font-size: 1.2rem;
  letter-spacing: 5px;
  text-transform: uppercase;

  animation: fadeUp 2s ease;
}

/* Floating Animation */
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}

/* Glow Animation */
@keyframes glow {
  from {
    filter: drop-shadow(0 0 10px #fff176);
  }

  to {
    filter: drop-shadow(0 0 30px #ff6f00);
  }
}

/* Intro Animation */
@keyframes popIn {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }

  70% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Subtitle Animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Background Glow Orbs */
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.45;
}

/* Glow Orb 1 */
.glow1 {
  width: 300px;
  height: 300px;

  background: #fff176;

  top: 10%;
  left: 15%;

  animation: move1 8s ease infinite alternate;
}

/* Glow Orb 2 */
.glow2 {
  width: 400px;
  height: 400px;

  background: #ff6f00;

  bottom: 10%;
  right: 10%;

  animation: move2 10s ease infinite alternate;
}

/* Glow Orb 3 */
.glow3 {
  width: 250px;
  height: 250px;

  background: #ffd54f;

  top: 50%;
  right: 30%;

  animation: move3 7s ease infinite alternate;
}

/* Orb Movement */
@keyframes move1 {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(60px, 40px);
  }
}

@keyframes move2 {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(-50px, -60px);
  }
}

@keyframes move3 {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(40px, -40px);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .logo {
    font-size: 6rem;
    letter-spacing: 5px;
  }

  .subtitle {
    font-size: 0.9rem;
  }
}
