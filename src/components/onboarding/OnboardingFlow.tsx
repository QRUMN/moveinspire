import React from 'react';
import { OnboardingLayout } from './OnboardingLayout';
import { PersonalInfoStep } from './PersonalInfoStep';
import { GoalsStep } from './GoalsStep';
import { MembershipSelectionStep } from './MembershipSelectionStep';
import { HealthQuestionsStep } from './HealthQuestionsStep';
import { ConfirmationStep } from './ConfirmationStep';
import { SuccessScreen } from './SuccessScreen';
import { OnboardingData } from './types';

export function OnboardingFlow() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState<OnboardingData>({});
  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handlePersonalInfoComplete = (personalInfo: any) => {
    setData((prev) => ({ ...prev, personalInfo }));
    setStep(2);
  };

  const handleGoalsComplete = (goals: string[]) => {
    setData((prev) => ({ ...prev, goals }));
    setStep(3);
  };

  const handleMembershipComplete = (membershipPlan: string) => {
    setData((prev) => ({ ...prev, membershipPlan }));
    setStep(4);
  };

  const handleHealthInfoComplete = (healthInfo: any) => {
    setData((prev) => ({ ...prev, healthInfo }));
    setStep(5);
  };

  const handleComplete = () => {
    // Here you would typically submit all the collected data to your backend
    console.log('Onboarding completed with data:', data);
    setIsCompleted(true);
  };

  if (isCompleted) {
    return (
      <SuccessScreen 
        membershipType={data.membershipPlan || ''}
        firstName={data.personalInfo?.firstName || ''}
      />
    );
  }

  return (
    <OnboardingLayout
      currentStep={step}
      totalSteps={5}
      onBack={step > 1 ? handleBack : undefined}
      showBack={step > 1}
    >
      {step === 1 && (
        <PersonalInfoStep onNext={handlePersonalInfoComplete} />
      )}
      {step === 2 && (
        <GoalsStep 
          onNext={handleGoalsComplete}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <MembershipSelectionStep
          onNext={handleMembershipComplete}
          onBack={handleBack}
        />
      )}
      {step === 4 && (
        <HealthQuestionsStep
          onNext={handleHealthInfoComplete}
          onBack={handleBack}
        />
      )}
      {step === 5 && (
        <ConfirmationStep
          onComplete={handleComplete}
          onBack={handleBack}
          membershipType={data.membershipPlan || ''}
        />
      )}
    </OnboardingLayout>
  );
}