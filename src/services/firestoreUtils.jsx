import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const fetchEarningsFromFirestore = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "earnings"));
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching earnings", error);
        throw error;
    }
};