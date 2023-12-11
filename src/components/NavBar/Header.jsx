export default function Header({ menuIsActive, setMenuIsActive }) {
  return (
    <div className="header ">
      <button></button>
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
        className="  my-auto flex-end p-6 cursor-pointer"
      >
        <div
          className={`${"burger"} ${
            menuIsActive ? "burgerActive" : ""
          } w-6 h-6`}
        />
      </div>
    </div>
  );
}
