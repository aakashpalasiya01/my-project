export function calculateinterest(list) {
  const interests = list.map((entry, index) => {
      if ((index + 1) % 5 === 0) { 
          const interest = entry.remainingAmount / list.length * 0.03;
          return parseFloat(interest.toFixed(2)); 
      }
      return null; 
  }).filter(interest => interest !== null); 
  
  return interests;
}
