import { useState } from "react";

const Review = () => {
    const [input, setInput] = useState({
        name: '', message: '', date: '', rating: ''
    });

    const [reviewError, setReviewError] = useState({});

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (input.name.trim() === "") {
            errors.name = "Please enter a valid name.";
        }
        if (input.message.trim() === "") {
            errors.message = "Please enter a valid message.";
        }
        if (input.date.trim() === "") {
            errors.date = "Please select a date.";
        }
        if (input.rating.trim() === "" || input.rating === "Choose a rating") {
            errors.rating = "Please select a rating.";
        }

        setReviewError(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Submitted data:", input);
            alert("Review submitted!");
            setInput({ name: '', message: '', date: '', rating: '' });
        }
    };

    return (
        <div className='container mx-auto'>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-xl my-3 font-bold text-gray-900 dark:text-dark">Name :-</label>
                    <input
                        type="text"
                        id="name"
                        value={input.name}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                    />
                    {reviewError.name && <p className="text-red-500 text-sm">{reviewError.name}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-xl font-bold text-gray-900 dark:text-dark">Your message :-</label>
                    <textarea
                        id="message"
                        value={input.message}
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                        onChange={handleChange}
                        placeholder="Leave a comment..."
                    />
                    {reviewError.message && <p className="text-red-500 text-sm">{reviewError.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="block mb-2 text-xl my-3 font-bold text-gray-900 dark:text-dark">Date :-</label>
                    <input
                        type="date"
                        id="date"
                        value={input.date}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        onChange={handleChange}
                    />
                    {reviewError.date && <p className="text-red-500 text-sm">{reviewError.date}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="rating" className="block mb-2 text-xl font-bold text-gray-900 dark:text-dark ">Select Rate :-</label>
                    <select
                        id="rating"
                        value={input.rating}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        onChange={handleChange}
                    >
                        <option>Choose a rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    {reviewError.rating && <p className="text-red-500 text-sm">{reviewError.rating}</p>}
                </div>

                <button type="submit" className="text-white my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
            </form>
        </div>
    );
};

export default Review;
