const AdviceDisplay = ({ advice }) => {
  return (
  <div className="adviceContainer">
    <h1>{advice.id}</h1>
    <blockquote>{advice.advice}</blockquote>
  </div>
  );
}

//  	https://api.adviceslip.com/advice

export default AdviceDisplay;