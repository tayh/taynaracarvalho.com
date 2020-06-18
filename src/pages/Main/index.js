import React, { useEffect } from 'react';
import anime from 'animejs';
import Menu from './menu';

export default function Main() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#69f0ae', '#1976D2', '#ff4081', '#FBD15B'];
    const colorLine = '#FFFFFF';
    const positions = 1;

    let H = window.innerHeight;
    let W = window.innerWidth;

    const resize = () => {
      H = window.innerHeight;
      W = window.innerWidth;
    };

    const startPoitions = () => {
      const record = Array(positions)
        .fill()
        .map((_, index) => {
          return {
            x: anime.random(0, W),
            y: -128,
          };
        });
      return record;
    };

    const endPosition = position => {
      return {
        x: position.x,
        y: H + 800,
      };
    };

    const createLine = position => {
      const line = {};
      line.x = position.x;
      line.y = position.y;
      line.width = 2;
      line.height = anime.random(64, 128);
      line.delay = anime.random(0, 500);
      line.duration = anime.random(2000, 5000);
      line.color = colorLine;
      line.endPos = endPosition(position);
      line.draw = () => {
        ctx.beginPath();
        ctx.rect(line.x, line.y, line.width, line.height);
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = line.color;
        ctx.fill();
      };
      return line;
    };

    const createSquare = position => {
      const square = {};
      square.x = position.x;
      square.y = position.y;
      square.width = anime.random(8, 16);
      square.height = anime.random(16, 64);
      square.delay = anime.random(0, 500);
      square.duration = anime.random(8000, 12000);
      square.color = colors[anime.random(0, colors.length - 1)];
      square.endPos = endPosition(position);
      square.draw = () => {
        ctx.beginPath();
        ctx.rect(square.x, square.y, square.width, square.height);
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = square.color;
        ctx.fill();
      };
      return square;
    };

    const renderSquare = anim => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    };

    const animateSquares = () => {
      const particules = [];
      const lines = [];
      const squares = startPoitions();

      squares.forEach(item => {
        particules[particules.length] = createSquare(item);
        lines[lines.length] = createLine(item);
      });

      anime
        .timeline()
        .add({
          targets: particules,
          x: square => {
            return square.endPos.x;
          },
          y: square => {
            return square.endPos.y;
          },
          duration: square => {
            return square.duration;
          },
          delay: square => {
            return square.delay;
          },
          easing: 'easeInOutCirc',
          update: renderSquare,
        })
        .add({
          targets: lines,
          x: line => {
            return line.endPos.x;
          },
          y: line => {
            return line.endPos.y;
          },
          duration: line => {
            return line.duration;
          },
          delay: line => {
            return line.delay;
          },
          easing: 'easeInOutCirc',
          update: renderSquare,
        });
    };

    const setCanvasSize = () => {
      resize();
      canvas.width = W * 2;
      canvas.height = H * 2;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      canvas.getContext('2d').scale(2, 2);
    };

    const render = anime({
      duration: Infinity,
      update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      },
    });

    const renderLoop = () => {
      animateSquares();
      render.play();
      anime().finished.then(renderLoop);
    };
    renderLoop();
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, false);
  }, []);
  return (
    <div>
      <canvas id="canvas" />
      <Menu />
    </div>
  );
}
