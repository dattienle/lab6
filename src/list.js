import { useDispatch, useSelector } from "react-redux";
import { removeContact, updateContact } from "./redux/cartSlice";
import { useState } from "react";

const ListContact = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState(null);
  const [tempEditedContact, setTempEditedContact] = useState(null);
  const handleDelete = (contactId) => {
    dispatch(removeContact(contactId));
  };

  const handleEdit = (contact) => {
    setEditedContact(contact);
    setTempEditedContact({ ...contact });
    console.log(setEditedContact.value);
  };

  const handleSave = () => {
    dispatch(updateContact(tempEditedContact));
    setEditedContact(null);
    setTempEditedContact(null);
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {editedContact === contact ? (
                  <input
                    type="text"
                    value={tempEditedContact.name}
                    onChange={(e) =>
                      setTempEditedContact({
                        ...tempEditedContact,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  contact.name
                )}
              </td>
              <td>
                {editedContact === contact ? (
                  <input
                    type="text"
                    value={tempEditedContact.email}
                    onChange={(e) =>
                      setTempEditedContact({
                        ...tempEditedContact,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  contact.email
                )}
              </td>
              <td>
                {editedContact === contact ? (
                  <input
                    type="text"
                    value={tempEditedContact.message}
                    onChange={(e) =>
                      setTempEditedContact({
                        ...tempEditedContact,
                        message: e.target.value,
                      })
                    }
                  />
                ) : (
                  contact.message
                )}
              </td>
              <td>
                {editedContact === contact ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditedContact(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(contact)}>Edit</button>
                )}
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListContact;
