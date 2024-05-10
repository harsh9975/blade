import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const SparklesIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9963 6.74622L9.45747 10.9301C9.37054 11.1671 9.23276 11.3832 9.05422 11.5617C8.87569 11.7402 8.66042 11.8778 8.42338 11.9647L4.23873 13.5037L8.4226 15.0425C8.65964 15.1295 8.87569 15.2673 9.05422 15.4458C9.2328 15.6244 9.37032 15.8397 9.45724 16.0768L10.9963 20.2613L12.535 16.0774C12.622 15.8403 12.7597 15.6244 12.9383 15.4458C13.1169 15.2672 13.3322 15.1297 13.5693 15.0428L17.7538 13.5037L13.5699 11.965C13.3328 11.878 13.1169 11.7403 12.9383 11.5617C12.7598 11.3832 12.6223 11.1679 12.5353 10.9309L10.9963 6.74622ZM10 4.5706C10.2923 4.36693 10.64 4.25774 10.9963 4.25774C11.3525 4.25774 11.7002 4.36693 11.9925 4.5706C12.2848 4.77427 12.5076 5.06264 12.6309 5.39684L12.6314 5.39794L14.3713 10.1287L19.1032 11.8691C19.4374 11.9924 19.7257 12.2153 19.9294 12.5075C20.1331 12.7998 20.2423 13.1475 20.2423 13.5037C20.2423 13.86 20.1331 14.2077 19.9294 14.5C19.7257 14.7922 19.4374 15.0151 19.1032 15.1384L14.3713 16.8788L12.6309 21.6107C12.5076 21.9449 12.2848 22.2332 11.9925 22.4369C11.7002 22.6406 11.3525 22.7498 10.9963 22.7498C10.64 22.7498 10.2923 22.6406 10 22.4369C9.70776 22.2332 9.48492 21.9449 9.36156 21.6107L7.62123 16.8788L2.88935 15.1384C2.55514 15.0151 2.26678 14.7922 2.06311 14.5C1.85944 14.2077 1.75024 13.86 1.75024 13.5037C1.75024 13.1475 1.85944 12.7998 2.06311 12.5075C2.26678 12.2153 2.55514 11.9924 2.88935 11.8691L7.62123 10.1287L9.36156 5.39684C9.48492 5.06264 9.70776 4.77427 10 4.5706ZM7.57942 10.2424L7.57991 10.2411L7.57942 10.2424ZM7.73491 16.9206L7.73357 16.9201L7.73491 16.9206ZM14.4131 16.7651L14.4126 16.7664L14.4131 16.7651ZM14.2576 10.0869L14.2589 10.0874L14.2576 10.0869Z"
        fill={iconColor}
      />
      <Path
        d="M18 1.5C18 0.947715 17.5523 0.5 17 0.5C16.4477 0.5 16 0.947715 16 1.5V2.75H14.75C14.1977 2.75 13.75 3.19772 13.75 3.75C13.75 4.30228 14.1977 4.75 14.75 4.75H16V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V4.75H19.25C19.8023 4.75 20.25 4.30228 20.25 3.75C20.25 3.19772 19.8023 2.75 19.25 2.75H18V1.5Z"
        fill={iconColor}
      />
      <Path
        d="M22.5 6.75C22.5 6.19772 22.0523 5.75 21.5 5.75C20.9477 5.75 20.5 6.19772 20.5 6.75V7.25H20C19.4477 7.25 19 7.69772 19 8.25C19 8.80228 19.4477 9.25 20 9.25H20.5V9.75C20.5 10.3023 20.9477 10.75 21.5 10.75C22.0523 10.75 22.5 10.3023 22.5 9.75V9.25H23C23.5523 9.25 24 8.80228 24 8.25C24 7.69772 23.5523 7.25 23 7.25H22.5V6.75Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default SparklesIcon;
