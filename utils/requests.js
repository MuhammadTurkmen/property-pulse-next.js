const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
async function fetchProperties() {
  try {
    // Handle the case where the domain is not avalibale yet

    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch Single Property
async function fetchPropery(id) {
  try {
    // Handle the case where the domain is not avalibale yet

    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchPropery };
