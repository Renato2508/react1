import './header.css';

const Header = function Header({logo}){    
    return (
      <div className="header">
        <div className="left">
            <img src={logo} alt="votre logo" width={100} />
        </div>
        <div className="right">
            <input type="submit" value="Search" className='input'/>
            <input type="text" className='input' />            
        </div>
      </div>
    );
  }
  
export default Header;