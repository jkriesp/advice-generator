

const FetchButton = ({ onFetch }) => {
  return (
    <button className="adviceButton" onClick={onFetch}>
      <img src='/assets/icon-dice.svg' alt='Dice Icon' />
    </button>
  );
}

export default FetchButton;