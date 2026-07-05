export default function AccountTable() {
  return (
    <>
      <div className="container mt-5">
        <h3>Demat AMC (Annual Maintenance Charge)</h3>
        <div className="row">
          <div className="col">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value of holdings</th>
                  <th scope="col"> AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td>FREE</td>
                </tr>
                <tr>
                  <td>₹4 lakh to ₹10 lakh</td>
                  <td>₹ 100 per year, charged quarterly*</td>
                </tr>
                <tr>
                  <td>Above ₹10 lakh</td>
                  <td>	₹ 300 per year, charged quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-1"></div>
        <p>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="">click here</a>.</p>
        </div>
      </div>
    </>
  );
}
