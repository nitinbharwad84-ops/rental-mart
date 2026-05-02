import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, UserPlus } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import './Auth.css';

const Register = () => {
  const [formData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    register(formData);
    navigate('/');
  };

  const handleChange = (e) => {
    setUserData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculatePasswordStrength = (pass) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length > 6) strength += 25;
    if (/[A-Z]/.test(pass)) strength += 25;
    if (/[0-9]/.test(pass)) strength += 25;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 25;
    return strength;
  };

  const strength = calculatePasswordStrength(formData.password);

  return (
    <div className="auth-page">
      <motion.div 
        className="auth-card glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
          <h1>Join Rental-Mart</h1>
          <p>Create your business account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>Your Name</label>
            <div className="input-wrapper">
              <User size={20} className="input-icon" />
              <input 
                name="fullName"
                type="text" 
                placeholder="e.g. John Doe" 
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Your Email</label>
            <div className="input-wrapper">
              <Mail size={20} className="input-icon" />
              <input 
                name="email"
                type="email" 
                placeholder="admin@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Your Phone</label>
            <div className="input-wrapper">
              <Phone size={20} className="input-icon" />
              <input 
                name="phone"
                type="tel" 
                placeholder="e.g. 9098980900" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input 
                name="password"
                type="password" 
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="password-meter">
              <div className="meter-bg">
                <div 
                  className={`meter-fill strength-${strength}`} 
                  style={{ width: `${strength}%` }}
                ></div>
              </div>
              <span className="strength-text">
                Password strength: {strength < 50 ? 'Weak' : strength < 100 ? 'Medium' : 'Strong'}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input 
                name="confirmPassword"
                type="password" 
                placeholder="••••••••" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-btn">
            <span>REGISTER</span>
            <UserPlus size={20} />
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
