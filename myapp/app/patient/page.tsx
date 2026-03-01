// // "use client";

// // import { useState } from "react";
// // import styles from "./patient.module.css";

// // export default function PatientPage() {
// //   const [formData, setFormData] = useState({
// //     fullName: "Sudharkar Murti",
// //     age: "22",
// //     gender: "Male",
// //     mobile: "9999999900",
// //     weight: "50",
// //     problem: "",
// //     relation: "",
// //     visitType: "",
// //   });

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   return (
// //     <div className={styles.container}>
// //         <div className={styles.card}>
// //       <h2 className={styles.header}>Patient Details</h2>

// //       {/* Full Name */}
// //       <div className={styles.inputGroup}>
// //         <label>Full Name</label>
// //         <input
// //           name="fullName"
// //           value={formData.fullName}
// //           onChange={handleChange}
// //         />
// //       </div>

// //       {/* Age & Gender */}
// //       <div className={styles.row}>
// //         <div className={styles.inputGroup}>
// //           <label>Age</label>
// //           <input
// //             name="age"
// //             value={formData.age}
// //             onChange={handleChange}
// //           />
// //         </div>

// //         <div className={styles.inputGroup}>
// //           <label>Gender</label>
// //           <input
// //             name="gender"
// //             value={formData.gender}
// //             onChange={handleChange}
// //           />
// //         </div>
// //       </div>

// //       {/* Mobile */}
// //       <div className={styles.inputGroup}>
// //         <label>Mobile Number</label>
// //         <input
// //           name="mobile"
// //           value={formData.mobile}
// //           onChange={handleChange}
// //         />
// //       </div>

// //       {/* Weight */}
// //       <div className={styles.inputGroup}>
// //         <label>Weight</label>
// //         <div className={styles.weightBox}>
// //           <input
// //             name="weight"
// //             value={formData.weight}
// //             onChange={handleChange}
// //           />
// //           <span>Kg</span>
// //         </div>
// //       </div>

// //       {/* Problem */}
// //       <div className={styles.inputGroup}>
// //         <label>Problem</label>
// //         <textarea
// //           name="problem"
// //           placeholder="Write something about your problem"
// //           value={formData.problem}
// //           onChange={handleChange}
// //         />
// //       </div>

// //       {/* Relation */}
// //       <div className={styles.inputGroup}>
// //         <label>Relationship with Patient</label>
// //         <select name="relation" onChange={handleChange}>
// //           <option value="">Select</option>
// //           <option value="Son">Son</option>
// //           <option value="Brother">Brother</option>
// //           <option value="Sister">Sister</option>
// //         </select>
// //       </div>

// //       {/* Visit Type */}
// //       <div className={styles.inputGroup}>
// //         <label>Visit Type</label>
// //         <select name="visitType" onChange={handleChange}>
// //           <option value="">Select Visit Type</option>
// //           <option value="Clinic">Clinic Visit</option>
// //           <option value="Online">Online Consultation</option>
// //         </select>
// //       </div>

// //       {/* Payment Section */}
// //       <div className={styles.payment}>
// //         <h3>Payment</h3>
// //         <p>Reduce your waiting time by paying consulting fee upfront</p>
// //       </div>

// //       <button className={styles.primaryBtn}>
// //       Save
// //       </button>

// //       <button className={styles.secondaryBtn}>
// //         Quick Query
// //       </button>
// //     </div>
// //     </div>
// //   );
// // }
// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import styles from "./patient.module.css";

// // export default function PatientPage() {
// //   const router = useRouter();

// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     age: "",
// //     gender: "",
// //     mobile: "",
// //     weight: "",
// //     problem: "",
// //     relation: "",
// //     visitType: "",
// //   });

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSave = async () => {
// //     try {
// //       const response = await fetch("http://localhost:3001/patients", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await response.json();

// //       // Redirect to summary page with id
// //       router.push(`/patient-summary?id=${data.id}`);
// //     } catch (error) {
// //       alert("Error saving patient");
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.card}>
// //         <h2>Patient Details</h2>

// //         <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// //         <input name="age" placeholder="Age" onChange={handleChange} />
// //         <input name="gender" placeholder="Gender" onChange={handleChange} />
// //         <input name="mobile" placeholder="Mobile" onChange={handleChange} />
// //         <input name="weight" placeholder="Weight" onChange={handleChange} />
// //         <textarea name="problem" placeholder="Problem" onChange={handleChange} />
        
// //         <select name="relation" onChange={handleChange}>
// //           <option value="">Select Relation</option>
// //           <option value="Son">Son</option>
// //           <option value="Brother">Brother</option>
// //           <option value="Sister">Sister</option>
// //         </select>

// //         <select name="visitType" onChange={handleChange}>
// //           <option value="">Visit Type</option>
// //           <option value="Clinic">Clinic Visit</option>
// //           <option value="Online">Online Consultation</option>
// //         </select>

// //         <button onClick={handleSave}>Save</button>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./patient.module.css";

// export default function PatientPage() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     gender: "",
//     mobile: "",
//     weight: "",
//     problem: "",
//     relation: "",
//     visitType: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  

//   const handleSave = () => {
//     // ✅ Save in localStorage
//     localStorage.setItem("patientData", JSON.stringify(formData));

//     // ✅ Redirect to summary page
//     router.push("/patient-summary/");

//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h2>Patient Details</h2>

//         <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//         <input name="age" placeholder="Age" onChange={handleChange} />
//         <input name="gender" placeholder="Gender" onChange={handleChange} />
//         <input name="mobile" placeholder="Mobile" onChange={handleChange} />
//         <input name="weight" placeholder="Weight" onChange={handleChange} />
//         <textarea name="problem" placeholder="Problem" onChange={handleChange} />

//         <select name="relation" onChange={handleChange}>
//           <option value="">Select Relation</option>
//           <option value="Son">Son</option>
//           <option value="Brother">Brother</option>
//           <option value="Sister">Sister</option>
//         </select>

//         <select name="visitType" onChange={handleChange}>
//           <option value="">Visit Type</option>
//           <option value="Clinic">Clinic Visit</option>
//           <option value="Online">Online Consultation</option>
//         </select>

//         <button onClick={handleSave}>Save</button>
//       </div>
//     </div>
//   );
// }
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