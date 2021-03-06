import { Contact } from './Contact';
import './Stylesheet.css';
interface Props {
  contacts: Contact[];
}

export default function Card(props: Props) {
  return (
    <div className='backgroundImage'>
      <div
        className="subcontainer">
        {props.contacts.map((con: Contact) => {
          return (
            <div className='card' data-testid="not-empty">
              <div key={con.email} className="email">
                <img src={con.picture.medium} className="img"alt="user"/>
               
                <div className='font'>
                  <b>{con.name.title}. {con.name.first} {con.name.last}</b>{" "}
                  <br />
                  {con.email}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
