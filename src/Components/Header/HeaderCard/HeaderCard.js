import React, { useState } from 'react';
import './HeaderCard.css';
import GlitchClipEffect from 'react-glitch-effect/core/Clip';
import Typed from 'react-typed';
import { Link } from '@material-ui/core';

const HeaderCard = () => {
    const [isDisabledGlitch, setDisabledGlitch] = useState({
        main: false,
        text: false,
      });
    return (
        <div class="block">
            <p>HELLO I'M</p>
            <GlitchClipEffect disabled={isDisabledGlitch.main} duration='3s'>
          <h1>TOUHID SEZAN</h1>
        </GlitchClipEffect>
        <Typed
                    strings={[
                        'REACT EXPERT',
                        'FRONT END DEVELOPER',
                        'COMFORTABLE WITH FIREBASE',
                        'FAMILIAR WITH MONGODB'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <br/>
                <br/>
        <Link to='/'>Download Resume</Link>

        </div>
    );
};

export default HeaderCard;