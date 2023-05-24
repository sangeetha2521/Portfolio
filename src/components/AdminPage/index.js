import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme } from "../../reducers/slice";
import FontFamily from "./AdminSettings/font";

export default function AdminSettings() {
  const theme = useSelector((state) => state.portFolio.defaultTheme);
  const dispatch = useDispatch();
  const [className, setClassName] = useState("");

  const onClickChangeTheme = () => {
    if (theme === "light") {
      dispatch(setDarkTheme("black"));
    } else {
      dispatch(setDarkTheme("light"));
    }
  };

  useEffect(() => {
    setClassName(theme === "light" ? " w-full h-full bg-pink text-sm " : "w-full h-full bg-black text-white");
  }, [theme]);

  return (
    <>
      <div className={className}>
        <FontFamily/>
        <h2> AdminSettings</h2>
        <button className=" rounded-md bg-gray-300 mr-auto mt-96" onClick={() => onClickChangeTheme()}>
          Switch theme
        </button>
      </div>
    </>
  );
}
