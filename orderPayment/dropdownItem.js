export async function getProvinces() {
  try {
    const response = await fetch("https://psgc.cloud/api/provinces");
    const provinces = await response.json();
    const dropdown = document.getElementById("provinceDropdown");

    dropdown.innerHTML = "";

    provinces.forEach((province) => {
      const option = document.createElement("option");
      option.value = province.code;
      option.textContent = province.name; // Assuming the API returns a 'name' property
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching provinces:", error);
  }
}

export async function getCities() {
  try {
    
    const response = await fetch(
      "https://psgc.cloud/api/cities-municipalities"
    );

    const cities = await response.json();
    const dropdown = document.getElementById("cityDropdown");

    // Clear any existing options
    dropdown.innerHTML = "";

    // Populate the dropdown with cities
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city.code; // Assuming the API returns a 'code' property
      option.textContent = city.name; // Assuming the API returns a 'name' property
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
}

export async function getRegions() {
  try {
    const response = await fetch("https://psgc.cloud/api/regions");
    const regions = await response.json();
    const dropdown = document.getElementById("regionDropdown");

    // Clear any existing options
    dropdown.innerHTML = "";

    // Populate the dropdown with regions
    regions.forEach((region) => {
      const option = document.createElement("option");
      option.value = region.code; // Assuming the API returns a 'code' property
      option.textContent = region.name; // Assuming the API returns a 'name' property
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching regions:", error);
  }
}

export async function getBarangays() {
  try {
    const response = await fetch("https://psgc.cloud/api/barangays");
    const barangays = await response.json();
    const dropdown = document.getElementById("barangayDropdown");

    // Clear any existing options
    dropdown.innerHTML = "";

    // Populate the dropdown with barangays
    barangays.forEach((barangay) => {
      const option = document.createElement("option");
      option.value = barangay.code; // Replace 'code' with the actual property name
      option.textContent = barangay.name; // Replace 'name' with the actual property name
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching barangays:", error);
  }
}
