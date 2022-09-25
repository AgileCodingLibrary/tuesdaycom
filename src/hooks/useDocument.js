import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

export const useDocument = ({ collection, id }) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //get real time data
  useEffect(() => {
    const ref = projectFireStore.collection(collection).doc(id);
    const unsubscribe = ref.onSnapShot(
      (snapshot) => {
        setDocument({ ...snapshot.data(), id: id });
        setError(null);
      },
      (err) => {
        console.log(err.message);
        setError("Failed to get document");
      }
    );

    return () => unsubscribe();
  }, [document, id]);

  return { document, error };
};
