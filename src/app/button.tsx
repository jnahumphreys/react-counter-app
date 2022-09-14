import styled from "@emotion/styled";

const Button = styled.button({
  webkitAppearance: "none",
  outline: "none",
  padding: "0.5rem 0.75rem",
  border: "none",
  borderRadius: "0.25rem",
  margin: "0.25rem",
  fontSize: "1.25rem",
  color: "#fff",
  textTransform: "uppercase",
  transition: "opacity 0.2s ease-in",
  backgroundColor: "#1b6bce",
  flex: "1 1 auto",

  "&:not([disabled])": {
    cursor: "pointer",

    "&:hover": {
      opacity: "0.9",
    },
  },

  "&[disabled]": {
    cursor: "not-allowed",
    opacity: "0.25",
  },
});

export { Button };
