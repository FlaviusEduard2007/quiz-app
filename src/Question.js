function Question(props) {
  return (
    <div className="baseQuestion">
      {props.index}. {props.text}
    </div>
  );
}

export default Question;
