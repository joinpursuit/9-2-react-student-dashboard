export default function percentColor() {
  const percentElem = document.getElementsByClassName("tally");
  // const percent =(data.codewars.current.total / data.codewars.goal.total) * 100;
  const percent = 101;
  percent >= 100 ? percentElem.classList.add("green") : null;
}
