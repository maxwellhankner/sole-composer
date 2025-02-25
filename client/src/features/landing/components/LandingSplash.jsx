import React from 'react';
import { Button } from '../../../shared/ui/button';
import { H1, P } from '../../../shared/ui/typography';
import { useNavigate } from 'react-router-dom';
import soleCover from '../../../assets/sole-cover.png';

function LandingSplash() {
  const navigate = useNavigate();

  return (
    <div className="py-8 md:pt-24 pb-24">
      <div className="flex flex-col-reverse md:flex-row md:max-w-[1100px] md:mx-auto">
        <div className="w-full px-5 text-center md:p-0 md:text-left md:w-full flex flex-col justify-center items-center md:items-start space-y-6">
          <H1 className="text-[2rem]">
            Create Something New
          </H1>
          <P className="text-lg">
            Sole Composer is a 3D tool that allows you to design and visualize custom sneakers.
          </P>
          <Button 
            variant="outline"
            className="max-w-fit"
            onClick={() => navigate('/designer')}
          >
            START DESIGNING
          </Button>
        </div>
        <div className="w-full px-8 md:w-full md:p-0 md:mr-[5%]">
          <img src={soleCover} alt="Sole cover" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default LandingSplash; 