import {
  collection,
  doc,
  setDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "./config";

export const apiPostMessageDoc = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const messageRef = collection(firestore, "messages");
    const q = query(messageRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return await setDoc(doc(firestore, "messages", email), {
        name,
        email,
        messages: [{ message, createdAt: new Date().toISOString() }],
      });
    } else {
      return await updateDoc(doc(firestore, "messages", email), {
        messages: [
          ...querySnapshot.docs[0].data().messages,
          { message, createdAt: new Date().toISOString() },
        ],
      });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
