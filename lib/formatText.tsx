export const formatLabel = (label: string) => {
  return label.split("\n").map((text, index) => (
    <span key={index} className={index === 0 ? "font-bold" : "font-light"}>
      {index !== 0 && <br />}
      {text}
    </span>
  ));
};
