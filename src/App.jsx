import SpeechRecognitionComponent from "./components/SpeechRecognition";

function App() {
  return (
    <main className="container mx-auto max-md:px-4">
      <h1 className="text-3xl font-bold my-6 text-center">
        Ovozli Tanib Olish
      </h1>
      <SpeechRecognitionComponent />
    </main>
  );
}

export default App;
