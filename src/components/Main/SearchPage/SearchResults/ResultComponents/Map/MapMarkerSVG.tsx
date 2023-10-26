type MapMarkerSVGProps = {
  isHovered: boolean;
}

const MapMarkerSVG = ({ isHovered }: MapMarkerSVGProps) => {

  return (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28">
      <circle cx="12" cy="14" r="11" fill="hsl(209, 15%, 28%)" />
      <circle cx="12" cy="12" r="9" fill={isHovered ? `rgb(163, 0, 11)` : `#004BA8` } stroke="white" strokeWidth="3.5" />
    </svg>
  )
}

export default MapMarkerSVG;