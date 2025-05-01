import React, { useState, useRef } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const nameInputRef = useRef();

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email.includes('@')) newErrors.email = 'Invalid email address';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
    } else {
      setSuccess(false);
      nameInputRef.current.focus();
    }
  };

  const getPasswordStrength = () => {
    if (password.length >= 10) return 'Strong';
    if (password.length >= 6) return 'Moderate';
    return 'Weak';
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <label>Name</label>
        <input
          ref={nameInputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border p-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border p-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full border p-2"
        />
        <p className="text-xs text-gray-500">Strength: {getPasswordStrength()}</p>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full border p-2"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={Object.keys(validate()).length > 0}
      >
        Register
      </button>

      {success && <p className="text-green-600 mt-2">Registration successful!</p>}
    </form>
  );
};

export default RegistrationForm;
