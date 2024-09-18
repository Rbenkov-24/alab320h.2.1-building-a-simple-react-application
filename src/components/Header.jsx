/* eslint-disable react/prop-types */
import './Header.css';

export default function Header(props) {

  return(
    <header>
      <h1>{props.title}</h1>
    </header>
    )
}