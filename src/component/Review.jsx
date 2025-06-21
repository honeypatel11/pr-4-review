import React, { useState } from 'react';

const Review = () => {
  const [input, setInput] = useState({
    name: "",
    message: "",
    date: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [yyyy, mm, dd] = dateStr.split("-");
    return `${dd}-${mm}-${yyyy.slice(2)}`;
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validateErrors = {};

    if (input.name.trim() === "") validateErrors.name = "Enter Valid Name!";
    if (input.message.trim() === "") validateErrors.message = "Enter Valid Review!";
    if (input.date.trim() === "") validateErrors.date = "Select Valid Date!";
    if (input.rating.trim() === "") validateErrors.rating = "Select Rating!";

    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      if (isUpdate) {
        const updatedArr = [...submittedData];
        updatedArr[editIndex] = input;
        setSubmittedData(updatedArr);
        setIsUpdate(false);
        setEditIndex(null);
      } else {
        setSubmittedData([...submittedData, input]);
      }

      setInput({ name: "", message: "", date: "", rating: "" });
    }
  };

  const handleEdit = (idx) => {
    const editObj = submittedData[idx];
    setInput({ ...editObj });
    setEditIndex(idx);
    setIsUpdate(true);
  };

  const handleDelete = (idx) => {
    const afterDelete = submittedData.filter((_, index) => idx !== index);
    setSubmittedData(afterDelete);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className={`flex w-full max-w-5xl gap-10 flex-col md:flex-row ${submittedData.length === 0 ? "justify-center items-center" : ""}`}>

       
        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-700 p-6 rounded-xl w-full max-w-md shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-yellow-400 text-xl font-semibold">Clients</h2>
            <h1 className="text-3xl font-bold">FEEDBACK</h1>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={input.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
       
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">Review</label>
            <textarea
              id="message"
              value={input.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
              rows={4}
              placeholder="Your Comment"
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

        
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
            <input
              id="date"
              type="date"
              value={input.date}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border-gray-600 text-white placeholder-white accent-white"
             
            />
            {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
          </div>

         
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium mb-1">Rating</label>
            <select
              id="rating"
              value={input.rating}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
            >
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            {errors.rating && <p className="text-sm text-red-500">{errors.rating}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-pink-600 hover:bg-pink-700 text-white rounded text-base font-semibold transition"
          >
            {isUpdate ? "Update" : "Submit"}
          </button>
        </form>

      
        {submittedData.length > 0 && (
          <div className="w-full flex-1 max-h-[480px] overflow-y-auto pr-2">
            {submittedData.map((review, index) => (
              <div
                key={index}
                className="bg-[#1E1E2F] border border-purple-600 rounded-xl text-white p-4 mb-4 shadow-md max-w-sm mx-auto"
              >
                <h3 className="text-center text-lg font-bold mb-3 tracking-wider">
                  <span className="text-yellow-400">Clients</span> Feedback
                </h3>

                <div className="text-center">
                  <p className="font-bold text-base text-white mb-1">{review.name}</p>
                  <p className="italic text-gray-300 text-sm mb-2">“{review.message}”</p>
                  <p className="text-sm text-white mb-1">{formatDate(review.date)}</p>
                  <div className="text-yellow-400 text-sm mb-3">
                    {"⭐".repeat(Number(review.rating))}
                  </div>
                </div>

                <div className="flex justify-center gap-6 mt-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-5 py-2 text-base bg-yellow-500 hover:bg-yellow-600 rounded-md shadow-md transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-5 py-2 text-base bg-red-500 hover:bg-red-600 rounded-md shadow-md transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
