import {useState} from 'react'

export function EachStep(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    //i for index and e for event
    function changeStep(i, e){
      if (e) e.preventDefault();

      if(i < 0 || i >= steps.length) return;

      setCurrentStep(i);
    }
  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
  }
}