import { useState } from "react";
import {
  Box,
  Card,
  CardCover,
  CardContent,
  Typography,
  Input,
  Chip,
  Stack,
  Button,
  Modal,
  ModalDialog,
  Divider,
} from "@mui/joy";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Star } from "lucide-react";
import { designers } from "../../utils/data";

const DiscoverPage = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = designers.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        p: { xs: 3, md: 8 },
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          level="h1"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            mb: 1,
            color: "black",
            fontSize: { xs: "2xl", md: "3xl" },
          }}
        >
          Discover Your Perfect Designer
        </Typography>
        <Typography
          level="body-lg"
          textAlign="center"
          sx={{ mb: 5, color: "gray" }}
        >
          Explore independent designers from around the world. Find your match
          by style, story, or inspiration.
        </Typography>
      </motion.div>

      {/* Search & Filter */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mb={5}
      >
        <Input
          placeholder="Search designers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "300px" },
            borderRadius: "xl",
            borderColor: "#00b67f",
            "--Input-focusedHighlight": "#00b67f",
          }}
        />
        <Chip
          color="success"
          variant="solid"
          sx={{
            backgroundColor: "#00b67f",
            "&:hover": { opacity: 0.8 },
          }}
        >
          All Styles
        </Chip>
      </Stack>

      {/* Designer Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 4,
          height: "100vh",
        }}
      >
        {filtered.map((designer) => (
          <motion.div
            key={designer.id}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              onClick={() => setSelected(designer)}
              sx={{
                cursor: "pointer",
                borderRadius: "2xl",
                overflow: "hidden",
                boxShadow: "sm",
                position: "relative",
                "&:hover": {
                  boxShadow: "lg",
                },
                height: "100%",
              }}
            >
              <CardCover>
                <motion.img
                  src={designer.image}
                  alt={designer.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.85)",
                  }}
                  whileHover={{ filter: "brightness(1)" }}
                />
              </CardCover>
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  p: 3,
                  background: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  width: "100%",
                  backdropFilter: "blur(6px)",
                }}
              >
                <Typography level="title-md">{designer.name}</Typography>
                <Typography level="body-sm" textColor="neutral.200">
                  {designer.style}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                  <MapPin size={14} />
                  <Typography level="body-xs">{designer.location}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Modal for Designer Details */}
      <AnimatePresence>
        {selected && (
          <Modal open onClose={() => setSelected(null)}>
            <ModalDialog
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              sx={{
                borderRadius: "2xl",
                maxWidth: 800,
                p: 3,
                bgcolor: "#fff",
                top: "40%",
              }}
            >
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography level="h3" sx={{ fontWeight: "bold" }}>
                  {selected.name}
                </Typography>
                <Button
                  variant="plain"
                  color="neutral"
                  onClick={() => setSelected(null)}
                >
                  <X />
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <MapPin size={16} />
                <Typography>{selected.location}</Typography>
                <Divider orientation="vertical" flexItem />
                <Star size={16} color="#00b67f" />
                <Typography>{selected.rating}</Typography>
              </Stack>

              <Typography sx={{ mb: 2, color: "gray" }}>
                {selected.bio}
              </Typography>

              <Typography level="title-md" sx={{ mb: 2 }}>
                Portfolio Highlights
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: 2,
                }}
              >
                {selected.portfolio.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Portfolio ${i}`}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "lg",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </Box>
            </ModalDialog>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};
export default DiscoverPage;
