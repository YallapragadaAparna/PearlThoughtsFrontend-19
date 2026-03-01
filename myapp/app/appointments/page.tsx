"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./appointments.css";
type TabType = "upcoming" | "completed" | "canceled";
export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Proper initial state
  const [activeTab, setActiveTab] = useState<TabType
>("upcoming");
  const [showMenu, setShowMenu] = useState(false);

  // ✅ Sync tab with URL
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "upcoming" || tab === "completed" || tab === "canceled") {
      setActiveTab(tab);
    } else {
      setActiveTab("upcoming");
    }
 
  }, [searchParams]); // ✅ FIXED (was missing );

  // URL params
  const id = searchParams.get("id");
  const specialization = searchParams.get("specialization");
  const experience = searchParams.get("experience");
  const name = searchParams.get("name");
  const time = searchParams.get("time");
  const date = searchParams.get("date");
  const image = searchParams.get("image");
  const slot = searchParams.get("slot");

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

      {/*================= TABS =================*/}
      <div className="tabs">
        <span
          className={activeTab === "upcoming" ? "active" : ""}
          onClick={() => router.push(`/appointments?tab=upcoming&${searchParams.toString().replace(/tab=[^&]*/, "")}`)}
        >
          Upcoming
        </span>

        <span
          className={activeTab === "completed" ? "active" : ""}
          onClick={() => router.push(`/appointments?tab=completed&${searchParams.toString().replace(/tab=[^&]*/, "")}`)}
        >
          Completed
        </span>

        <span
          className={activeTab === "canceled" ? "active" : ""}
          onClick={() => router.push(`/appointments?tab=canceled&${searchParams.toString().replace(/tab=[^&]*/, "")}`)}
        >
          Canceled
        </span>
      </div>

      {/* ================= UPCOMING ================= */}
      {activeTab === "upcoming" && name && (
        <div className="appointment-card">

          <div className="left-section">
            <img src={image || "/doctor.jpg"} alt="doctor" />

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

          <div className="center-text">
            Reduce your waiting time and visiting time by paying the
            consulting fee upfront
          </div>

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
          </div>

        </div>
      )}

     {/* ================= COMPLETED ================= */}
      {activeTab === "completed" && name && (
        <div className="appointment-card">
          <div className="left-section">
          <img src={image || "/doctor.jpg"} alt="doctor" />
          <div className="card-details">
            <h3>{name}</h3>
            <p>{specialization}</p>
            <p>{date} | {time}</p>
            <p className="payment">
              Payment | <span style={{color:"green"}}>Paid</span>
            </p>
            <p style={{color:"green", fontWeight:"600"}}>
              Appointment Completed
            </p>
          </div>
          </div>
        </div>
      )}

             {/* ================= CANCELED ================= */}
      {activeTab === "canceled" && name && (
        <div className="appointment-card">
          <div className="left-section">
          <img src={image || "/doctor.jpg"} alt="doctor" />
          <div className="card-details">
            <h3>{name}</h3>
            <p>{specialization}</p>
            <p>{date} | {time}</p> 
            <p style={{color:"red", fontWeight:"600"}}>
              Appointment Canceled
            </p>
          </div>
          </div>
        </div>
      )}
       {/* ================= EMPTY STATE ================= */}
       {!name && (
        <div className="empty">
          <p>No appointments found.</p>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="bottom-nav">
        <span onClick={() => router.push("/home")}>Find Doctor</span>
        <span className="active">Appoint.</span>
        <span>Records</span>
        <span>Profile</span>
      </div>

    </div>
  );
}