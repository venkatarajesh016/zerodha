export default function AccountTable() {
   
  return (
    <>
      <div className="container">
        <h3>Charges for account opening</h3>
        <div className="row mb-5 ">
          <div className="col">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Type of account</th>
                        <th scope="col">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Online account</td>
                        <td>300/-</td>
                        </tr>
                        <tr>
                        <td>Offline account</td>
                        <td>600/-</td>
                        </tr>
                        <tr>
                        <td>NRI account (offline only)</td>
                        <td>600/-</td>
                        </tr>
                        <tr>
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>1200/-</td>
                        </tr>
                    </tbody>
                </table>
          </div>
          
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
