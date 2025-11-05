import "./App.css";
import Box from "@mui/joy/Box";
import LeftSideVideo from "./components/LeftSideVideo";
import RightSideVideo from "./components/RightSideVideo";
import Logo from "./components/Logo";

function App() {
  return (
    <main className="min-h-screen w-screen bg-black font-lora">
      <div className="w-full h-full flex items-center justify-between">
        <Box
          sx={{
            display: "flex",
            width: "50%",
            height: "100vh",
          }}
        >
          <LeftSideVideo
            src="https://www.pexels.com/download/video/7680438/"
            label="I am a Designer"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "50%",
            height: "100vh",
          }}
        >
          <RightSideVideo
            src="https://www.pexels.com/download/video/9853180/"
            label="I need a Designer"
          />
        </Box>
      </div>
      <Logo />
    </main>
  );
}

export default App;
