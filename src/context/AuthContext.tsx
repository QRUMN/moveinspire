import React, { createContext, useContext, useState } from 'react';

interface User {
  firstName: string;
  email: string;
  membershipType: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const DEMO_USER = {
  email: 'demo@moveandinspire.com',
  password: 'demo123',
  firstName: 'Sarah',
  membershipType: 'Monthly Subscription'
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Demo authentication
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setIsAuthenticated(true);
      setUser({
        firstName: DEMO_USER.firstName,
        email: DEMO_USER.email,
        membershipType: DEMO_USER.membershipType
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}