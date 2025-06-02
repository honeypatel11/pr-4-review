import { useState } from "react"
const Review = () => {
    const [input, setinput] = useState({

    });

    const handlechange = (e) => {
        console.log(e.target.value);
        setinput(...input,[e.target.id],[e.target.value])

    }

    return (
        <div className='container mx-auto'>

            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-xl my-3 font-bold text-gray-900 dark:text-dark">Name :-</label>
                    <input type="text" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter Your Name" required onChange={handlechange}  />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-xl font-bold text-gray-900 dark:text-dark">Your message :-</label>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handlechange} placeholder="Leave a comment..."   />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="block mb-2 text-xl my-3 font-bold text-gray-900 dark:text-dark">Date :-</label>
                    <input type="date" id="date" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter Your Date" required onChange={handlechange} />
                </div>

                <div className="max-w-sm mx-auto">
                    <label htmlFor="rating" className="block mb-2 text-xl font-bold text-gray-900 dark:text-dark ">Select Rate :-</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handlechange}>
                        <option>Choose a rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <button type="button" className="text-white my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </form>

        </div>
    )
}

export default Review