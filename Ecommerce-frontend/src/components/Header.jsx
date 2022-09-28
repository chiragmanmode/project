import { color } from "@mui/system";
import { useSelector } from "react-redux";

function Header() {
  const state = useSelector((state) => state);
  console.log("Header ", state.loggedin.Username);
  return (
    <div className="jumbotron p-3 mb-3 rounded-0 bg-dark ">

      <img
        
        src={"img_2.png"}
        style={{ width: "290px", height: "50px" }}
        className="rounded mx-auto d-block"
      />
      {state.loggedin.IsLoggedIn ? (
        <>
          {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
          <h5 className="float-right text-white font-weight-bold">
           Welcome 😊 {state.loggedin.Username}
          </h5>{" "}
        </>
      ) : (
        ""
      )}
      <h2 className=" font_design text-center text-info font-weight-bold">
                  
      </h2>
      <div className="clearfix"></div>
    </div>
  );
}

export default Header;
