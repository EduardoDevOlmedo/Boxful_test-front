"use client";
import React, { ReactNode } from 'react';
import SectionOne from '@/components/Sections/SectionOne';
import SectionTwo from '@/components/Sections/SectionTwo';
import useStepStore from './stores/useStepStore';
import './globals.css';




export default function Home() {

  const { currentStep } = useStepStore();

  const stepComponents: Record<number, ReactNode> = {
    1: <SectionOne />,
    2: <SectionTwo />,
  };

  const currentStepComponent = stepComponents[currentStep]
  
  return (
    <main>
      <div className="create_order_container">
        <h2 className="create_order_text">Crea una orden</h2>
        <p className="create_order_text_desc">Dale una ventaja competitiva a tu negocio con entregas el mismo día (Área Metropolitana) y el día siguiente a nivel nacional.</p>
      </div>
      <div className="form_container">
        {currentStepComponent}
      </div>
    </main>
  );
}
