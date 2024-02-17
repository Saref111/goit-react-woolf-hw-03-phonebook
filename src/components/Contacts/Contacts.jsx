import React from 'react';

import css from './Contacts.module.scss';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <span className={css.name}>
            {contact.name}: {contact.phone}
          </span>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Contacts);
