import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: var(--hover-color);
  z-index: 100;
  top: 0;
  align-items: center;
  padding: 0rem 2rem;
  height: 6rem;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    width: 100%;
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
  }
  .logo-wrapper {
    flex-basis: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  logo-wrapper a {
    text-decoration: none;
  }
  .traidr-header-logo {
    width: 6rem;
  }

  .header-right-btn-wrapper {
    flex-basis: 40%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
  }
  .small-screen-icon {
    display: block;
    color: var(--purple-color);
    @media (min-width: 768px) {
      display: none;
    }
  }
  .big-screen {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .header-right-login-btn {
    background-color: #fff;
    color: var(--black-color);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }
  .header-right-signup-btn {
    background-color: var(--purple-color);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default HeaderStyle;
