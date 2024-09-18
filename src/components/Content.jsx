/* eslint-disable react/prop-types */
import './Content.css';

export default function Content(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.bodyText}</p>
    </article>
  );
}