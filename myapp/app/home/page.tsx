"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./home.css";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  availableTime: string;
  location: string;
  rating: number;
  image: string;
}

export default function HomePage() {
  const router = useRouter();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [likedDoctors, setLikedDoctors] = useState<number[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    // ✅ Fetch ALL doctors (NOT single doctor)
    fetch("https://pearlthoughtsfrontend-19-11.onrender.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, [router]);

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleLike = (id: number) => {
    if (likedDoctors.includes(id)) {
      setLikedDoctors(likedDoctors.filter((docId) => docId !== id));
    } else {
      setLikedDoctors([...likedDoctors, id]);
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to exit?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      router.push("/login");
    }
  };

  if (!user) return null;

  return (
    <div className="home-container">
      
      {/* HEADER */}
      <div className="header">
        <div>
          <h2>Hello, {user.name} 👋</h2>
          {/* <p className="location">Connolly Avenue</p> */}
        </div>

        <div className="header-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

          <div className="profile-circle">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Doctors"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* DOCTOR LIST */}
      <div className="doctor-list">
        {filteredDoctors.map((doc) => (
          <div key={doc.id} className="doctor-card">

            {/* HEART ICON */}
            <span
              className={`heart ${
                likedDoctors.includes(doc.id) ? "liked" : ""
              }`}
              onClick={() => toggleLike(doc.id)}
            >
              {likedDoctors.includes(doc.id) ? "♥" : "♡"}
            </span>

            <img
              src={doc.image}
              alt={doc.name}
              className="doctor-img"
            />

            <div className="doctor-info">
              <h3>{doc.name}</h3>
              <p className="specialization">
                Sr. {doc.specialization}
              </p>
              <p className="experience">{doc.experience}</p>
              <p className="time">{doc.availableTime}</p>
              <p className="rating">⭐ {doc.rating}</p>

              <button
                className="appointment-btn"
                onClick={() =>
                  router.push(`/doctors/${doc.id}`)
                }
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="bottom-nav">
        <span
          className="active"
          onClick={() => router.push("/home")}
        >
          Home
        </span>
       <span>
        {/* <span onClick={() => router.push("/appointment/${doc.id}")}> */}
          Appointment
        </span>

        <span onClick={() => router.push("/records")}>
          Records
        </span>

        <span onClick={() => router.push("/profile")}>
          Profile
        </span>
      </div>
    </div>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface Doctor {
//   id: number;
//   name: string;
//   specialization: string;
//   experience: string;
//   availableTime: string;
//   location: string;
//   rating: number;
//   image: string;
// }

// export default function HomePage() {
//   const router = useRouter();
//   const [doctors, setDoctors] = useState<Doctor[]>([]);

//   useEffect(() => {
//     fetch("https://pearlthoughtsfrontend-19-6.onrender.com/doctors")
//       .then((res) => res.json())
//       .then((data) => setDoctors(data));
//   }, []);

//   return (
//     <div>
//       <h2>Doctors</h2>

//       {doctors.map((doc) => (
//         <div key={doc.id} style={{ marginBottom: 20 }}>
//           <h3>{doc.name}</h3>
//           <p>{doc.specialization}</p>

//           {/* 👇 Send doctor ID in URL */}
//           <button
//             onClick={() => router.push(`/appointment/${doc.id}`)}
//           >
//             Book Appointment
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
