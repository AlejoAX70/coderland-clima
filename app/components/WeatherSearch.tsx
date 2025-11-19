import { useState } from "react";
import { Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
  isLoading?: boolean;
}

const WeatherSearch = ({ onSearch, isLoading = false }: WeatherSearchProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div
        className="flex items-center bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-xl 
                  rounded-full p-2 shadow-[0_8px_25px_rgba(0,0,0,0.1)] border border-white/40"
      >
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 bg-transparent border-0 outline-none focus:outline-none 
             focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0
             text-base px-4 placeholder:text-gray-500 text-black"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading || !city.trim()}
          className="flex items-center bg-blue-400 hover:bg-blue-500 text-white rounded-full 
                 px-5 py-2 font-medium shadow-md transition-all hover:shadow-lg hover:scale-[1.03]"
        >
          <Search className="w-4 h-4 mr-2" />
          Buscar
        </button>
      </div>
    </form>
  );
};

export default WeatherSearch;
