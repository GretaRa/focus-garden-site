import React from 'react';
import '../styles/abstracts/_colors.scss';

export default function ColorSwatch() {
  const colors = [
    { name: 'light-shades', label: '#F5F6F7' },
    { name: 'light-accent', label: '#DCA8C1' },
    { name: 'main', label: '#E5A172' },
    { name: 'dark-accent', label: '#C46C8E' },
    { name: 'dark-shades', label: '#7E3A50' },
    { name: 'leaf-green', label: '#A6C7A1' },
    { name: 'stem-green', label: '#6E9C74' },
  ];

  return (
    <div className="color-swatch">
      {colors.map(({ name, label }) => (
        <div key={name} className={`swatch ${name}`}>
          {name}
          <br />
          {label}
        </div>
      ))}
    </div>
  );
}
