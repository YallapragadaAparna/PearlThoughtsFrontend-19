// import styles from "./unable-to-book.module.css";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function UnableToBookPage() {
//   const router = useRouter();

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>

//         {/* Header */}
//         <div className={styles.header}>
//           <button className={styles.backBtn} onClick={() => router.back()}>
//             ←
//           </button>
//           <h1 className={styles.title}>Unable to Book</h1>
//         </div>

//         {/* Doctor Card */}
//         <div className={styles.doctorCard}>
//           <div className={styles.doctorInfo}>
//             <Image
//               src="/doctor.jpg"
//               alt="Doctor"
//               width={70}
//               height={70}
//               className={styles.doctorImage}
//             />
//             <div>
//               <h2 className={styles.doctorName}>Dr. Kumar Das</h2>
//               <p className={styles.subText}>Cardiologist - Dombivli</p>
//               <p className={styles.subText}>MBBS, MD (Internal Medicine)</p>
//             </div>
//           </div>
//         </div>

//         {/* Message Box */}
//         <div className={styles.messageBox}>
//           Sorry Apt slot/consulting time is over would you like to make
//           appointment with the next Available slot ?
//         </div>

//         {/* Yes Button */}
//         <button className={styles.yesBtn}>
//           Yes
//         </button>

//       </div>
//     </div>
//   );
// }
"use client";

import styles from "./unable-to-book.module.css";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function UnableToBookPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch data from URL
  const name = searchParams.get("name");
  const specialization = searchParams.get("specialization");
  const experience = searchParams.get("experience");
  const image = searchParams.get("image");

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* Header */}
        <div className={styles.header}>
          <button
            className={styles.backBtn}
            onClick={() => router.back()}
          >
            ←
          </button>
          <h1 className={styles.title}>Unable to Book</h1>
        </div>

        {/* Doctor Card */}
        <div className={styles.doctorCard}>
          <div className={styles.doctorInfo}>
            <Image
              src={image || "/doctor.jpg"}
              alt="Doctor"
              width={70}
              height={70}
              className={styles.doctorImage}
            />
            <div>
              <h2 className={styles.doctorName}>{name}</h2>
              <p className={styles.subText}>{specialization}</p>
              <p className={styles.subText}>{experience}</p>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div className={styles.messageBox}>
          Sorry Apt slot/consulting time is over. Would you like to make
          appointment with the next available slot?
        </div>

        {/* Yes Button */}
        <button
          className={styles.yesBtn}
          onClick={() =>
            router.push(
              `/review-summary?name=${name}&specialization=${specialization}&experience=${experience}&image=${image}`
            )
          }
        >
          Yes
        </button>

      </div>
    </div>
  );
}