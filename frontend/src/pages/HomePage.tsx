import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5 py-8 -mt-16 text-center bg-white rounded-lg shadow-md md:px-32">
        <h1 className="text-5xl font-bold tracking-tight text-orange-500">
          Tuck into a takeaway today
        </h1>

        <span className="text-xl ">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <img src={landingImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-3xl font-bold tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats app for faster ordering and personalised
            recommendations.
          </span>
          <img src={appDownloadImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
