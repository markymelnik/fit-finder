import MobileSearch from "./MobileSearch/MobileSearch";
import DesktopSearch from "./DesktopSearch/DesktopSearch";

const Search = ({ useIsMobile }) => {
  return useIsMobile ? <MobileSearch useIsMobile={useIsMobile} /> : <DesktopSearch useIsMobile={useIsMobile} />;
};

export default Search;
