import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0;
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover,
    &:active {
      color: #f3cafb;
    }
  }

  button {
    font: inherit;
    background: #dd0db0;
    border: 1px solid #dd0db0;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;

    &:focus {
      outline: none;
    }

    &:hover,
    &:active {
      color: #f3cafb;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
    }
  }
`;

const Navigation = ({ isLoggedIn, navigateToUser, onLogOut }) => {
  return (
    <Nav>
      <ul>
        <li onClick={(e) => navigateToUser(e, "counter")}>
          <a href="/">Counter</a>
        </li>
        <li onClick={(e) => navigateToUser(e, "users")}>
          <a href="/">Users</a>
        </li>
        <li onClick={(e) => navigateToUser(e, "admin")}>
          <a href="/">Admin</a>
        </li>
        <li onClick={(e) => navigateToUser(e, "cards")}>
          <a href="/">Rick and Morty</a>
        </li>

        <li>
          <button onClick={onLogOut}>Logout</button>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
