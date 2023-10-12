

export const Login = () => {
  return (
    <div className="inputs">
    <input type="text" placeholder="Enter Name"></input>
    <input type="text" placeholder="Enter Surname"></input>
    <input type="text" placeholder="Enter Age"></input>
    <select>
        <option value="">Please Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
     </select>
    <button>Submit</button>
    </div>
  );
}
