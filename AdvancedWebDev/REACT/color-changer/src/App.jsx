import { useState, useEffect } from 'react';

const App = () => {
  const [color, setColor] = useState('');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{textAlign: "center", fontWeight: 'bolder'}}>
      <p onClick={() => handleColorChange('red')} >
        Red
      </p>
      <p onClick={() => handleColorChange('yellow')}>
        Yellow
      </p>
      <p onClick={() => handleColorChange('green')}>
        Green
      </p>
    </div>
  );
};

export default App;