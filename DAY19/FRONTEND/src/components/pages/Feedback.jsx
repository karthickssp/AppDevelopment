import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const email = localStorage.getItem("email");
  const message = { email, feedback };

  const handleSendClick = async () => {
    if (email == null) {
      toast.error("Login first");
    } else {
      axios.post("http://localhost:8080/api/v1/auth/feedback/add", message);
      toast.success("Thanks for your feedback!");
      setFeedback("");
    }
  };
  return (
    <section>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  <div className="w-100">
                    <MDBTypography tag="h5">
                      Write your Feedback here?
                    </MDBTypography>
                    <MDBTextArea
                      label=""
                      rows={4}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        style={{
                          width: "100%",
                          backgroundColor: "green",
                          color: "white",
                          fontSize: "18px",
                        }}
                        onClick={handleSendClick}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}
