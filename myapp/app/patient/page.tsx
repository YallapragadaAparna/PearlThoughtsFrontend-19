"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./patient.module.css";

export default function PatientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    mobile: "",
    weight: "",
    problem: "",
    relation: "",
    visitType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // ✅ Save patient in localStorage
    localStorage.setItem("patientData", JSON.stringify(formData));

    // ✅ Get doctor details from URL
    const query = new URLSearchParams({
      id: searchParams.get("id") || "",
      name: searchParams.get("name") || "",
      specialization: searchParams.get("specialization") || "",
      experience: searchParams.get("experience") || "",
      image: searchParams.get("image") || "",
      date: searchParams.get("date") || "",
      slot: searchParams.get("slot") || "",
    }).toString();

    // ✅ Redirect with doctor details again
    router.push(`/patient-summary?${query}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Patient Details</h2>

        <input name="fullName" placeholder="Full Name" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="gender" placeholder="Gender" onChange={handleChange} />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} />
        <input name="weight" placeholder="Weight" onChange={handleChange} />
        <textarea name="problem" placeholder="Problem" onChange={handleChange} />

        <select name="relation" onChange={handleChange}>
          <option value="">Select Relation</option>
          <option value="Son">Son</option>
          <option value="Brother">Brother</option>
          <option value="Sister">Sister</option>
        </select>

        <select name="visitType" onChange={handleChange}>
          <option value="">Visit Type</option>
          <option value="Clinic">Clinic Visit</option>
          <option value="Online">Online Consultation</option>
        </select>

        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}