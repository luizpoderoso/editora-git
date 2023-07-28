export const correctCategory = (category) => (
  category === 'programacao'
    ? 'Programação'
    : category === 'design'
      ? 'Design'
      : category === 'frontend'
        ? 'Front-End'
        : category
);