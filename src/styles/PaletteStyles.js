export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      width: "100px",
      height: "30px",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      display: "inline-block",
      textAlign: "center",
      outline: "none",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      color: "white",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
  },
};