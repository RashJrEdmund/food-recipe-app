import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAtom from '../../components/atoms/Button';
import { BUTTON_ICON_TYPE } from '../../services/constants';
import StyledLanding from './index.style';

export default function LandingPage() {
  const navigate = useNavigate();

  const gotToFoods = () => {
    navigate('/home');
    window.scrollTo(0, 0);
  };

  return (
    <StyledLanding>
      <div className="container">
        <div className="top_section">
          <div className="hero_col_1">
            <h1>Food App</h1>
            <p>
              Food is so much more than just calories and nutrients. It&apos;s
              an expression of love, of culture, of tradition. It&apos;s a way
              to connect with family, friends, and community. It&apos;s a way to
              nourish not only our bodies, but also our spirits.
            </p>

            <p>
              Food can bring joy, comfort, and meaning to our lives. It can tell
              a story, evoke memories, and transport us to another place and
              time. Food is a part of who we are and where we come from.
              It&apos;s not just sustenance; it&apos;s a part of our identity.
            </p>

            <p>
              <q>First we eat, then we do everything else.</q>
              <p>M. F. K. Fisher.</p>
            </p>
          </div>

          <div className="hero_col_2">
            <span className="hero_col_2_span" />
          </div>
        </div>

        <div className="cta_btns">
          <ButtonAtom
            text="Explore"
            radius="5px"
            size="1rem"
            bg="#ffc145"
            iconType={BUTTON_ICON_TYPE.NEXT}
            action={gotToFoods}
          />
        </div>
      </div>
    </StyledLanding>
  );
}
