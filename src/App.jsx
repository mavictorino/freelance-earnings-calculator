import { db } from './services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const testFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  testFirestore();

  return <div className="App">Firebase is connected!</div>;
}

export default App;
