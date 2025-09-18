"use client";

const Feedback = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <p>please review our service</p>
      <input placeholder="review" onChange={handleInputChange} />
      <button onClick={handleClick}>გაგზავნა</button>
    </>
  );
};

export default Feedback;
