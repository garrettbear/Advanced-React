import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav/>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div className="">
      Cart
    </div>
  </div>
);

export default Header;