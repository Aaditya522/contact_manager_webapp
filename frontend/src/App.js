import React, { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://contact-backend-y1pe.onrender.com/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const fetchContacts = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm({ name: "", email: "", phone: "" });
      fetchContacts();
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      fetchContacts();
    }
  };

  const updateContact = async (contact) => {
 
    const newName = prompt("Update Name:", contact.name);
    if (newName === null) return;

    const newEmail = prompt("Update Email:", contact.email);
    if (newEmail === null) return;

    const newPhone = prompt("Update Phone Number:", contact.phone);
    if (newPhone === null) return;

    try {
      await fetch(`${BASE_URL}/${contact._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: newName, 
          email: newEmail, 
          phone: newPhone 
        }),
      });
      fetchContacts();
    } catch (err) {
      console.error("Error updating contact:", err);
    }


  };

  const searchContacts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/search?query=${search}`);
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">📇 Contact Manager</h1>
        <p className="subtitle">Keep your professional network organized</p>
      </header>

      <div className="form-card">
        <form className="form-vertical" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. Aaditya Bansal" value={form.name}  onChange={(e) => setForm({ ...form, name: e.target.value })}/>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="abc@gmail.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="82187*****" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}/>
          </div>

          <button type="submit" className="submit-btn">Add Contact</button>
        </form>
      </div>


      <hr className="divider" />

      <div className="search-box">
        <input type="text" placeholder="Search by phone or email" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={searchContacts}>Search</button>
        <button onClick={fetchContacts}>Reset</button>
      </div>

      <div className="grid">
        {contacts.map((c) => (
          <div className="card" key={c._id}>
            <div className="card-info">
              <h3>{c.name}</h3>
              <p className="email">📧 {c.email}</p>
              <p className="phone">📞 {c.phone}</p>
            </div>

            <div className="actions">
              <button className="edit" onClick={() => updateContact(c)}>Edit</button>
              <button className="delete" onClick={() => deleteContact(c._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;