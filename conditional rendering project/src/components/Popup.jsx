const Popup = ({ setPopup, popup, title, description }) => {
  return (
    <>
      {popup && (
        <div className="w-full h-screen bg-black absolute flex justify-center items-center">
          <button
            onClick={() => setPopup(false)}
            className="p-3 border-none bg-gray-900 rounded absolute top-3 right-4 cursor-pointer hover:bg-gray-900/70"
          >
            ❌
          </button>
          <div className="w-[40rem] bg-gray-900 h-[20rem] p-5 rounded-2xl flex justify-center items-center flex-col">
            <h1 className="text-4xl text-white mb-3">⚠ {title}</h1>
            <p className="text-lg text-white my-3">{description}</p>
            <div className="flex justify-center items-center gap-4">
              <button className="py-3 px-5 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600">
                No
              </button>
              <button className="py-3 px-5 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
