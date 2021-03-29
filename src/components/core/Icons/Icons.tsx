import { FC } from "react";

interface IconProps {
  variant: string | "chevron" | "filter" | "arrow" | "arrow-r" | "house" | "yacht" | "car" | "map" | "logo" | "bell" | "bed" | "search";
  orientation?: "reverse" | "invert";
  width?: number;
  height?: number;
  color?: string;
}
const Icon: FC<IconProps> = ({ variant, height = 16, width = 16, color }) => {
  switch (variant) {
    case "chevron":
      return (
        <div>
          <div>Icon</div>
        </div>
      );
    case "arrow-r":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" id="BackArrow" width="14.496" height="14.485" viewBox="0 0 14.496 14.485">
          <g id="Rectangle_878" data-name="Rectangle 878" transform="translate(7.425 0) rotate(45)" fill={color} stroke={color} strokeWidth={1}>
            <rect width={10} height={2} rx={1} stroke="none" />
            <rect x="0.5" y="0.5" width={9} height={1} rx="0.5" fill="none" />
          </g>
          <g id="Rectangle_879" data-name="Rectangle 879" transform="translate(14.496 7.414) rotate(135)" fill={color} stroke={color} strokeWidth={1}>
            <rect width={10} height={2} rx={1} stroke="none" />
            <rect x="0.5" y="0.5" width={9} height={1} rx="0.5" fill="none" />
          </g>
          <g id="Path_374" data-name="Path 374" transform="translate(7.425 0) rotate(45)" fill={color}>
            <path
              d="M 9 1.5 L 1 1.5 C 0.7243000268936157 1.5 0.5 1.275699973106384 0.5 1 C 0.5 0.7243000268936157 0.7243000268936157 0.5 1 0.5 L 9 0.5 C 9.275699615478516 0.5 9.5 0.7243000268936157 9.5 1 C 9.5 1.275699973106384 9.275699615478516 1.5 9 1.5 Z"
              stroke="none"
            />
            <path
              d="M 1 0 L 9 0 C 9.552289962768555 0 10 0.4477200508117676 10 1 C 10 1.552279949188232 9.552289962768555 2 9 2 L 1 2 C 0.4477100372314453 2 0 1.552279949188232 0 1 C 0 0.4477200508117676 0.4477100372314453 0 1 0 Z"
              stroke="none"
              fill={color}
            />
          </g>
          <g id="Path_375" data-name="Path 375" transform="translate(0 6.243)" fill={color}>
            <path
              d="M 11.02812957763672 1.5 L 1.225349545478821 1.5 C 0.8321694731712341 1.5 0.4999994933605194 1.271029949188232 0.4999994933605194 1 C 0.4999994933605194 0.7289699912071228 0.8321694731712341 0.5 1.225349545478821 0.5 L 11.02812957763672 0.5 C 11.42130947113037 0.5 11.75347995758057 0.7289699912071228 11.75347995758057 1 C 11.75347995758057 1.271029949188232 11.42130947113037 1.5 11.02812957763672 1.5 Z"
              stroke="none"
            />
            <path
              d="M 1.225349426269531 0 L 11.02812957763672 0 C 11.70486927032471 0 12.25347995758057 0.4477200508117676 12.25347995758057 1 C 12.25347995758057 1.552279949188232 11.70486927032471 2 11.02812957763672 2 L 1.225349426269531 2 C 0.548609733581543 2 -9.5367431640625e-07 1.552279949188232 -9.5367431640625e-07 1 C -9.5367431640625e-07 0.4477200508117676 0.548609733581543 0 1.225349426269531 0 Z"
              stroke="none"
              fill={color}
            />
          </g>
        </svg>
      );
    case "close":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 10.699 18.017">
          <g transform="translate(7.003 5.657) rotate(90)">
            <g transform="translate(-4.041 -3.502) rotate(45)" fill="#000345" stroke="#000345" strokeWidth={1}>
              <rect width="12.571" height="2.286" rx="1.143" stroke="none" />
              <rect x="0.5" y="0.5" width="11.571" height="1.286" rx="0.643" fill="none" />
            </g>
            <g transform="translate(12.36 -2.08) rotate(135)" fill="#000345" stroke="#000345" strokeWidth={1}>
              <rect width="12.845" height="2.286" rx="1.143" stroke="none" />
              <rect x="0.5" y="0.5" width="11.845" height="1.286" rx="0.643" fill="none" />
            </g>
          </g>
        </svg>
      );
    case "search":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" id="SearchIcon" width="18.893" height="17.893" viewBox="0 0 18.893 17.893">
          <g id="Ellipse_135" data-name="Ellipse 135" fill="#fff" stroke="#a9b4cc" strokeWidth={1}>
            <circle cx={7} cy={7} r={7} stroke="none" />
            <circle cx={7} cy={7} r="6.5" fill="none" />
          </g>
          <g id="Rectangle_1102" data-name="Rectangle 1102" transform="translate(11.822 11.529) rotate(-45)" fill="#fff" stroke="#a9b4cc" strokeWidth={1}>
            <rect width={1} height={9} rx="0.5" stroke="none" />
            <rect x="0.5" y="0.5" height={8} fill="none" />
          </g>
        </svg>
      );
    case "filter":
      return (
        <svg id="Component_83_1" data-name="Component 83 – 1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33 33">
          <rect id="Rectangle_1098" data-name="Rectangle 1098" width={width} height={height} rx={6} fill="#f7f7f7" />
          <g id="Group_1380" data-name="Group 1380" transform="translate(19251.051 14733)">
            <g id="Rectangle_1096" data-name="Rectangle 1096" transform="translate(-19244.051 -14724)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <rect width={18} height={2} rx={1} stroke="none" />
              <rect x="0.5" y="0.5" width={17} height={1} rx="0.5" fill="none" />
            </g>
            <g id="Rectangle_1097" data-name="Rectangle 1097" transform="translate(-19244.051 -14710)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <rect width={18} height={2} rx={1} stroke="none" />
              <rect x="0.5" y="0.5" width={17} height={1} rx="0.5" fill="none" />
            </g>
            <g id="Ellipse_132" data-name="Ellipse 132" transform="translate(-19241.051 -14725)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <circle cx={2} cy={2} r={2} stroke="none" />
              <circle cx={2} cy={2} r="1.5" fill="none" />
            </g>
            <g id="Ellipse_133" data-name="Ellipse 133" transform="translate(-19233.051 -14711)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <circle cx={2} cy={2} r={2} stroke="none" />
              <circle cx={2} cy={2} r="1.5" fill="none" />
            </g>
          </g>
        </svg>
      );
    case "bed-sm":
      return (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          // style={{ enableBackground: "new 0 0 512 512" }}
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M482,233.539V117.007c0-49.626-40.374-90-90-90h-94.5c-5.523,0-10,4.477-10,10s4.477,10,10,10H392
              c38.598,0,70,31.402,70,70v106.005c-7.532-2.59-15.6-4.017-24-4.017h-2v-57.333c0-21.321-17.346-38.667-38.667-38.667H284.667
              c-11.358,0-21.586,4.924-28.667,12.747c-7.081-7.823-17.309-12.747-28.667-12.747H114.667C93.346,122.995,76,140.341,76,161.661
              v57.333h-2c-8.4,0-16.468,1.427-24,4.017V117.007c0-38.598,31.402-70,70-70h96.5c5.523,0,10-4.477,10-10s-4.477-10-10-10H120
              c-49.626,0-90,40.374-90,90v116.533c-18.188,13.495-30,35.12-30,59.456v128c0,5.523,4.477,10,10,10h20v44c0,5.523,4.477,10,10,10
              h54.012c5.523,0,10-4.477,10-10v-44h303.976v44c0,5.523,4.477,10,10,10H472c5.523,0,10-4.477,10-10v-44h20c5.523,0,10-4.477,10-10
              v-128C512,268.659,500.188,247.034,482,233.539z M266,161.661c0-10.293,8.374-18.667,18.667-18.667h112.667
              c10.293,0,18.667,8.374,18.667,18.667v57.333H266V161.661z M96,161.661c0-10.293,8.374-18.667,18.667-18.667h112.667
              c10.293,0,18.667,8.374,18.667,18.667v57.333H96V161.661z M84.012,464.995H50v-34h34.012V464.995z M462,464.995h-34.012v-34H462
              V464.995z M492,362.995H91.921c-5.523,0-10,4.477-10,10s4.477,10,10,10H492v28h-19.758c-0.081-0.002-0.16-0.012-0.242-0.012
              h-54.012c-0.082,0-0.161,0.01-0.242,0.012H94.254c-0.081-0.002-0.16-0.012-0.242-0.012H40c-0.082,0-0.161,0.01-0.242,0.012H20
              v-118c0-29.776,24.224-54,54-54h12h170h170h12c29.776,0,54,24.224,54,54V362.995z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M263.07,29.935c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
              s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93s2.93-4.43,2.93-7.07C266,34.375,264.93,31.794,263.07,29.935z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M59.15,365.924c-1.86-1.86-4.44-2.93-7.07-2.93c-2.64,0-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
              c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S61.01,367.784,59.15,365.924z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      );
    default:
      return (
        <div>
          <div className="text-red-500 ">add variant prop</div>
        </div>
      );
  }
};

export default Icon;

/*** Notes ***
 * Notes go here.
 */
