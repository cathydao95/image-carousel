function Images(props) {
  return (
    <div>
      <h1>Test</h1>
      <button onClick={props.previousImg}>Previous Image</button>
      <img src={props.imageData[4]} alt="test" />
      <button onClick={props.nextImg}>Next Image</button>
    </div>
  );
}
export default Images;
