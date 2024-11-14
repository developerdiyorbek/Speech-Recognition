import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponent = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <p className="text-red-500 font-semibold text-lg">
        Ovozli tanib olish brauzeringizda qo&apos;llab-quvvatlanmaydi.
      </p>
    );
  }

  return (
    <section>
      <p className="text-xl font-semibold mb-4 text-center">
        {listening ? "Ovoz tanib olinmoqda..." : "To'xtatildi"}
      </p>

      <textarea
        className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none mb-4 text-lg"
        value={transcript}
        readOnly
        placeholder="Tanib olingan matn shu yerda ko'rsatiladi..."
      />

      <div className="flex gap-4 justify-center max-md:flex-wrap">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() =>
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-US",
            })
          }
        >
          Boshlab berish
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => SpeechRecognition.stopListening()}
        >
          To&apos;xtatish
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={resetTranscript}
        >
          Tozalash
        </button>
      </div>
    </section>
  );
};

export default SpeechRecognitionComponent;
