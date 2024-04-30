import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';

  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting="";

  if(curDate>=1 && curDate < 12)
  {
    greeting="Good Morning";
  }
  else if(curDate>=12 && curDate<19)
  {
    greeting="Good Afternoon";
  }
  else
  {
    greeting="Good Night";
  }
function App() {
  return (
    <div className="App">
     <Sidebar />
      <nav className="navbar">
              <div className="nav-logo">
              <img src='../logo192.png' alt='logo' width={50} height={50} />
              </div>
              <div className="menu">
                  <ul>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>
                  </ul>
              </div>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello  Urvi <code>Talaviya,</code> {greeting}

        </p>
        <a
          className="App-link"
          href="https://sughosh.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sughosh Technolab
        </a>
      </header>

       <footer>
          <div className="left">
              <img src='../logo192.png' alt='logo' width={70} height={70} />
              <h2>Sughosh Technolab</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aut. </p>
          </div>
          <div className="center">
              <h2>Company</h2>
              <div className="q-link">
                 <a>Home</a>
                 <a>About Us</a>
                 <a>Contact Us</a>
              </div>
          </div>
          <div className="third">
                <h2>Featured Service</h2>
                <div className="t-link">
                 <a>web application development </a>
                 <a>custom API development</a>
                 <a>UI/UX Design</a>
                 <a>Mobile App development</a>
                 <a>consulty & advisory</a>
              </div>
                
          </div>
          <div className="center">
              <h2>Get in Touch</h2>
              
              <p>+91 74053 14553 <br />
                +91 94847 84193</p>
              <p>info@sughosh.dev</p>
              <p>506-Pavitraa Point ,Savaliya <br />
              Circle,Surat,Gujarat,India</p>
          </div>
      </footer> 
    </div>
  );
}

export default App;
