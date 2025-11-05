const Logo = () => {
  return (
    <div
      className="text-emerald-600 transition-transform duration-300 cursor-pointer hover:scale-105 text-7xl leading-[-0.02em] w-fit absolute z-10 top-2/6 left-[45%]"

      //  style="font-size: 2.5rem; letter-spacing: -0.02em; text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px; display: flex; align-items: baseline; color: rgb(0, 182, 127);"
    >
      <span style={{ fontFamily: "Pacifico", fontWeight: 100 }}>se</span>
      <span
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "3rem",
          letterSpacing: "-0.2em",
        }}
      >
        W
        <i
          style={{
            fontSize: "3rem",
            fontFamily: "Poppins",
            fontStyle: "italic",
            letterSpacing: "0em",
          }}
        >
          N
        </i>
      </span>
      <span
        style={{
          fontFamily: "Poppins",
          fontWeight: 410,
          letterSpacing: "-0.02em",
          fontSize: "3.5rem",
        }}
      >
        a.
      </span>
    </div>
  );
};

export default Logo;
