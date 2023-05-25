// import React, { useState, useEffect } from "react";
// import tailwindConfig from "tailwind.config.js";
// import { useForm } from "react-hook-form";
// import FontPicker from "font-picker-react";
// import { useSelector, useDispatch } from "react-redux";
// import { saveConfiration } from "../../../reducers/slice";

// function FontFamily() {
//   const [fontUrl, setFontUrl] = useState(null);
//   const rawDataMapping = useSelector((state) => state.portFolio.rawDataMapping);
//   const dispatch = useDispatch();
//   const {
//     register,
//     formState: { errors },
//     reset,
//     handleSubmit,
//   } = useForm();

 
//   const onSubmit = (e) => {
//     console.log(e);
//     const url = e.primaryFont;
//     dispatch(saveConfiration(e));
//     setFontUrl(url);
//     reset(); // reset the form
//   };


//   const customTheme = {
//     ...tailwindConfig.theme,
//     fontFamily: {
//       ...tailwindConfig.theme.fontFamily,
//       custom: fontUrl ? [fontUrl, "sans-serif"] : tailwindConfig.theme.fontFamily.custom,
//     },
//   };

 
//   useEffect(() => {
//     document.documentElement.style.setProperty(
//       "--font-family-custom",
//       fontUrl ? customTheme.fontFamily.custom.join(", ") : null
//     );
//   }, [fontUrl]);
//   console.log(fontUrl, customTheme.fontFamily.custom);
//   return (
//     <form className="font-custom" onSubmit={handleSubmit(onSubmit)}>
//       {/* <label>
//         Primary font:
//         <input type="text" {...register("primaryFont")} />
//         {errors.primaryFont && <span>{errors.primaryFont.message}</span>}
//       </label>
//       <h2 className="font-custom" id="h2">
//         font
//       </h2>
//       <label>
//         Font weights:
//         <input type="text" {...register("fontWeights")} />
//         {errors.fontWeights && <span>{errors.fontWeights.message}</span>}
//       </label> */}

//       {/* <FontPicker
//         apiKey="AIzaSyCrAmkqacuiyammyv400dq-l6QUNZkoMSE"
//         activeFontFamily={fontUrl ? fontUrl : "Arial"}
//         onChange={(nextFont) => setFontUrl(nextFont.family)}
//       /> */}
//       <FontPicker
//         {...register("fontWeightss")}
//         apiKey="AIzaSyCrAmkqacuiyammyv400dq-l6QUNZkoMSE"
//         activeFontFamily={fontUrl ? fontUrl : "Arial"}
//         value={fontUrl}
//         onChange={(nextFont) => setFontUrl(nextFont.family)}
//       />
//       <button className="font-custom" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default FontFamily;
