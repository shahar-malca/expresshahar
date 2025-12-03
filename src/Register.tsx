import React, { useState } from 'react';

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value);

    // Validate age
    if (value === '') {
      setAgeError('');
    } else {
      const ageNum = parseInt(value);
      if (isNaN(ageNum) || ageNum <= 10) {
        setAgeError('Age must be greater than 10');
      } else {
        setAgeError('');
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
    if (value === '') {
      setEmailError('');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // Validate password
    if (value === '') {
      setPasswordError('');
    } else {
      const hasCapital = /[A-Z]/.test(value);
      const isLongEnough = value.length >= 8;

      if (!isLongEnough && !hasCapital) {
        setPasswordError('Password must be at least 8 characters and contain a capital letter');
      } else if (!isLongEnough) {
        setPasswordError('Password must be at least 8 characters');
      } else if (!hasCapital) {
        setPasswordError('Password must contain at least one capital letter');
      } else {
        setPasswordError('');
      }
    }
  };
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover aspect-auto"
          data-alt="A blurred, abstract, artistic photo with soft gradients of blue and purple"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC4aaY9qb5QyLA59vD8EMsGenZDpCZEHfqaMq8ik1OA9kAMVkCaPFNpck0YgnTmhkHL13CVweVqOt3DfrkvsqqHNK_ReLrckLvP1K17FalvbqyCDNQ39ug7_v6iwKkD-kLAf2WvUQCjL7CEi-sdgGVZKMbsBRkR_vSnpmfxuXo98gtGFtnGJuoWMku5gd1ZUVKDX9405Z8-RZAAyrg2hFCtB3jwtu7JQChBZZNVilD60_brIrOG4wybTJNA8JZbsEeXkOgliPxmthV")',
            filter: 'blur(40px) saturate(1.2)',
            opacity: 0.25
          }}
        ></div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full grow p-4 sm:p-6 md:p-8">
        <div className="flex w-full max-w-md flex-col items-center gap-4 py-8">
          {/* App Logo */}
          <div className="flex items-center justify-center p-2 rounded-lg bg-primary mb-4">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '36px' }}>photo_library</span>
          </div>
          {/* Header Text */}
          <h1 className="text-[#111118] dark:text-white tracking-light text-[32px] font-bold leading-tight text-center pb-2">Create Your Gallery</h1>
          <p className="text-center text-gray-500 dark:text-gray-400 pb-4">Join our community of art lovers.</p>
          {/* Form */}
          <form className="w-full flex flex-col gap-4">
            <div className="flex w-full flex-col sm:flex-row gap-4">
              {/* First Name */}
              <div className="flex flex-col w-full">
                <label className="text-[#111118] dark:text-gray-200 text-sm font-medium leading-normal pb-2" htmlFor="first-name">First Name</label>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111118] dark:text-white dark:bg-background-dark/50 focus:outline-none focus:ring-2 focus:ring-primary border border-[#dcdce5] dark:border-gray-700 bg-white/80 focus:border-primary h-14 placeholder:text-[#636388] p-[15px] text-base font-normal leading-normal" id="first-name" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              {/* Last Name */}
              <div className="flex flex-col w-full">
                <label className="text-[#111118] dark:text-gray-200 text-sm font-medium leading-normal pb-2" htmlFor="last-name">Last Name</label>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111118] dark:text-white dark:bg-background-dark/50 focus:outline-none focus:ring-2 focus:ring-primary border border-[#dcdce5] dark:border-gray-700 bg-white/80 focus:border-primary h-14 placeholder:text-[#636388] p-[15px] text-base font-normal leading-normal" id="last-name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            {/* Age */}
            <div className="flex flex-col w-full">
              <label className="text-[#111118] dark:text-gray-200 text-sm font-medium leading-normal pb-2" htmlFor="age">Age</label>
              <input
                className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg dark:bg-background-dark/50 focus:outline-none focus:ring-2 border bg-white/80 h-14 placeholder:text-[#636388] p-[15px] text-base font-normal leading-normal ${ageError
                  ? 'text-red-600 dark:text-red-400 border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'text-[#111118] dark:text-white border-[#dcdce5] dark:border-gray-700 focus:ring-primary focus:border-primary'
                  }`}
                id="age"
                placeholder="Enter your age"
                type="number"
                value={age}
                onChange={handleAgeChange}
              />
              {ageError && (
                <p className="text-red-600 dark:text-red-500 text-xs mt-1 px-1">{ageError}</p>
              )}
            </div>
            {/* Username */}
            <div className="flex flex-col w-full">
              <label className="text-[#111118] dark:text-gray-200 text-sm font-medium leading-normal pb-2" htmlFor="username">Username</label>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111118] dark:text-white dark:bg-background-dark/50 focus:outline-none focus:ring-2 focus:ring-primary border border-[#dcdce5] dark:border-gray-700 bg-white/80 focus:border-primary h-14 placeholder:text-[#636388] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal" id="username" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className="text-green-500 flex border border-[#dcdce5] dark:border-gray-700 bg-white/80 dark:bg-background-dark/50 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
              </div>
              <p className="text-green-600 dark:text-green-500 text-xs mt-1 px-1">Username is available!</p>
            </div>
            {/* Email */}
            <div className="flex flex-col w-full">
              <label className="text-[#111118] dark:text-gray-200 text-sm font-medium leading-normal pb-2" htmlFor="email">Email</label>
              <input
                className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg dark:bg-background-dark/50 focus:outline-none focus:ring-2 border bg-white/80 h-14 placeholder:text-[#636388] p-[15px] text-base font-normal leading-normal ${emailError
                    ? 'text-red-600 dark:text-red-400 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'text-[#111118] dark:text-white border-[#dcdce5] dark:border-gray-700 focus:ring-primary focus:border-primary'
                  }`}
                id="email"
                placeholder="your@email.com"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-red-600 dark:text-red-500 text-xs mt-1 px-1">{emailError}</p>
              )}
            </div>
            {/* Password */}
            <div className="flex flex-col w-full">
              <label className="text-[#111118] dark:text-gray-200 text-sm font-medium leading-normal pb-2" htmlFor="password">Password</label>
              <input
                className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg dark:bg-background-dark/50 focus:outline-none focus:ring-2 border bg-white/80 h-14 placeholder:text-[#636388] p-[15px] text-base font-normal leading-normal ${passwordError
                    ? 'text-red-600 dark:text-red-400 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'text-[#111118] dark:text-white border-[#dcdce5] dark:border-gray-700 focus:ring-primary focus:border-primary'
                  }`}
                id="password"
                placeholder="Create a password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="text-red-600 dark:text-red-500 text-xs mt-1 px-1">{passwordError}</p>
              )}
            </div>
            {/* Confirm Password */}
            <div className="flex flex-col w-full">
              <label className="text-[#111118] dark:text-gray-200 text-sm font-medium leading-normal pb-2" htmlFor="confirm-password">Confirm Password</label>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111118] dark:text-white dark:bg-background-dark/50 focus:outline-none focus:ring-2 focus:ring-red-500 border border-red-500 bg-white/80 h-14 placeholder:text-[#636388] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal" id="confirm-password" placeholder="Re-enter your password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <div className="text-red-500 flex border border-red-500 bg-white/80 dark:bg-background-dark/50 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined">error</span>
                </div>
              </div>
              <p className="text-red-600 dark:text-red-500 text-xs mt-1 px-1">Passwords do not match.</p>
            </div>
            {/* CTA Button */}
            <button className="w-full mt-4 h-14 flex items-center justify-center rounded-lg bg-primary text-white text-base font-bold leading-normal transition-transform duration-200 hover:scale-105 active:scale-100" type="submit">Create Account</button>
          </form>
          {/* Secondary Link & Terms */}
          <div className="w-full mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account? <a className="font-semibold text-primary hover:underline" href="#">Log In</a>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              By signing up, you agree to our
              <a className="underline hover:text-primary" href="#">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
