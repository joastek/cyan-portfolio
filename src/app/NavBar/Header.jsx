export default function Header({ menuIsActive, setMenuIsActive }) {
  return (
    <div className="header">
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
        className={`${"burger"} ${menuIsActive ? "burgerActive" : ""}`}
      ></div>
    </div>
  );
}
