import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import "@fontsource/lora";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RightSideVideo({ src, label }) {
  const videoRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current && videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current && videoRef.current.pause();
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        p: 0,
        m: 0,
        alignItems: "center",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Card
        component={motion.div}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 0,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Link to="/discover">
          <CardCover>
            <motion.video
              ref={videoRef}
              loop
              muted
              playsInline
              preload="metadata"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: isHovered ? "brightness(1)" : "brightness(0.3)",
                transition: "filter 0.5s ease",
              }}
            >
              <source src={src} type="video/mp4" />
            </motion.video>
          </CardCover>
        </Link>
        <CardContent
          sx={{
            position: "absolute",
            bottom: "50%",
            width: "100%",
            textAlign: "center",
            color: "#fff",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          <Typography
            level="h2"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 1,
              opacity: isHovered ? 1 : 0.3,
              transition: "opacity 0.4s ease",
              color: "#fff",
            }}
            fontFamily={"lora"}
          >
            {label}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
