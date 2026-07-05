export default function Hero() {
  return (
    <>
      <div className="mt-3" style={{ backgroundColor: "#f6f6f6", padding: "20px 0" }}>
        <div
          className="container  mb-3"
        >
          <div className="row"> 
            <div
              className="my-4 gap-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{marginRight:"65%"}}>Support Portal</h1>
              <button
                className="btn btn-primary mx-auto"
                style={{ width: "120px",padding:"10px" }}
              >
                My Ticket
              </button>
            </div>
          </div>

          <div className="row mb-5">
            <input
              type="text"
              placeholder="Eg:How do I open my account"
              style={{ height: "50px", borderRadius: "8px" , paddingLeft:"20px", border:"none"}}
            />
          </div>
        </div>
      </div>
    </>
  );
}
