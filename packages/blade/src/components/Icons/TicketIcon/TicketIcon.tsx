import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const TicketIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.12085 14.4771L2 14.5031V18.3774C2 18.8382 2.15269 19.2291 2.46268 19.538C2.77283 19.847 3.16623 20 3.63077 20H20.3692C20.8338 20 21.2272 19.847 21.5373 19.538C21.8473 19.2291 22 18.8382 22 18.3774V14.5031L21.8792 14.4771C21.3066 14.3537 20.832 14.0659 20.4514 13.6092C20.073 13.1552 19.8831 12.6211 19.8831 12C19.8831 11.3789 20.073 10.8403 20.4522 10.3776C20.8323 9.91378 21.3053 9.63115 21.8752 9.5237L22 9.50017V5.62264C22 5.16177 21.8473 4.77092 21.5373 4.46202C21.2272 4.15297 20.8338 4 20.3692 4H3.63077C3.16623 4 2.77283 4.15297 2.46268 4.46202C2.15269 4.77092 2 5.16177 2 5.62264V9.50017L2.12482 9.5237C2.69474 9.63115 3.16766 9.91378 3.5478 10.3776C3.92697 10.8402 4.11692 11.3789 4.11692 12C4.11692 12.6211 3.927 13.1552 3.5486 13.6092C3.16796 14.0659 2.69341 14.3537 2.12085 14.4771ZM3.78462 5.77358H20.2154V8.21799C19.6041 8.64744 19.1025 9.1792 18.7115 9.81235C18.3026 10.4744 18.0985 11.2048 18.0985 12C18.0985 12.7952 18.3026 13.5256 18.7115 14.1877C19.1025 14.8208 19.6041 15.3526 20.2154 15.782V18.2264H3.78462V15.7832C4.41163 15.3536 4.91777 14.8211 5.30154 14.1865C5.70181 13.5245 5.90154 12.7946 5.90154 12C5.90154 11.2054 5.70181 10.4755 5.30154 9.81355C4.91777 9.1789 4.41163 8.64644 3.78462 8.21684V5.77358ZM12 16.983C12.2412 16.983 12.4522 16.891 12.6265 16.7172C12.8009 16.5435 12.8923 16.3343 12.8923 16.0962C12.8923 15.8581 12.8009 15.649 12.6265 15.4752C12.4522 15.3015 12.2412 15.2094 12 15.2094C11.7588 15.2094 11.5478 15.3015 11.3735 15.4752C11.1991 15.649 11.1077 15.8581 11.1077 16.0962C11.1077 16.3343 11.1991 16.5435 11.3735 16.7172C11.5478 16.891 11.7588 16.983 12 16.983ZM12 12.8868C12.2412 12.8868 12.4522 12.7948 12.6265 12.621C12.8009 12.4472 12.8923 12.2381 12.8923 12C12.8923 11.7619 12.8009 11.5528 12.6265 11.379C12.4522 11.2052 12.2412 11.1132 12 11.1132C11.7588 11.1132 11.5478 11.2052 11.3735 11.379C11.1991 11.5528 11.1077 11.7619 11.1077 12C11.1077 12.2381 11.1991 12.4472 11.3735 12.621C11.5478 12.7948 11.7588 12.8868 12 12.8868ZM12 8.79057C12.2412 8.79057 12.4522 8.69855 12.6265 8.52477C12.8009 8.35101 12.8923 8.14188 12.8923 7.90377C12.8923 7.66567 12.8009 7.45654 12.6265 7.28278C12.4522 7.109 12.2412 7.01698 12 7.01698C11.7588 7.01698 11.5478 7.109 11.3735 7.28278C11.1991 7.45654 11.1077 7.66567 11.1077 7.90377C11.1077 8.14188 11.1991 8.35101 11.3735 8.52477C11.5478 8.69855 11.7588 8.79057 12 8.79057Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default TicketIcon;
