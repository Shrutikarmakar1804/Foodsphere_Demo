import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import

function DeleteAccount() {
  const [showConfirmModal, setShowConfirmModal] = useState(true);
  const navigate = useNavigate(); // ✅ create navigate function

  const confirmDelete = () => {
    setShowConfirmModal(false);
    navigate("/"); // ✅ redirect to login form page
  };

  return (
    <div>
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-xl shadow-2xl w-full max-w-md space-y-4 animate-fade-in">
            <h2 className="text-xl font-bold">Confirm Account Deletion</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Are you absolutely sure you want to delete your account? This action is irreversible.
            </p>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteAccount;
