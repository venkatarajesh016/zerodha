import { useState } from "react";
import axios from "axios";

export default function Signup() {
    const [form, setForm] = useState({ email: "", password: "", username: "" });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        if (!form.email || !form.password || !form.username) {
            setMessage("All fields are required.");
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3000/Signup", form, { withCredentials: true });
            setMessage(res.data?.message || "Signup completed");
            if (res.data?.success) {
                // Redirect to the separate dashboard app
                window.location.href = "http://localhost:5174";
            }
        } catch (err) {
            setMessage(err?.response?.data?.message || "Network error. Try again.");
        }
        setLoading(false);
    };

    return (
        <div className="container mt-5 p-3">
            <div className="row align-items-center">
                <div className="col-1" />
                <div className="col-5 d-none d-md-block">
                    <img src="/images/signup.png" alt="signup" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="col">
                    <h3>Sign Up</h3>
                    <p>Create a new account or track your existing application</p>
                    {message && (
                        <div className="alert alert-info" role="alert">
                            {message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input name="username" value={form.username} onChange={handleChange} className="form-control" placeholder="Username" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input name="password" value={form.password} onChange={handleChange} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? "Creating..." : "Create Account"}
                        </button>
                    </form>
                </div>
                <div className="col-1" />
            </div>
        </div>
    );
}