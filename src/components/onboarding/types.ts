// Form Data Types
export interface PersonalInfoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}

export interface HealthQuestionsFormData {
  fitnessLevel: string;
  medicalConditions: string;
  injuries: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

// Step Props Types
export interface StepProps {
  onNext: (data: any) => void;
  onBack?: () => void;
}

// Membership Types
export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

// Goal Types
export interface Goal {
  id: string;
  title: string;
  description: string;
}

// Onboarding Data Type
export interface OnboardingData {
  personalInfo?: PersonalInfoFormData;
  goals?: string[];
  membershipPlan?: string;
  healthInfo?: HealthQuestionsFormData;
}