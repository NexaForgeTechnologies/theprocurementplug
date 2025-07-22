"use client";
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import IconComponent from '../icon/Icon';

export default function Auth() {
    const pathname = usePathname();
    const [isSignup, setIsSignup] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
    });
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [showSignOut, setShowSignOut] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // New loading state
    const loginSource = pathname?.includes('vip-lounge') ? 'vip-lounge' : 'default';
    const modalRef = useRef(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (err) {
                console.error('Error parsing stored user:', err);
                localStorage.removeItem('user');
            }
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true); // Set loading to true when submission starts

        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            setIsLoading(false); // Reset loading state
            return;
        }

        const endpoint = isSignup ? '/api/signup' : '/api/login';
        const payload = isSignup
            ? { ...formData, login_source: loginSource }
            : { email: formData.email, password: formData.password, login_source: loginSource };

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (res.ok) {
                if (isSignup) {
                    setIsSignup(false);
                    setFormData({ ...formData, name: '' });
                } else {
                    const userData = { name: data.user.name, email: data.user.email };
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                    setIsModalOpen(false);
                    setFormData({ email: '', password: '', name: '' });
                }
            } else {
                setError(data.message || 'An error occurred');
            }
        } catch (err) {
            setError('Network error');
        } finally {
            setIsLoading(false); // Reset loading state after request completes
        }
    };

    const handleSignOut = () => {
        setUser(null);
        setShowSignOut(false);
        localStorage.removeItem('user');
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setError('');
    };

    const getFirstLetter = (name) => {
        return name && name.length > 0 ? name[0].toUpperCase() : '';
    };

    useEffect(() => {
        if (isModalOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            const preventTouch = (e) => {
                if (!modalRef.current) return;
                const isInsideModal = modalRef.current.contains(e.target);
                if (!isInsideModal) {
                    e.preventDefault();
                    return;
                }
                const { scrollTop, scrollHeight, clientHeight } = modalRef.current;
                const atTop = scrollTop === 0;
                const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
                const scrollingUp = e.touches[0].clientY > e.targetTouches[0].clientY;
                const scrollingDown = e.touches[0].clientY < e.targetTouches[0].clientY;

                if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
                    e.preventDefault();
                }
            };
            document.addEventListener("touchmove", preventTouch, { passive: false });

            return () => {
                const top = parseInt(document.body.style.top || "0", 10);
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, -top);
                document.removeEventListener("touchmove", preventTouch);
            };
        }
    }, [isModalOpen]);

    return (
        <div className="flex justify-center items-center text-center">
            {!isModalOpen && !user && (
                <button
                    type="button"
                    onClick={openModal}
                    className="cursor-pointer bg-[#85009D] text-white text-[16px] xl:text-[20px] px-3 py-1 xl:px-[20px] xl:py-[6px] rounded-md w-full"
                >
                    Login
                    {/* Login/Signup */}
                </button>
            )}
            {user && (
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowSignOut(!showSignOut)}
                        className="flex items-center justify-center w-10 h-10 bg-[#85009D] text-white rounded-full text-lg font-bold cursor-pointer hover:bg-[#6e007f]"
                        aria-label={`User ${user.name}`}
                    >
                        {getFirstLetter(user.name)}
                    </button>
                    {showSignOut && (
                        <div className="text-center absolute  top-12 right-4  bg-[#FFFBF5] border border-[#DBBB89] rounded-md p-4 w-[200px] shadow-md">
                            <p className="text-[#1B1B1B] font-semibold">{user.name}</p>
                            <p className="text-[#1B1B1B] text-sm mb-3">{user.email}</p>
                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="w-full p-1 bg-[#85009D] text-white border-none rounded-md cursor-pointer hover:bg-[#6e007f] transition-all"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            )}
            {isModalOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6"
                    onClick={closeModal}
                >
                    <div
                        ref={modalRef}
                        className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-center items-center mb-4">
                            <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                                {isSignup ? 'Sign Up' : 'Login'}
                            </h3>
                            <button
                                className="absolute top-4 right-4 text-2xl text-[#1B1B1B]"
                                type="button"
                                onClick={closeModal}
                            >
                                <IconComponent name="close" color='#1B1B1B' size={16} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {isSignup && (
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                                />
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isLoading} // Disable button when loading
                                    className={`flex items-center justify-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? 'processing..' : (isSignup ? 'Sign Up' : 'Login')}
                                    {!isLoading && (
                                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                                    )}
                                </button>
                            </div>
                        </form>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        <div className='flex justify-between items-center my-4 gap-2'>
                            <div className='w-full h-[2px] bg-[#85009D] rounded-md'></div>
                            <p className='text-[#010101]'>OR</p>
                            <div className='w-full h-[2px] bg-[#85009D] rounded-md'></div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsSignup(!isSignup)}
                            className="bg-transparent border-none text-[#85009D] cursor-pointer"
                        >
                            {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}