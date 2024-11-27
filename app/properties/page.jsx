import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";

async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLiC_API_DOMAIN}/properties`);
  } catch (error) {}
}

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => {
              return <PropertyCard key={properties._id} property={property} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
