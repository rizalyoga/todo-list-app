import "./modal.css";
import "../Home/responsive.css";

const Modal = () => {
  return (
    <div id="modal">
      <section className="con-form">
        <h2>Tambahkan Buku Baru</h2>
        <form id="form">
          <div className="input-group">
            <input type="text" id="title" placeholder="Title-Todo" className="input-form" max-length="120" pattern="^[a-zA-Z0-9_ ]*$" autoComplete="off" required />
          </div>
          <div className="input-group">
            <input type="text-area" id="description" placeholder="Description" className="input-form" max-length="60" pattern="^[a-zA-Z0-9_ ]*$" required />
          </div>
          <div className="input-group">
            <input type="date" id="year" className="input-form" min="1900" max="2026" />
          </div>
          <div className="button-group">
            <button type="reset" className="cancel" id="cancel">
              Cancel
            </button>
            <button type="submit" className="save" id="save">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Modal;
