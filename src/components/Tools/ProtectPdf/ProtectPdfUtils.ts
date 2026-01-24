import { PDFDocument } from "pdf-lib";

interface PasswordData {
  password: string;
  confirmPassword: string;
}

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates password fields
 * @param passwordData - Object containing password and confirmPassword
 * @returns ValidationResult with isValid flag and optional error message
 */
export const validatePasswordFields = (
  passwordData: PasswordData,
): ValidationResult => {
  const { password, confirmPassword } = passwordData;

  // Check if both fields are populated
  if (!password || !confirmPassword) {
    return {
      isValid: false,
      error: "Both password fields are required",
    };
  }

  // Check if both fields match
  if (password !== confirmPassword) {
    return {
      isValid: false,
      error: "Passwords do not match",
    };
  }

  // Additional password strength validation (optional)
  if (password.length < 3) {
    return {
      isValid: false,
      error: "Password must be at least 3 characters long",
    };
  }

  return {
    isValid: true,
  };
};
