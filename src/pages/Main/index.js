import React, { useEffect } from 'react';
import anime from 'animejs';

export default function Main() {
  useEffect(() => {
    anime({
      targets: 'polygon',
      points: [
        {
          value: [
            '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
            '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369',
          ],
        },
        {
          value:
            '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369',
        },
        {
          value:
            '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369',
        },
        {
          value:
            '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
        },
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true,
    });
  }, []);
  return (
    <div>
      <svg width="600" height="450">
        <polygon points="143 31 21 196 286 223" fill="#ED6E46" />
      </svg>
    </div>
  );
}
