import { Svg, G, Path, Defs, ClipPath, Rect } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const UmbrellaIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_60_996)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.00452884 11.905C0.59476 5.7216 5.78852 1 12 1C18.2115 1 23.4052 5.7216 23.9955 11.905C24.0223 12.1854 23.9295 12.4642 23.7399 12.6727C23.5504 12.8811 23.2817 13 23 13H13V19C13 20.1046 13.8954 21 15 21C16.1046 21 17 20.1046 17 19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19C19 21.2091 17.2091 23 15 23C12.7909 23 11 21.2091 11 19V13H1C0.718259 13 0.449586 12.8811 0.260064 12.6727C0.0705417 12.4642 -0.0222434 12.1854 0.00452884 11.905ZM21.8394 11C20.8835 6.39076 16.8072 3 12 3C7.19284 3 3.11654 6.39076 2.16062 11H21.8394Z"
          fill={iconColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_60_996">
          <Rect width="24" height="24" fill={iconColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default UmbrellaIcon;
