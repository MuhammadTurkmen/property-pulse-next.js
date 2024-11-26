import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const getRateDisply = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    //    <!-- Listing 1 -->
    <div class="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        class="w-full h-auto rounded-t-xl"
      />
      <div class="p-4">
        <div class="text-left md:text-center lg:text-left mb-6">
          <div class="text-gray-600">{property.type}</div>
          <h3 class="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 class="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisply()}
        </h3>

        <div class="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-2" /> {property.beds}{" "}
            <span class="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-2" /> {property.baths}{" "}
            <span class="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" /> {property.square_feet}{" "}
            <span class="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div class="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && (
            <p>
              <i class="fa-solid fa-money-bill"></i> nightly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <i class="fa-solid fa-money-bill"></i> weekly
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <i class="fa-solid fa-money-bill"></i> monthly
            </p>
          )}
        </div>

        <div class="border border-gray-100 mb-5"></div>

        <div class="flex flex-col lg:flex-row justify-between mb-4">
          <div class="flex align-middle gap-2 mb-4 lg:mb-0">
            <i class="fa-solid fa-location-dot text-lg text-orange-700"></i>
            <span class="text-orange-700">
              {" "}
              {property.location.city} {property.location.state}{" "}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            class="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
