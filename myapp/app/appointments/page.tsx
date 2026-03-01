// // "use client";

// // import { useState } from "react";
// // import "./appointments.css";

// // export default function Appointments() {
// //   const [activeTab, setActiveTab] = useState("upcoming");

// //   return (
// //     <div className="appointments-container">

// //       {/* Header */}
// //       <div className="header">
// //         <h2>Appointments</h2>
// //       </div>

// //       {/* Tabs */}
// //       <div className="tabs">
// //         <span
// //           className={activeTab === "upcoming" ? "active" : ""}
// //           onClick={() => setActiveTab("upcoming")}
// //         >
// //           Upcoming
// //         </span>
// //         <span
// //           className={activeTab === "completed" ? "active" : ""}
// //           onClick={() => setActiveTab("completed")}
// //         >
// //           Completed
// //         </span>
// //         <span
// //           className={activeTab === "canceled" ? "active" : ""}
// //           onClick={() => setActiveTab("canceled")}
// //         >
// //           Canceled
// //         </span>
// //       </div>

// //       {/* Appointment Card */}
// //       {activeTab === "upcoming" && (
// //         <div className="appointment-card">

// //           <div className="card-top">
// //             <img
// //               src="https://randomuser.me/api/portraits/women/44.jpg"
// //               alt="doctor"
// //             />

// //             <div className="card-details">
// //               <h3>Dr. Divya Das</h3>
// //               <p>Token no - 12</p>
// //               <p>Today | <span className="time">12:30 PM</span></p>
// //               <p className="payment">Payment | <span>Not paid</span></p>
// //             </div>

// //             <div className="card-buttons">
// //               <button className="reschedule">Reschedule</button>
// //               <button className="quick-query">Quick Query</button>
// //             </div>
// //           </div>

// //           <div className="card-bottom">
// //             <p>
// //               Reduce your waiting time and visiting time by paying the
// //               consulting fee upfront
// //             </p>
// //             <button className="make-payment">Make Payment</button>
// //           </div>

// //         </div>
// //       )}

// //       {/* Empty States */}
// //       {activeTab !== "upcoming" && (
// //         <div className="empty">
// //           <p>No appointments found.</p>
// //         </div>
// //       )}

// //       {/* Bottom Navigation */}
// //       <div className="bottom-nav">
// //         <span>Find Doctor</span>
// //         <span className="active">Appoint.</span>
// //         <span>Records</span>
// //         <span>Profile</span>
// //       </div>

// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import "./appointments.css";

// export default function Appointments() {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [showMenu, setShowMenu] = useState(false);

//   const searchParams = useSearchParams();

//   const name = searchParams.get("name");
//   const time = searchParams.get("time");
//   const date = searchParams.get("date");
//   const image = searchParams.get("image");

//   return (
//     <div className="appointments-container">

//       <div className="header">
//         <h2>Appointments</h2>
//       </div>

//       {/* Tabs */}
//       <div className="tabs">
//         <span
//           className={activeTab === "upcoming" ? "active" : ""}
//           onClick={() => setActiveTab("upcoming")}
//         >
//           Upcoming
//         </span>
//         <span
//           className={activeTab === "completed" ? "active" : ""}
//           onClick={() => setActiveTab("completed")}
//         >
//           Completed
//         </span>
//         <span
//           className={activeTab === "canceled" ? "active" : ""}
//           onClick={() => setActiveTab("canceled")}
//         >
//           Canceled
//         </span>
//       </div>

//       {activeTab === "upcoming" && name && (
//         <div className="appointment-card">
           
//           <div className="card-top">
//             <img src={image || ""} alt="doctor" />

//             <div className="card-details">
//               <h3>{name}</h3>
//               <p>{date} | <span className="time">{time}</span></p>
//               <p className="payment">Payment | <span>Paid</span></p>
//             </div>

//             {/* 3 Dots */}
//             <div className="menu-wrapper">
//               <button
//                 className="dots"
//                 onClick={() => setShowMenu(!showMenu)}
//               >
//                 ⋮
//               </button>

//               {showMenu && (
//                 <div className="dropdown">
//                   <p>View</p>
//                   <p>Quick Query</p>
//                   <p>Reschedule</p>
//                 </div>
//               )}         
//             </div>
//           </div>

//         </div>
//       )}

//       {activeTab !== "upcoming" && (
//         <div className="empty">
//           <p>No appointments found.</p>
//         </div>
//       )}

//       <div className="bottom-nav">
//         <span>Find Doctor</span>
//         <span className="active">Appoint.</span>
//         <span>Records</span>
//         <span>Profile</span>
//       </div>

//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./appointments.css";

export default function Page() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
 const id = searchParams.get("id");
 const specialization = searchParams.get("specialization");
  const experience = searchParams.get("experience");
  const name = searchParams.get("name");
  const time = searchParams.get("time");
  const date = searchParams.get("date");
  const image = searchParams.get("image");
  const slot = searchParams.get("slot");
// Patient details (receive but DO NOT display)
  const patientName = searchParams.get("patientName");
  const age = searchParams.get("age");
  const weight = searchParams.get("weight");
  const relation = searchParams.get("relation");
  const problem = searchParams.get("problem");
  const mobile = searchParams.get("mobile");

  return (
    <div className="appointments-container">
      
      {/* Header */}
      <div className="header">
        <h2>Appointments</h2>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <span
          className={activeTab === "upcoming" ? "active" : ""}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </span>

        <span
          className={activeTab === "completed" ? "active" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </span>

        <span
          className={activeTab === "canceled" ? "active" : ""}
          onClick={() => setActiveTab("canceled")}
        >
          Canceled
        </span>
      </div>

      {/* Upcoming Appointment */}
      {activeTab === "upcoming" && name && (
        <div className="appointment-card">

          <div className="card-top">
            <img src={image || ""} alt="doctor" />

            <div className="card-details">
              <h3>{name}</h3>
               <p>{specialization}</p>
              <p>
                {date} | <span className="time">{time}</span>
              </p>
              <p className="payment">
                Payment | <span>Not Paid</span>
              </p>
            </div>

            {/* 3 Dots Dropdown */}
            <div className="menu-wrapper">
              <button
                className="dots"
                onClick={() => setShowMenu(!showMenu)}
              >
                ⋮
              </button>

              {showMenu && (
                <div className="dropdown">
                  <p>View</p>
                  <p>Quick Query</p>
                  <p>Reschedule</p>
                </div>
              )}
            </div>
          </div>

          {/* Info Text */}
          <p className="info-text">
            Reduce your waiting time and visiting time by paying the consulting fee upfront
          </p>

          {/* Payment Button */}
          <div className="make-payment">
             <button
        onClick={() =>
          router.push(
            `/appointment-details?id=${id}&name=${name}&specialization=${specialization}&experience=${experience}&image=${image}&date=${date}&slot=${slot}&patientName=${patientName}&age=${age}&weight=${weight}&relation=${relation}&problem=${encodeURIComponent(problem || "")}&mobile=${mobile}`
          )
        }
      >
        Make Payment
      </button>
            {/* <button>Make Payment</button> */}
          </div>

        </div>
      )}

      {/* Empty State */}
      {activeTab !== "upcoming" && (
        <div className="empty">
          <p>No appointments found.</p>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <span onClick={() => router.push("/home")}>
    Find Doctor</span>
        <span className="active">Appoint.</span>
        <span>Records</span>
        <span>Profile</span>
      </div>

    </div>
  );
}