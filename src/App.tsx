import Login from "./pages/Login";
import Newsfeed from "./pages/Newsfeed";
import Profile from "./pages/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";
import NavBar from "./components/common/Navigation/NavBar";
import Header from "./components/common/Header/Header";
import SettingsProvider from "./contexts/SettingsContext";
import Settings from "./pages/Settings";
import Uni from "./pages/Uni";
import Clubs from "./pages/Clubs";
import Friends from "./pages/Friends";
import Map from "./pages/Map";
import Messages from "./pages/Messages";
import Events from "./pages/Events";
import Onboard from "./pages/Onboard";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Calendar from "./pages/Calendar";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(UserContext);
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return <ProtectedLayout>{children}</ProtectedLayout>;
};

const ProtectedLayout = ({ children }) => {
    return (
        <SettingsProvider>
            <div className="flex flex-col justify-between w-full h-full">
                <Header />
                <main className="h-full w-full p-1 flex-1 overflow-auto">
                    {children}
                </main>
                <NavBar />
            </div>
        </SettingsProvider>
    );
};

function App() {
    return (
        <div className="h-screen w-screen font-poppins bg-slate-900">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/notifications"
                    element={
                        <ProtectedRoute>
                            <Notifications />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <Settings />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/messages"
                    element={
                        <ProtectedRoute>
                            <Messages />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/uni"
                    element={
                        <ProtectedRoute>
                            <Uni />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/clubs"
                    element={
                        <ProtectedRoute>
                            <Clubs />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/friends"
                    element={
                        <ProtectedRoute>
                            <Friends />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/calendar"
                    element={
                        <ProtectedRoute>
                            <Calendar />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
