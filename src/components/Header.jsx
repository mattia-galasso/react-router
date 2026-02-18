export default function Header() {
  return (
    <>
      {/* HEADER */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Homepage
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Chi siamo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Prodotti
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
