export const config = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1200
      }
    },
    size: {
      value: 2
    },
    color: {
      value: "#fff",
      animation: {
        enable: false,
        speed: 200,
        sync: true
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#fff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      "resize": true
    },
    modes: {
      grab: {
          distance: 180,
          line_linked: {
              opacity: 0.35
          }
      },
      bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
      },
      repulse: {
          distance: 80,
          duration: 5
      },
      push: {
          particles_nb: 4
      },
      remove: {
          particles_nb: 2
      }
  }
  }
}