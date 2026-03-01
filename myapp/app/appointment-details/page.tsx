
// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import "./appointment-details.css";

// export default function AppointmentDetails() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // Doctor
//   const name = searchParams.get("name");
//   const specialization = searchParams.get("specialization");
//   const experience = searchParams.get("experience");
//   const image = searchParams.get("image");
//   const date = searchParams.get("date");
//   const slot = searchParams.get("slot");

//   // Patient
//   const patientName = searchParams.get("patientName");
//   const age = searchParams.get("age");
//   const weight = searchParams.get("weight");
//   const problem = searchParams.get("problem");

//   return (
//     <div className="details-container">

//       {/* Header */}
//       <div className="header">
//         <span className="back" onClick={() => router.back()}>←</span>
//         <h2>Appointments Details</h2>
//       </div>

//       {/* Doctor Card */}
//       <div className="doctor-card">
//         <img src={image || "/doctor.jpg"} alt="doctor" />
//         <div>
//           <h3>{name}</h3>
//           <p>{specialization} - Dombivli</p>
//           <p>{experience}</p>
//         </div>
//       </div>

//       {/* Status */}
//       <div className="status-card">
//         <span>Appointment Status</span>
//         <span className="waiting">Waiting</span>
//       </div>

//       {/* Patient Details */}
//       <div className="card">
//         <h4>Full name</h4>
//         <p>{patientName}</p>

//         <div className="row">
//           <div>
//             <h4>Age</h4>
//             <p>{age}</p>
//           </div>
//           <div>
//             <h4>Weight</h4>
//             <p>{weight}</p>
//           </div>
//         </div>

//         <h4>Problem</h4>
//         <p>{problem}</p>
//       </div>

//       {/* Live Tracking */}
//       <div className="card">
//         <h4>Live Tracking</h4>
//         <p>10 Patient Consulting expected consulting time 8:20 PM</p>

//         <div className="btn-row">
//           <button className="outline">Reschedule</button>
//           <button className="outline">Cancel</button>
//         </div>
//       </div>

//       {/* Payment */}
//       <div className="payment">
//         <h4>Payment</h4>
//         <p>Reduce your waiting time by Paying the consulting fee upfront</p>

//         <button className="pay-btn">Make Payment</button>
//       </div>

//       {/* Bottom Nav */}
//       <div className="bottom-nav">
//         <span onClick={() => router.push("/home")}>Find a Doctor</span>
//         <span className="active">Appoint.</span>
//         <span>Records</span>
//         <span>Profile</span>
//       </div>

//     </div>
//   );
// }
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import "./appointment-details.css";

export default function AppointmentDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Doctor
 const id = searchParams.get("id");
  const name = searchParams.get("name");
  const specialization = searchParams.get("specialization");
  const experience = searchParams.get("experience");
  const image = searchParams.get("image");
  const date = searchParams.get("date");
  const slot = searchParams.get("slot");

  // Patient
  const patientName = searchParams.get("patientName");
  const age = searchParams.get("age");
  const weight = searchParams.get("weight");
  const problem = searchParams.get("problem");

  // -------- Live Tracking Logic --------
  const patientsAhead = 10;
  const consultationTimePerPatient = 5; // minutes

  let expectedTime = "";

  if (slot) {
    const converted = convertTo24Hour(slot);
    const slotDate = new Date(`1970-01-01T${converted}:00`);

    const totalMinutes = patientsAhead * consultationTimePerPatient;
    slotDate.setMinutes(slotDate.getMinutes() + totalMinutes);

    expectedTime = slotDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function convertTo24Hour(time: string) {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = String(parseInt(hours) + 12);
    }

    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    return `${hours}:${minutes}`;
  }

  return (
    <div className="details-container">

      {/* Header */}
      <div className="header">
        <span className="back" onClick={() => router.back()}>←</span>
        <h2>Appointments Details</h2>
      </div>

      {/* Doctor Card */}
      <div className="doctor-card">
        <img src={image || "/doctor.jpg"} alt="doctor" />
        <div>
          <h3>{name}</h3>
          <p>{specialization} - Dombivli</p>
          <p>{experience}</p>
        </div>
      </div>

      {/* Status */}
      <div className="status-card">
        <span>Appointment Status</span>
        <span className="waiting">Waiting</span>
      </div>

      {/* Patient Details */}
      <div className="card">
        <h4>Full name</h4>
        <p>{patientName}</p>

        <div className="row">
          <div>
            <h4>Age</h4>
            <p>{age}</p>
          </div>
          <div>
            <h4>Weight</h4>
            <p>{weight}</p>
          </div>
        </div>

        <h4>Problem</h4>
        <p>{problem}</p>
      </div>

      {/* Live Tracking */}
      <div className="card">
        <h4>Live Tracking</h4>
        <p>
          {patientsAhead} Patient Consulting <br />
          Expected consulting time {expectedTime}
        </p>

        <div className="btn-row">
          <button className="outline" onClick={() => router.push(`/appointment/${id}`)}
          >Reschedule</button>
          <button className="outline">Cancel</button>
        </div>
      </div>

      {/* Payment */}
      <div className="payment">
        <h4>Payment</h4>
        <p>Reduce your waiting time by Paying the consulting fee upfront</p>

        <button className="pay-btn">Make Payment</button>
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        <span onClick={() => router.push("/home")}>Find a Doctor</span>
        <span className="active">Appoint.</span>
        <span>Records</span>
        <span>Profile</span>
      </div>

    </div>
  );
}