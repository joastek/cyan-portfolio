export default function Header({ menuIsActive, setMenuIsActive }) {
  return (
    <div className="header cursor-pointer">
      <button>
        <div
          onClick={() => {
            setMenuIsActive(!menuIsActive);
          }}
          className="  my-auto flex-end  cursor-pointer "
        >
          <div
            className={`${"burger"} ${
              menuIsActive ? "burgerActive" : ""
            } w-2 h-6`}
          />
        </div>
      </button>
    </div>
  );
}
