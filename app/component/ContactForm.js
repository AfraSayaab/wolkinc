"use client"
import React, { useState } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-hot-toast";
import axios from 'axios';
const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        gRecaptchaToken: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not available yet");
                return;
            }
            executeRecaptcha("enquiryFormSubmit").then(async (gReCaptchaToken) => {
                formData.gRecaptchaToken = gReCaptchaToken;
                const response = await axios.post("/api/contactform", formData);
                if (response.data.status == 200) {
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    gRecaptchaToken: "",
                });
            });
        } catch (error) {
            toast.error("An Unknown Error Occured");

        }
    };

    return (
        <div className="col-md-6">
            <div className="form contact-form">
                <form
                    role="form"
                    className="php-email-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            placeholder="Phone No"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            name="message"
                            rows="5"
                            placeholder="Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                            Your message has been sent. Thank you!
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
