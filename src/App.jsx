function App() {
  return (
    <>
      <BlueArea />
      <SandboxHeader />
    </>
  );
}

export default App;

const BlueArea = () => {
  return (
    <div className="blue-area">
      <div></div>
      <div className="blue-area-content">
        <div className="update">Update</div>
        <p>
          New version of our product is finally <a href="#">here!</a>
        </p>
      </div>
      <div className="close-button">x</div>
    </div>
  );
};

const SandboxHeader = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo-dark.png" alt="Sandbox Logo" />
        </div>
        <div className="navbar">
          <div className="nav-links">
            <ul>
              <li>
                <a href="#">Demos</a>
              </li>

              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Blocks</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
            </ul>
          </div>
          <div className="call-to-action">
            <button>Free Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};
