import { useState } from "react";

const Inquiry = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: "",
  });

  const onChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
  };

  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nome"
          id="name"
          value={contactInfo.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          id="email"
          value={contactInfo.email}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="remarks">Observações</label>
        <input
          type="text"
          className="form-control"
          placeholder="Observações"
          id="remarks"
          value={contactInfo.remarks}
          onChange={onChange}
        />
      </div>
      <button 
      className="btn btn-primary mt-2"
      disabled={!contactInfo.name || !contactInfo.email}
      onClick={onSubmit}>
          Submit
      </button>
    </form>
  );
};

export default Inquiry;
