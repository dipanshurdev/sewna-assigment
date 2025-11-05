import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Input,
  Button,
  Typography,
  Link,
  Divider,
} from "@mui/joy";
import { motion } from "framer-motion";
import { User, Lock, Mail } from "lucide-react";
import Logo from "../../assets/images/logo-text.png";

const CreateAccount = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => setIsSignup(!isSignup);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#fff",
        flexDirection: "column",
        p: 3,
        borderRadius: "2xl",
      }}
      boxShadow="lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            width: "100%",
            boxShadow: "lg",
            p: 4,
            textAlign: "center",
          }}
        >
          <img src={Logo} alt="Sewna" />
          <Typography
            level="h4"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#888",
            }}
          >
            {isSignup
              ? "Hello Designers, Join SEWNA"
              : "Welcome Back Designers"}
          </Typography>

          <Typography level="body-sm" mb={3} textColor="gray">
            {isSignup
              ? "Create your designer account and start sharing your vision."
              : "Login to manage your portfolio and connect with clients."}
          </Typography>

          <CardContent>
            {isSignup && (
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <User size={18} style={{ marginRight: "8px" }} />
                  <Input placeholder="Full Name" fullWidth />
                </Box>
              </Box>
            )}

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Mail size={18} style={{ marginRight: "8px" }} />
                <Input placeholder="Email Address" type="email" fullWidth />
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Lock size={18} style={{ marginRight: "8px" }} />
                <Input placeholder="Password" type="password" fullWidth />
              </Box>
            </Box>

            <Button
              fullWidth
              variant="solid"
              sx={{
                backgroundColor: "#00b67f",
                "&:hover": { backgroundColor: "#00a471" },
                fontWeight: "bold",
                borderRadius: "lg",
              }}
            >
              {isSignup ? "Sign Up" : "Login"}
            </Button>

            <Divider sx={{ my: 3 }}>or</Divider>

            <Typography level="body-sm">
              {isSignup ? "Already have an account? " : "New here? "}
              <Link
                onClick={toggleMode}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#00b67f",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {isSignup ? "Login" : "Sign Up"}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default CreateAccount;
