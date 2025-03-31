export default function LinkedInButton() {
    return (
      <a
        href="https://www.linkedin.com/in/uanandu"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#0077b5",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "500",
          fontSize: "1rem",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#005582";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#0077b5";
        }}
      >
        Connect on LinkedIn
      </a>
    );
  }