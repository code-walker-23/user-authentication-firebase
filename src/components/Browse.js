import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Browse = () => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log('Current user:', currentUser); // Debug currentUser
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          console.log('User doc:', userDoc.data()); // Debug user details
          if (userDoc.exists()) {
            setUserDetails(userDoc.data());
          } else {
            toast.error('No user details found in Firestore.');
          }
        } catch (error) {
          toast.error('Error fetching user details: ' + error.message);
        }
      } else {
        setUser(null);
        setUserDetails(null);
      }
    });

    return () => unsubscribe(); // Clean up subscription on component unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully.');
      navigate('/signin'); // Redirect to sign-in page after logout
    } catch (error) {
      toast.error('Error logging out: ' + error.message);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl text-center">Please sign in to view your details</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Profile</h1>
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full">
            <img
              src={userDetails?.profilePicture || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {userDetails?.firstName || 'No First Name'} {userDetails?.lastName || 'No Last Name'}
              </h2>
              <p className="text-gray-600 mt-2">{user.email}</p>
              <p className="text-gray-600 mt-2">UID: {user.uid}</p>
              <button
                onClick={handleLogout}
                className="mt-4 w-full py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
