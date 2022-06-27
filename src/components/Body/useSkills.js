const useSkills = (...props) => {
  return (
    <ul className="logoList">
      {props.map((logo) => (
        <li key={Math.random()}>
          <img src={logo} alt="{logo}" />
        </li>
      ))}
    </ul>
  );
};

export default useSkills;
