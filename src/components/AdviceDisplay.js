const AdviceDisplay = ({ advice }) => {
  return (
    <div className="adviceDisplay">
      <span className="adviceId">Advice #{advice.id}</span>
      <q className="quote">{advice.advice}</q>
      <div className="svgDivider" />
    </div>
  );
}

export default AdviceDisplay;