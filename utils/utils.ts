// Function to generate random colors
export const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 20) + 65; // 65-85%
  const lightness = Math.floor(Math.random() * 15) + 50; // 50-65%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const generateRandomGradient = () => {
  const angle = Math.floor(Math.random() * 360);
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  const color3 = generateRandomColor();
  return `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
};