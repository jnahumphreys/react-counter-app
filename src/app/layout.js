import styled from "@emotion/styled";

const Wrapper = styled.main({
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif",
  ].join(","),
  fontSize: 16,
  margin: 0,
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  transition: "all 0.2s ease-out",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  "*": {
    touchAction: "manipulation",
    userSelect: "none",
    boxSizing: "border-box",
  },

  "@media (prefers-color-scheme: dark)": {
    backgroundColor: "#1d1d1d",
  },
});

const Container = styled.div({
  width: "100%",
});

function Layout({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export { Layout };
