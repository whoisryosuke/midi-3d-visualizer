import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { Note, useInputStore } from "../../../store/input";

type Props = {};

const P5Particles = (props: Props) => {
  const p5ref = useRef<p5 | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const Sketch = (p) => {
    // this class describes the properties of a single particle.
    class Particle {
      // setting the co-ordinates, radius and the
      // speed of a particle in both the co-ordinates axes.
      constructor() {
        this.x = p.random(0, p.width);
        this.y = p.random(0, p.height);
        this.r = p.random(1, 8);
        this.xSpeed = p.random(-2, 2);
        this.ySpeed = p.random(-1, 1.5);
      }

      // creation of a particle.
      createParticle() {
        p.noStroke();
        p.fill("rgba(200,169,169,0.5)");
        p.circle(this.x, this.y, this.r);
      }

      // setting the particle in motion.
      moveParticle() {
        if (this.x < 0 || this.x > p.width) this.xSpeed *= -1;
        if (this.y < 0 || this.y > p.height) this.ySpeed *= -1;
        this.x += this.xSpeed;
        this.y += this.ySpeed;
      }

      // this function creates the connections(lines)
      // between particles which are less than a certain distance apart
      joinParticles(particles) {
        particles.forEach((element) => {
          let dis = p.dist(this.x, this.y, element.x, element.y);
          if (dis < 85) {
            p.stroke("rgba(255,255,255,0.04)");
            p.line(this.x, this.y, element.x, element.y);
          }
        });
      }
    }

    // Data
    const particles: Particle[] = [];
    p.setup = () => {
      console.log("setup canvas");
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.frameRate(30);

      // Preload scene with particles if needed
      // for (let i = 0; i < p.width / 10; i++) {
      //   particles.push(new Particle());
      // }
    };
    p.draw = () => {
      // console.log('drawing!!')
      p.background(0); // Set the background to black

      // Check input store
      const { input } = useInputStore.getState();
      // Find out what input changed
      const inputKeys = Object.keys(input) as Note[];
      const pressedKeys = inputKeys.filter((key) => input[key]);

      // Launch blocks for each key pressed
      pressedKeys.forEach((key) => particles.push(new Particle()));

      for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    };
  };

  useEffect(() => {
    if (divRef.current && p5ref.current == null)
      p5ref.current = new p5(Sketch, divRef.current);
  }, []);

  return <div ref={divRef}></div>;
};

export default P5Particles;
