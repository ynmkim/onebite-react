import './Header.css';

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('en-US', { month: 'short' });
const formatDate = `${day} ${month}`;

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Todo</h1>
      <h2 className="today">Today, {formatDate}</h2>
    </header>
  );
};

export default Header;
