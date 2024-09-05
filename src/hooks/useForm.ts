import { useState } from "react";

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K], formData: T) => string | undefined;
};

// Define the useForm hook with generic types
const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validationRules?: ValidationRules<T>,
  onSubmit?: (formData: T) => void
) => {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validationRules) {
      const newErrors: Partial<Record<keyof T, string>> = {};
      Object.keys(validationRules).forEach((key) => {
        const rule = validationRules[key as keyof T];
        if (rule) {
          const errorMessage = rule(formData[key as keyof T], formData);
          if (errorMessage) {
            newErrors[key as keyof T] = errorMessage;
          }
        }
      });
      setErrors(newErrors);
      const hasErrors = Object.keys(newErrors).length > 0;
      if (hasErrors) {
        setIsSubmitting(false);
        return;
      }
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    setFormData,
    setErrors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
