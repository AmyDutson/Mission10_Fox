import logo from "./spareMe.png";

function Header(props: any) {
  return (
    <header className="row header navbar navbar-dark custom-header">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <h5>Database about our Fine Bowlers</h5>
      </div>
    </header>
  );
}

export default Header;
