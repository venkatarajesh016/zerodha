export default function Notfound() {
  return (
    <>
      <div className="container text-center" style={{ marginTop: "100px", marginBottom: "100px" }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/" className="btn btn-primary">Go to Homepage</a>
      </div>
    </>
  );
}