import propTypes from 'prop-types';

export const ContactList = ({ contacts }) => (
  <div>
    <ul>
      {contacts.map((contact, id, number) => (
        <li key={id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
