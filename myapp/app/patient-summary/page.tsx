"use client";

import { useEffect, useState } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import styles from "./summary.module.css";
export default function PatientSummaryPage() {
  const searchParams = useSearchParams();
   const router = useRouter();
  const [patient, setPatient] = useState<any>(null);


  // ✅ Get doctor directly from query params
  const doctor = {
    id: searchParams.get("id"),
    name: searchParams.get("name"),
    specialization: searchParams.get("specialization"),
    experience: searchParams.get("experience"),
    image: searchParams.get("image"),
    date: searchParams.get("date"),
    slot: searchParams.get("slot"),
  };

  useEffect(() => {
    const savedPatient = localStorage.getItem("patientData");
    if (savedPatient) {
      setPatient(JSON.parse(savedPatient));
    }
  }, []);

  if (!patient) return <p>Loading patient details...</p>;
  

  return (
    <div className={styles.container}>
      <h2>Review Summary</h2>
      {/* ---------------- Doctor Details ---------------- */}
      {doctor.name && (
        <div className={styles.doctorCard}>
          <img
            src={doctor.image || "/doctor.jpg"}
            alt={doctor.name}
            className={styles.doctorImg}
          />

          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <p>{doctor.experience}</p>

            <p><strong>Date:</strong> {doctor.date}</p>
            <p><strong>Slot:</strong> {doctor.slot}</p>
          </div>
        </div>
)}
      {/* ---------------- Patient Details ---------------- */}
      <div className={styles.card}>
        <h3>Patient Details</h3>

        <p><strong>Full Name</strong></p>
        <p>{patient.fullName}</p>

        <div className={styles.row}>
          <div>
            <p><strong>Age</strong></p>
            <p>{patient.age}</p>
          </div>
          <div>
            <p><strong>Weight</strong></p>
            <p>{patient.weight}</p>
          </div>
          <div>
            <p><strong>Relation</strong></p>
            <p>{patient.relation}</p>
          </div>
        </div>

        <p><strong>Problem</strong></p>
        <p>{patient.problem}</p>

        <p><strong>Mobile</strong></p>
        <p>{patient.mobile}</p>
      </div>

    <div className={styles.buttonWrapper}>
      {/* <button className={styles.payBtn}>Pay Consulting Fee</button> */}
    <button
  className={styles.payBtn}
  onClick={() => router.push(
    //`/appointments?id=${doctor.id}&name=${doctor.name}&specialization=${doctor.specialization}&experience=${doctor.experience}&image=${doctor.image}&date=${doctor.date}&slot=${doctor.slot}`
 `/appointments?id=${doctor.id}
      &name=${doctor.name}
      &specialization=${doctor.specialization}
      &experience=${doctor.experience}
      &image=${doctor.image}
      &date=${doctor.date}
      &slot=${doctor.slot}
      &patientName=${patient.fullName}
      &age=${patient.age}
      &weight=${patient.weight}
      &relation=${patient.relation}
      &problem=${encodeURIComponent(patient.problem)}
      &mobile=${patient.mobile}`

  )}
>
  Pay Consulting Fee
</button>
      <button className={styles.queryBtn}>Quick Query</button>
    </div>
    </div>
  );
}