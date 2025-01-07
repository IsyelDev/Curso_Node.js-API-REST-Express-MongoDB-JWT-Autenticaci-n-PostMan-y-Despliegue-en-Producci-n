// Constants
const YEARS = [2000, 2002, 2010, 2015]; // Use uppercase for constant arrays
const REFERENCE_YEAR = 2019; // Easier to adjust reference year if needed

/**
 * Calculate ages based on a reference year.
 * @param {number[]} years - Array of years to calculate ages from.
 * @param {number} referenceYear - The year to calculate ages relative to.
 * @returns {number[]} Array of calculated ages.
 */
const calculateAges = (years, referenceYear) => {
  if (!Array.isArray(years)) {
    throw new Error("Input must be an array of years");
  }
  return years.map((year) => {
    if (typeof year !== "number" || year <= 0) {
      throw new Error(`Invalid year: ${year}`);
    }
    return referenceYear - year;
  });
};

try {
  const ages = calculateAges(YEARS, REFERENCE_YEAR);
  console.log("Calculated Ages:", ages);
} catch (error) {
  console.error("Error calculating ages:", error.message);
}
