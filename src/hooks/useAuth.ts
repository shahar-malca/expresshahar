import { useState } from 'react';
import { createUserWithEmailAndPassword, type UserCredential } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

interface UserData {
    firstName: string;
    lastName: string;
    age: string;
    username: string;
    email: string;
}

interface AuthError {
    code: string;
    message: string;
}

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const registerUser = async (userData: UserData, password: string): Promise<boolean> => {
        setLoading(true);
        setError(null);

        try {
            // Create user with email and password
            const userCredential: UserCredential = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                password
            );

            // Save user profile data to Firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                firstName: userData.firstName,
                lastName: userData.lastName,
                age: parseInt(userData.age),
                username: userData.username,
                email: userData.email,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });

            setLoading(false);
            return true;
        } catch (err) {
            const authError = err as AuthError;
            setLoading(false);

            // Handle Firebase authentication errors
            switch (authError.code) {
                case 'auth/email-already-in-use':
                    setError('This email is already registered. Please use a different email or log in.');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email address.');
                    break;
                case 'auth/operation-not-allowed':
                    setError('Email/password accounts are not enabled. Please contact support.');
                    break;
                case 'auth/weak-password':
                    setError('Password is too weak. Please use a stronger password.');
                    break;
                default:
                    setError(authError.message || 'An error occurred during registration. Please try again.');
            }

            return false;
        }
    };

    return {
        registerUser,
        loading,
        error,
    };
};
