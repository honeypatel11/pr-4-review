import { useState } from "react";

const Review = () => {
  const [input, setInput] = useState({
    name: "", message: "", date: "", rating: "",
  });
  const [reviewError, setReviewError] = useState({});
  const [reviews, setReviews] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (input.name.trim() === "") errors.name = "Please enter a valid name.";
    if (input.message.trim() === "") errors.message = "Please enter a valid message.";
    if (input.date.trim() === "") errors.date = "Please select a date.";
    if (input.rating.trim() === "" || input.rating === "Choose a rating") {
      errors.rating = "Please select a rating.";
    }

    setReviewError(errors);

    if (Object.keys(errors).length === 0) {
      if (editIndex !== null) {
        const updatedReviews = [...reviews];
        updatedReviews[editIndex] = input;
        setReviews(updatedReviews);
        setEditIndex(null);
      } else {
        setReviews([...reviews, input]);
      }

      setInput({ name: "", message: "", date: "", rating: "" });
    }
  };

  const handleEdit = (index) => {
    setInput(reviews[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    if (editIndex === index) {
      setInput({ name: "", message: "", date: "", rating: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gradient-to-br from-[#ece9e6] to-[#ffffff] font-sans">
      <form
        className="max-w-md mx-auto bg-white/60 backdrop-blur-md shadow-lg border border-gray-200 rounded-2xl p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
          {editIndex !== null ? "✏️ Edit Review" : "📝 Submit a Review"}
        </h2>

        {["name", "message", "date", "rating"].map((field) => (
          <div className="mb-4" key={field}>
            <label htmlFor={field} className="block text-sm font-semibold capitalize text-gray-700">
              {field}:
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                value={input[field]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white/70 text-sm"
                rows={2}
              />
            ) : field === "rating" ? (
              <select
                id={field}
                value={input[field]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white/70 text-sm"
              >
                <option>Choose a rating</option>
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            ) : (
              <input
                type={field === "date" ? "date" : "text"}
                id={field}
                value={input[field]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white/70 text-sm"
              />
            )}
            {reviewError[field] && <p className="text-red-500 text-xs">{reviewError[field]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className={`w-full mt-3 px-4 py-2 rounded-md text-white font-semibold text-sm shadow-md transition 
            ${editIndex !== null ? "bg-yellow-500 hover:bg-yellow-600" : "bg-indigo-600 hover:bg-indigo-700"}`}
        >
          {editIndex !== null ? "Update Review" : "Submit Review"}
        </button>
      </form>

     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {reviews.map((review, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm uppercase">
          {review.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-md font-semibold text-gray-800">{review.name}</h3>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
      </div>

      {/* Message */}
      <p className="text-sm text-gray-700 mb-2">{review.message}</p>

      {/* Rating */}
      <div className="text-yellow-500 font-medium text-sm mb-2">
        ⭐ {review.rating} / 5
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-auto">
        <button
          onClick={() => handleEdit(index)}
          className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Review;
