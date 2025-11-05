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
            // src="https://videos.pexels.com/video-files/7680438/7680438-hd_1920_1080_25fps.mp4"
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
            // src="https://videos.pexels.com/video-files/3389913/3389913-hd_1920_1080_25fps.mp4"
            label="I need a Designer"
          />
        </Box>
      </div>
      <Logo />
    </main>
  );
}

export default App;
