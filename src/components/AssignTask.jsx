// AssignTask.jsx
import React, { useState } from "react";

const AssignTask = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        details: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form submission (e.g., send data to an API)
        console.log("Form Submitted:", formData);
        // Optionally, reset the form
        setFormData({
            name: "",
            email: "",
            service: "",
            details: ""
        });
    };

    return (
        <section className="min-h-screen bg-black py-12 text-blue-50">
            <div className="container mx-auto px-3 md:px-10">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold">Request Service</h1>
                    <p className="mt-4 text-lg opacity-50">
                        Fill out the form below to assign a task and request our service.
                    </p>
                </header>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-blue-50 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-blue-50 border border-gray-600 focus:outline-none focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-blue-50 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-blue-50 border border-gray-600 focus:outline-none focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="service" className="block text-blue-50 font-medium mb-2">
                            Service Requested
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-blue-50 border border-gray-600 focus:outline-none focus:border-blue-300"
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="consulting">Consulting</option>
                            <option value="web-development">Web Development</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="digital-marketing">Digital Marketing</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="details" className="block text-blue-50 font-medium mb-2">
                            Project Details
                        </label>
                        <textarea
                            id="details"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-2 rounded bg-gray-700 text-blue-50 border border-gray-600 focus:outline-none focus:border-blue-300"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-300 text-black py-2 px-4 rounded font-bold hover:bg-yellow-400 transition-colors duration-300"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AssignTask;
