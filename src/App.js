import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function WelcomeScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-500 mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-6">
          <Link to="/create-account">
            <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full py-2 bg-purple-200 text-purple-800 rounded-lg font-semibold mt-3">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CreateAccount() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold">Create Account Page</h1>
    </div>
  );
}

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold">Login Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;