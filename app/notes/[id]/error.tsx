'use client';
import css from '../ErrorMessage.module.css'


type Props = {
  error: Error;
};

const Error  = ({ error }: Props) => {
  return (
    <div  style={{ padding: "30px", textAlign: "center", color: "red" }}>
    
    <p className={css.text}> Could not fetch note details. {error.message}</p>
    </div>
  );
}

export default Error;



// export default function Error(){

//     return(
// <p className={css.text}>There was an error, please try again...</p>)
// }

// "use client"; // Error components must be Client Components

// import { useEffect } from "react";

// interface ErrorProps {
//   error: Error & { digest?: string };
//   reset: () => void; // Function to attempt to re-render the segment
// }

// export default function Error({ error, reset }: ErrorProps) {
//   useEffect(() => {
//     // Optionally log the error to an error reporting service
//     console.error(error);
//   }, [error]);

//   return (
//     <main>
//       <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
//         <h2>Something went wrong!</h2>
//         <p> {error.message}</p>
//         <button
//           onClick={
//             // Attempt to recover by trying to re-render the segment
//             () => reset()
//           }
//           style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}
//         >
//           Try again
//         </button>
//       </div>
//     </main>
//   );
// }

