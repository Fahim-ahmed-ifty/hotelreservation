'use client';

import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react';

interface AuthContextType {
	isAuthenticated: boolean;
	role: 'admin' | 'user' | null;
	login: (token: string, role: 'admin' | 'user') => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [isAuthenticated, setIsAuthenticated] =
		useState<boolean>(false);
	const [role, setRole] = useState<'admin' | 'user' | null>(null);

	useEffect(() => {
		const token = localStorage.getItem('authToken');
		const storedRole = localStorage.getItem('userRole');

		if (token && storedRole) {
			setIsAuthenticated(true);
			setRole(storedRole as 'admin' | 'user');
		}
	}, []);

	const login = (token: string, role: 'admin' | 'user') => {
		localStorage.setItem('authToken', token);
		localStorage.setItem('userRole', role);
		setIsAuthenticated(true);
		setRole(role);
	};

	const logout = () => {
		localStorage.removeItem('authToken');
		localStorage.removeItem('userRole');
		setIsAuthenticated(false);
		setRole(null);
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, role, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
