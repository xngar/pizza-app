const CrustSelection = ({ crust, setCrust }) => {
  return <div>
    <div className="flex gap-5 mt-3 mb-3">
      <label className="flex gap-3">
        <input onChange={(e) => setCrust(e.target.value)} type="radio" value="traditional" name="crust" checked={crust === "traditional"} />
        Traditional
      </label>

      <label className="flex gap-3">
        <input onChange={(e) => setCrust(e.target.value)} type="radio" name="crust" value="gruesa" checked={crust === "gruesa"} />
        Masa Gruesa
      </label>
    </div>

  </div>;
};

export default CrustSelection;
