import React, {memo} from 'react';
import {Fragment} from "@/components";
import logoGoogle from "@/assets/clipboard/logo-google.png";
import logoIBM from "@/assets/clipboard/logo-ibm.png";
import logoMicrosoft from "@/assets/clipboard/logo-microsoft.png";
import logoHP from "@/assets/clipboard/logo-hp.png";
import logoVG from "@/assets/clipboard/logo-vector-graphics.png";

const BrandsComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Brands section */}
      <section id="Brands">
        <div className="section-container my-20">
          <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
            <img src={logoGoogle} alt="Google"/>
            <img src={logoIBM} alt="IBM"/>
            <img src={logoMicrosoft} alt="Microsoft"/>
            <img src={logoHP} alt="Hewlett Packard"/>
            <img src={logoVG} alt="Vector Graphics"/>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

BrandsComponent.displayName = "Brands";

export const Brands = memo(BrandsComponent);
