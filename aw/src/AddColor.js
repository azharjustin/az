import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color
  };
  const [colorList, setColorList] = useState([
    "crimson",
    "orange",
    "skyblue",
    "red"
  ]);
  return (
    <div>
      <input
        value={color}
        style={styles}
        placeholder='enter a color'
        onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColorList([...colorList, color])}>Addcolor</button>
      {colorList.map((clr, index) => <ColorBox key={index} color={clr} />)}
    </div>
  );
}
