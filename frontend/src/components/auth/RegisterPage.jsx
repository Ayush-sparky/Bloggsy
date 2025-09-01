import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useToast } from "../../context/ToastContext";

const initialState = {
  username: "",
  email: "",
  password: "",
  bio: "",
  file: null,
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const { showSuccess, showError } = useToast();
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "profile") {
      setForm({
        ...form,
        file: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData();
      formData.append("username", form.username);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("bio", form.bio);
      formData.append("profile", form.file);

      const response = await register(formData);
      if (!response.success) {
        setForm(initialState);
        showError(response.message);
        setIsLoading(false);
        return;
      }
      showSuccess("Registration Successful!!!");
      navigate("/");
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Join bloggsy
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Create your account to start blogging
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                disabled={isLoading}
                value={form.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={isLoading}
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                disabled={isLoading}
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm
                 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="bio">Bio</label>
              <textarea
                className="mt-2 placeholder-slate-400 p-2 w-full h-36 outline-none border border-slate-300 focus:ring-2 focus:ring-blue-500 rounded-sm"
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="profile">Profile Picture</label>
              <input type="file" onChange={handleChange} name="profile" accept="image/*" />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Sign
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
